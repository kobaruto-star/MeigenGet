import { defineStore } from 'pinia'

export const useRandomStore = defineStore('random', {
  state: () => ({
    random: [],
    randomtmp: [],
  }),

  actions: {
    randomSet() {
      const w = Math.random() * window.innerWidth
      const h = Math.random() * 350
      this.random.push({ x: w, y: h })
    },
    reset() {
      this.random = []
    },
  },
})
