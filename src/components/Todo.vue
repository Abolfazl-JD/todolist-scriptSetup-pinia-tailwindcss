<script lang="ts" setup>
import type {TodoItem} from '../types'

const props = defineProps<{
    workTodo : TodoItem
}>()


</script>

<template>
    <div 
        class="flex justify-between py-5 px-3 group border-b border-b-gray-400 dark:border-b-gray-700">
        <div class="flex items-center gap-5">
        <div 

            class="w-6 h-6 p-3 rounded-full flex items-center justify-center bg-gradient-to-r from-[#4fc6e4] to-[#703f89]">
            <div class="flex flex-col justify-center items-center h-full  text-white rounded-full p-[9.6px]" :class="workTodo.completed ? 'bg-gradient-to-r from-[#4fc6e4] to-[#703f89]' : 'bg-white dark:bg-slate-800'">
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-5 w-5 font-black absolute"  
                :class="workTodo.completed ? '' : 'dark:text-slate-800'" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path 
                fill-rule="evenodd" 
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
            </svg>
            </div>
        </div>
        <h3 class="text-gray-700 dark:text-gray-200 text-xl">{{ workTodo.title }}</h3>
        </div>
        <div class="hidden items-center gap-2 group-hover:flex">
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-7 w-7 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" 
            viewBox="0 0 20 20" 
            fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
        </svg>
        <svg 
            xmlns="http://wwwnpm .w3.org/2000/svg" 
            class="h-7 w-7 text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300" 
            viewBox="0 0 20 20" 
            fill="currentColor">
            <path 
            fill-rule="evenodd" 
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
        </div>
    </div>        
</template>