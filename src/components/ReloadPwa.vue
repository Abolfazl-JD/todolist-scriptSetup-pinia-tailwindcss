<script setup lang="ts">
import { useRegisterSW } from "virtual:pwa-register/vue"

const { offlineReady, needRefresh, updateServiceWorker } = useRegisterSW()
const close = async () => {
    offlineReady.value = false;
    needRefresh.value = false;
}

const updateSW = async () => {
    await updateServiceWorker()
}
</script>

<template>
    <div
    v-if="offlineReady || needRefresh"
    class="
      flex flex-wrap
      md:flex-nowrap
      bg-pink-900
      text-white text-sm
      px-6
      pt-2
      pb-3
      justify-between
      items-center
      align-middle
    "
    role="alert"
  >
    <div class="message mt-1">
      <span v-if="offlineReady"> App ready to work offline </span>
      <span v-else>
        New content available, click on reload button to update.
      </span>
    </div>
    <div class="buttons flex align-middle mt-2 md:mt-0">
      <button
        v-if="needRefresh"
        @click="updateSW()"
        class="
          w-full
          px-4
          py-2
          text-sm text-white
          leading-none
          transition-colors
          duration-150
          bg-pink-900
          border border-white
          rounded
          sm:w-auto
          active:bg-pink-600
          hover:bg-pink-700
          focus:outline-none focus:shadow-outline-purple
          mr-4
        "
      >
        Reload
      </button>
      <button
        @click="close"
        class="
          w-full
          px-4
          py-2
          text-sm text-white
          leading-none
          transition-colors
          duration-150
          bg-pink-900
          border border-white
          rounded
          sm:w-auto
          active:bg-pink-600
          hover:bg-pink-700
          focus:outline-none focus:shadow-outline-purple
        "
      >
        Close
      </button>
    </div>
  </div>
</template>