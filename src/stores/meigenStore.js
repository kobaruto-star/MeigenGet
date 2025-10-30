import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'
export const useMeigenStore = defineStore('Meigen', {
  state: () => ({
    meigenTmp: [],
    meigenList: [],
    meigenGetTureFalse: ref(false),
    meigenGetLoading: ref(false),
  }),

  getters: {},

  actions: {
    async getMeigenApi() {
      try {
        this.meigenTmp = []
        this.meigenGetLoading = true
        this.meigenGetTureFalse = false
        let response = await axios.get(
          `https://api.allorigins.win/raw?url=${encodeURIComponent('https://meigen.doodlenote.net/api/json.php')}&t=${Date.now()}`,
        )
        console.log('名言の取得に成功しました。')
        this.meigenTmp = response.data[0]
        console.log(this.meigenTmp.meigen)
        console.log(this.meigenTmp.auther)
        this.meigenList.push(this.meigenTmp)
        this.meigenGetLoading = false
        this.meigenGetTureFalse = false
      } catch {
        console.error('名言の取得に失敗しました。')
        this.meigenGetLoading = false
        this.meigenGetTureFalse = true
      }
    },
  },
})
