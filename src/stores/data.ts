import { defineStore } from 'pinia'

export const todoListData = defineStore({
  id: 'main',
  state: () => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2
  },
  actions: {
    increment() {
      this.counter++
    }
  }
})
