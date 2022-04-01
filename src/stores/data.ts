import { defineStore } from 'pinia'

export const todoListData = defineStore({
  id: 'main',
  state: () => ({
    database : null as null | EventTarget
  }),
  getters: {},
  actions: {
    async getDatabase() {
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
      })
    }
  }
})
