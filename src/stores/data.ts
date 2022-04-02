import { defineStore } from 'pinia'
import type { TodoItem } from '../types'

export const todoListData = defineStore({
  id: 'main',
  state: () => ({
    database: null as null | IDBDatabase,
    todolist : [] as TodoItem[]
  }),
  getters: {},
  actions: {
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
          store.openCursor().onsuccess = () => {
            const cursor = store.openCursor().result
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
    }
  }
})
