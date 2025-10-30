import { defineStore } from 'pinia'
import axios from 'axios'
import { ref } from 'vue'

export const useQuizStore = defineStore('quiz', {
  state: () => ({
    quizList: [],
    quizTmp: {},
    quizloading: false,
    count: 0,
    miscount: 0,
    quizTF: ref(),
    quizshuffle: [],
  }),
  actions: {
    countSet(count) {
      this.count = count
      console.log(count)
    },
    async quizstart() {
      console.log('取得開始')
      this.quizTF = ref()
      this.quizloading = true
      this.quizList = []
      this.quizshuffle = []

      for (let i = 1; i <= this.count; i++) {
        if (this.miscount > 20) {
          break
        }
        try {
          let response = await axios.get(
            `https://api.allorigins.win/raw?url=${encodeURIComponent('https://meigen.doodlenote.net/api/json.php')}&t=${Date.now()}`,
          )
          this.quizList.push(response.data[0])
          console.log('取得中')
          if (this.quizList.length >= this.count) {
            break
          }
        } catch {
          i = i - 1
          console.log('失敗')
          this.miscount += 1
        }
      }
      this.quizshuffle = [...this.quizList]
      for (let i = this.quizshuffle.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1))
        ;[this.quizshuffle[i], this.quizshuffle[j]] = [this.quizshuffle[j], this.quizshuffle[i]]
      }
      this.quizloading = false
      this.miscount = 0
    },
    judge(auther) {
      if (auther === this.quizList[0].auther) {
        this.quizTF = true
      } else {
        this.quizTF = false
      }
    },
  },
})
