import { defineStore } from 'pinia'

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favoriteList: [],
  }),

  getters: {},

  actions: {
    addFavorite(meigenItem) {
      if (meigenItem.meigen === this.favoriteList[this.favoriteList.length - 1]?.meigen) {
        return
      }
      this.favoriteList.push(meigenItem)
      console.log(this.favoriteList[this.favoriteList.length - 1])
    },
  },
})
