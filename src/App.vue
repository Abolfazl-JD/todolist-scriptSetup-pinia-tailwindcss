<script setup lang="ts">
import { onMounted, ref, computed } from 'vue'
import Todo from './components/Todo.vue'
import ReloadPwaVue from './components/ReloadPwa.vue'

import {todoListData} from './stores/data'
const todolistStore = todoListData()

const darkmode = ref(false)

onMounted(async() => {
  await todolistStore.saveTodoListData()
})

const newTodoName = ref('')
const makeNewTodo = () => {
  if(newTodoName.value){
    todolistStore.createNewTodo(newTodoName.value.trim())
    newTodoName.value = ''
  }
}

const listVisibility = ref('all')
const filteredTodolist = computed(() => {
  if(listVisibility.value === 'all') return todolistStore.todolist
  else if(listVisibility.value === 'active') return todolistStore.leftTodos
  else{
    return todolistStore.todolist.filter(todo => todo.completed)
  }
})
</script>

<template>
  <ReloadPwaVue />
  <div :class="darkmode ? 'dark' : ''">
    <div class="w-screen h-screen bg-white dark:bg-black relative">
      <div class="dark:md-picture-dark sm-picture-light md:md-picture-light  w-screen bg-no-repeat bg-cover flex items-center justify-center h-80 pt-40 md:h-80 md:pb-10">
        <div class="w-5/6 sm:w-2/3 md:w-7/12 lg:w-2/5 xl:w-1/3 text-white text-3xl absolute top-28">
          <header>
            <div class="flex justify-between w-full">
              <h1 class="font-bold tracking-[15px]">TODOLIST</h1>
              <!-- dark mode switcher -->
              <svg
                v-if="!darkmode"
                @click="darkmode = true" 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-7 w-7 text-amber-300" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                stroke-width="2">
                <path 
                  stroke-linecap="round" 
                  stroke-linejoin="round" 
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
              </svg>

              <svg
                v-else
                @click="darkmode = false" 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-7 w-7 text-amber-400" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path 
                  fill-rule="evenodd" 
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clip-rule="evenodd" />
              </svg>
            </div>
            <div class="flex bg-white dark:bg-slate-800 pl-2 mt-10 mb-8 rounded-md items-center">
              <svg
                @click="todolistStore.checkAllTodos" 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 text-gray-500 dark:text-gray-200" 
                viewBox="0 0 20 20"
                fill="currentColor">
                <path 
                  fill-rule="evenodd" 
                  d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
              <input 
                type="text" 
                placeholder="create a new todo ..."
                v-model="newTodoName"
                @keyup.enter="makeNewTodo" 
                class="text-[16px] grow ml-2 py-2 focus:outline-0 text-black dark:bg-slate-800 dark:text-gray-200 placeholder:text-gray-400 rounded-lg">
            </div>
          </header>
          <main class="h-[316px] overflow-auto">
            <div class="todolist-items w-full bg-white dark:bg-slate-800 rounded-md shadow shadow-gray-400 dark:shadow-slate-600">
              <Todo 
              v-for="workTodo of filteredTodolist"
              :key="workTodo.id"
              :workTodo="workTodo"/>
              <div 
                v-show="todolistStore.todolist.length"
                class="flex justify-between text-xs py-3 px-4 cursor-pointer sticky bottom-0 bg-slate-800">
                <p class="text-gray-600 dark:text-gray-300 order-2 md:order-1">{{ todolistStore.leftTodos.length }} {{ todolistStore.paralize}} left</p>
                <ul class="text-gray-600 dark:text-gray-200 flex gap-3 order-1 md:order-2">
                  <li 
                  class="font-bold"
                  @click="listVisibility = 'all'" 
                  :class="listVisibility === 'all' ? 'text-blue-500' : ''">
                    All
                  </li>
                  <li 
                  class="font-bold"
                  @click="listVisibility = 'active'" 
                  :class="listVisibility === 'active' ? 'text-blue-500' : ''">
                    Active
                  </li>
                  <li 
                  class="font-bold"
                  @click="listVisibility = 'completed'" 
                  :class="listVisibility === 'completed' ? 'text-blue-500' : ''">
                    Completed
                  </li>
                </ul>
                <p 
                class="text-gray-600 dark:text-gray-300 hidden md:block order-3"
                @click="todolistStore.clearDoneItems">
                  clear colmpleted
                </p>
              </div>
            </div>
          </main>
        </div>
      </div>
      <footer class="text-center absolute w-full bottom-5 pt-2">
        <p 
        v-show="todolistStore.todolist.length"
        class=" text-gray-700 text-sm lg:text-[16px] dark:text-gray-400">DRAG and DROP the items to sort TODOLIST</p>
        <p class="mt-4 text-purple-500 text-xs lg:text-sm dark:text-purple-600 ">
          Designed by 
          <a href="https://github.com/abolfazl-hue" target="blank" class="font-bold">Abolfazl Jalildoost</a>
        </p> 
      </footer>
    </div>
  </div>
</template>

<style>
@import './assets/base.css';

</style>
