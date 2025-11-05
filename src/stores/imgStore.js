import { defineStore } from 'pinia'

export const useImgStore = defineStore('ImageS', {
  state: () => ({
    imageList: [],
    a: true,
  }),
  actions: {
    async getimage() {
      const imageUrl = `https://picsum.photos/800/600?random=${Date.now()}`

      const img = new Image()
      img.src = imageUrl

      img.onload = () => {
        const index = this.a ? 0 : 1
        this.imageList[index] = imageUrl
        this.a = !this.a
      }
    },
  },
})
