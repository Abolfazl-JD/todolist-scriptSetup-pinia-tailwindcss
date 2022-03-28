<script setup lang="ts">
</script>

<template>
  <header>
    <div class="header-pic w-screen bg-no-repeat bg-cover flex items-center justify-center md:h-80">
      <div class="flex w-1/3 justify-between text-white text-4xl">
        <h1 class="font-bold tracking-[15px]">TODOLIST</h1>
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          class="h-7 w-7 text-yellow-300" 
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
    </div>
  </header>
</template>

<style>
@import './assets/base.css';

.header-pic{
  background-image: url('./assets/images/bg-desktop-dark.jpg');
}
</style>
