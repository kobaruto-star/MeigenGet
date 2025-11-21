import { defineStore } from 'pinia'
import axios from 'axios'
import { useUserStore } from './userStore'

export const useCommentStore = defineStore('comment', {
  state: () => ({
    commentList: [],
    commentUrl:
      'https://m3h-kobayashi-containerapp3.bravepond-9d50e1e2.japaneast.azurecontainerapps.io/api/v1/comments',
    targetMeigenId: null,
  }),
  actions: {},
})
