<script setup lang="ts">
</script>

<template>
  <header>
    <div class="header-pic w-screen bg-no-repeat bg-cover flex items-center justify-center md:h-80 pt-56">
      <div class="w-1/3 text-white text-3xl">
        <div class="flex justify-between w-full">
          <h1 class="font-bold tracking-[15px]">TODOLIST</h1>
          <!-- dark mode switcher -->
          <svg 
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
        </div>
        <div class="flex bg-white pl-2 mt-10 mb-8 rounded-md items-center">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            class="h-5 w-5 text-gray-500" 
            viewBox="0 0 20 20"
            fill="currentColor">
            <path 
              fill-rule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
          </svg>
          <input 
            type="text" 
            placeholder="create a new todo ..." 
            class="text-[16px] grow ml-2 py-2 focus:outline-0 text-black rounded">
        </div>
        <div class="todolist-items w-full bg-white rounded-md">

          <div class="flex justify-between py-5 px-3 group border-b border-b-gray-400">
            <div class="flex items-center gap-5">
              <div class="w-6 h-6 p-3 rounded-full border border-solid flex items-center justify-center bg-gradient-to-r from-[#57ddff] to-[#c058f3]">
                <div class="flex flex-col justify-center items-center h-full  text-white rounded-full p-[10px] bg-white">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-4 w-4 font-extrabold absolute"   
                    viewBox="0 0 20 20" 
                    fill="currentColor">
                    <path 
                      fill-rule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 class="text-gray-700 text-xl">todolist item</h3>
            </div>
            <div class="hidden items-center gap-2 group-hover:flex">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-7 w-7 text-gray-500" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-7 w-7 text-gray-500" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path 
                  fill-rule="evenodd" 
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>

          <div class="flex justify-between py-5 px-3 group border-b border-b-gray-400">
            <div class="flex items-center gap-5">
              <div class="w-6 h-6 p-3 rounded-full border border-solid flex items-center justify-center bg-gradient-to-r from-[#57ddff] to-[#c058f3]">
                <div class="flex flex-col justify-center items-center h-full  text-white rounded-full p-[10px] bg-white">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-4 w-4 font-extrabold absolute"   
                    viewBox="0 0 20 20" 
                    fill="currentColor">
                    <path 
                      fill-rule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 class="text-gray-700 text-xl">todolist item</h3>
            </div>
            <div class="hidden items-center gap-2 group-hover:flex">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-7 w-7 text-gray-500" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-7 w-7 text-gray-500" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path 
                  fill-rule="evenodd" 
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>

          <div class="flex justify-between py-5 px-3 group border-b border-b-gray-400">
            <div class="flex items-center gap-5">
              <div class="w-6 h-6 p-3 rounded-full border border-solid flex items-center justify-center bg-gradient-to-r from-[#57ddff] to-[#c058f3]">
                <div class="flex flex-col justify-center items-center h-full  text-white rounded-full p-[10px] bg-white">
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    class="h-4 w-4 font-extrabold absolute"   
                    viewBox="0 0 20 20" 
                    fill="currentColor">
                    <path 
                      fill-rule="evenodd" 
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clip-rule="evenodd" />
                  </svg>
                </div>
              </div>
              <h3 class="text-gray-700 text-xl">todolist item</h3>
            </div>
            <div class="hidden items-center gap-2 group-hover:flex">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-7 w-7 text-gray-500" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
              </svg>
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                class="h-7 w-7 text-gray-500" 
                viewBox="0 0 20 20" 
                fill="currentColor">
                <path 
                  fill-rule="evenodd" 
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style>
@import './assets/base.css';

.header-pic{
  background-image: url('./assets/images/bg-desktop-dark.jpg');
}
</style>
