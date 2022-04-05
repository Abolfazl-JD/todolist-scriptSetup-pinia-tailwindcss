import { defineStore } from 'pinia'
import type { TodoItem } from '../types'

export const todoListData = defineStore({
  id: 'main',
  state: () => ({
    database: null as null | IDBDatabase,
    todolist : [] as TodoItem[]
  }),
  getters: {
    leftTodos : (state) => state.todolist.filter(todo => !todo.completed),
    paralize() : 'items' | 'item' {
      return this.leftTodos.length === 1 ? 'item' : 'items'
    }
  },
  actions: {
    createNewTodo(todoTitle: string) {
      const newTodoItem: TodoItem = {
        title: todoTitle,
        completed: false,
        id : this.todolist.length
      }
      this.todolist.push(newTodoItem)
      this.saveData(newTodoItem)
    },

    toggleCompleted(todo: TodoItem) {
      todo.completed = !todo.completed
      this.saveData({
        ...todo
      })
    },

    editWorkTodo(todo : TodoItem, newTodoTitle : string) {
      todo.title = newTodoTitle
      this.saveData({
        ...todo
      })
    },

    removeTodo(deletedItem : TodoItem) {
      const index = this.todolist.indexOf(deletedItem)
      this.todolist.splice(index, 1)
      this.deleteTodo(deletedItem)
      this.sortDatabaseIds()
    },

    clearDoneItems() {
      this.todolist = this.todolist.filter(todo => {
        if (todo.completed) {
          this.deleteTodo(todo)
        }
        else {
          return todo
        }
      })
      this.sortDatabaseIds()
    },

    checkAllTodos() {
      this.todolist = this.todolist.map(todo => {
        if (!todo.completed) {
          todo.completed = true
          this.saveData({...todo})
        }
        return todo
      })
    },

    // pwa methods
    async getDatabase() : Promise<IDBDatabase> {
      return new Promise((resolve, reject) => {
        if (this.database) {
          resolve(this.database)
        }

        let request = window.indexedDB.open('todomvcDB', 1)
        request.onerror = event => {
          console.error('ERROR: unable to open the database', event)
          reject('ERROR')
        }
        request.onsuccess = () => {
          this.database = request.result
          resolve(this.database)
        }

        request.onupgradeneeded = (event) => {
          let database = request.result
          database.createObjectStore('todos', {
            autoIncrement: true,
            keyPath : 'id'
          })
        }
      })
    },

    async getTodoStore() : Promise<TodoItem[]>{
      this.database = await this.getDatabase()
      return new Promise((resolve, reject) => {
        if (this.database) {
          const transaction = this.database.transaction('todos', 'readonly')
          const store = transaction.objectStore('todos')

          let todolist : TodoItem[] = [] 
          store.openCursor().onsuccess = (event: any) => {
            const cursor = event.target.result
            if (cursor) {
              const workTodo : TodoItem = cursor.value
              todolist.push(workTodo)
              cursor.continue()
            }
          }

          transaction.oncomplete = () => {
            resolve(todolist)
          }
          transaction.onerror = (event) => {
            reject(event)
          }
        }
      })
    },

    async saveTodoListData() {
      this.todolist = await this.getTodoStore()
    },

    async saveData(todo : TodoItem) {
      this.database = await this.getDatabase()
      return new Promise((resolve, reject) => {
        if (this.database) {
          const transaction = this.database.transaction('todos', 'readwrite')
          const store = transaction.objectStore('todos')
          store.put(todo)

          transaction.oncomplete = () => {
            resolve('item has been successfully saved')
          }
          transaction.onerror = (event) => {
            reject(event)
          }
        }

      })
    },

    async deleteTodo(todo: TodoItem) {
      this.database = await this.getDatabase()

      return new Promise((resolve, reject) => {
        if (this.database) {
          const transaction = this.database.transaction('todos', 'readwrite')
          const store = transaction.objectStore('todos')
          store.delete(todo.id)

          transaction.oncomplete = () => {
            resolve('item has been successfully deleted')
          }
          transaction.onerror = (event) => {
            reject(event)
          }
        }
      })
    },

    sortDatabaseIds() {
      for (let i = 0; i < this.todolist.length; i++) {
        const workTodo = this.todolist[i]
        if (workTodo.id !== i) {
          this.deleteTodo(workTodo)
          this.saveData({
            ...workTodo,
            id : i
          })
        }
      }
    }
  }
})
