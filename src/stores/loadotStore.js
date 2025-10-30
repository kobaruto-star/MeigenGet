import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useloadotStore = defineStore('loadot', {
  state: () => ({
    dot: ref(''),
    dotcount: ref(0),
    LoadingDotx: ref(null),
  }),
  actions: {
    LoadingDot() {
      if (this.LoadingDotx) {
        return
      }

      this.LoadingDotx = setInterval(() => {
        this.dotcount++
        if (this.dotcount % 4 === 0) {
          this.dotcount = 0
        }
        this.dot = '.'.repeat(this.dotcount)
      }, 500)
    },
  },
})
