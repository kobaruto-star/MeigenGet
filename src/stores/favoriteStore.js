import axios from 'axios'
import { defineStore } from 'pinia'
import { useUserStore } from './userStore'

export const useFavoriteStore = defineStore('favorite', {
  state: () => ({
    favoriteList: [],
    userurl:
      'https://m3h-kobayashi-containerapp3.bravepond-9d50e1e2.japaneast.azurecontainerapps.io/api/v1/users',
    meigenurl:
      'https://m3h-kobayashi-containerapp3.bravepond-9d50e1e2.japaneast.azurecontainerapps.io/api/v1/meigen',
    targetUserId: null,
  }),

  getters: {},

  actions: {
    async refavorite() {
      const userStore = useUserStore()
      const getid = await axios.get(this.userurl)
      const finduser = getid.data.find((user) => user.username === userStore.loginUsername) //ここが違う

      this.targetUserId = finduser.user_id
      const getfvmeigen = await axios.get(this.meigenurl)
      console.log(getfvmeigen.data)
      const filtermeingen = getfvmeigen.data.filter(
        (meigen) => meigen.user_id === this.targetUserId,
      )
      console.log('既存のお気に入りを取得しました:', filtermeingen)
      this.favoriteList = filtermeingen
    },

    async addFavorite(meigenItem) {
      if (meigenItem.meigen === this.favoriteList[this.favoriteList.length - 1]?.meigen) {
        return
      }
      const getfvmeigen = await axios.get(this.meigenurl)
      console.log(getfvmeigen.data)
      const filtermeingen = getfvmeigen.data.filter(
        (meigen) => meigen.user_id === this.targetUserId,
      )
      console.log('既存のお気に入りを取得しました:', filtermeingen)

      this.favoriteList = filtermeingen
      console.log(this.favoriteList[this.favoriteList.length - 1])
      console.log('-------------------------------')
      console.log(this.favoriteList)
    },

    async addFavoriteDB(meigenItem) {
      const userStore = useUserStore()
      const getid = await axios.get(this.userurl)
      const finduser = getid.data.find((user) => user.username === userStore.loginUsername) //ここが違う
      if (!finduser) {
        console.log('ユーザーが見つかりません:', meigenItem.user_name)
        return
      }
      this.targetUserId = finduser.user_id
      console.log(finduser)
      console.log('ユーザーIDを取得しました:' + this.targetUserId)
      const meingenfv = {
        user_id: this.targetUserId,
        meigen: meigenItem.meigen,
        auther_name: meigenItem.auther,
        position: 1, // 仮の位置情報
      }
      await axios.post(this.meigenurl, meingenfv) //url違う
      console.log('DBにお気に入りを保存しました:', meigenItem)
    },
  },
})
