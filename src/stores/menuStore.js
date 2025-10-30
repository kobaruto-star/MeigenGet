import { defineStore } from 'pinia'

export const useMenuStore = defineStore('menu', {
  state: () => ({
    items: [
      { title: 'ホーム', path: '/' },
      { title: '名言取得', path: '/meigenget' },
      { title: 'お気に入り', path: '/favorites' },
      { title: '名言クイズ', path: '/meigenquiz' },
    ],
  }),
})
