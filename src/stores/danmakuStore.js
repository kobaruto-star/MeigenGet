import { defineStore } from 'pinia'
import { useRandomStore } from './randomStore'

export const useDanmakuStore = defineStore('danmaku', {
  state: () => ({
    danmakuP: [],
    PositionX: 0,
    Positionfun: null,
  }),

  actions: {
    PositionXstart(index) {
      let count = index
      console.log(count)
      const randomStore = useRandomStore()
      const windowW = window.innerWidth
      console.log('danmakustart')
      console.log(windowW)
      this.danmakuP.push({ x: randomStore.random[count].x })
      this.Positionfun = setInterval(() => {
        this.danmakuP[count] = {
          ...this.danmakuP[count],
          x: this.danmakuP[count].x + 1,
        }
        if (this.danmakuP[count].x > windowW) {
          this.danmakuP[count] = {
            ...this.danmakuP[count],
            x: -windowW,
          }
        }
      }, 30)
    },
  },
})
