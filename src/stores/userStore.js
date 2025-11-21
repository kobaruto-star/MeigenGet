import { defineStore } from 'pinia'
import axios from 'axios'

// サーバーに依存しないユニークなID生成（新規登録用、DBがIDENTITYを持たない場合）
let currentId = 1001

export const useUserStore = defineStore('user', {
  state: () => ({
    userInfo: null,
    isLoggedIn: false,
    // エラー状態をStore側で管理
    loginError: null,
    registerError: null,
    isLoading: false,
    loginInfo: false,
    loginUsername: '',

    // ★重要: Azure Container AppsのベースURLを設定★
    baseUrl:
      'https://m3h-kobayashi-containerapp3.bravepond-9d50e1e2.japaneast.azurecontainerapps.io/api/v1/users',
  }),

  actions: {
    // ----------------------------------------------------
    // 1. 認証処理 (ログイン)
    // ----------------------------------------------------
    async loginUser(username, password) {
      console.log({ username, password })
      this.isLoading = true
      this.loginError = null // エラーをリセット

      const loginUrl = `${this.baseUrl}/login`

      try {
        const credentials = {
          username: username,
          password: password,
        }

        // POSTリクエストを送信
        let response = await axios.post(loginUrl, credentials)

        // 認証成功
        this.userInfo = response.data
        this.isLoggedIn = true
        this.loginInfo = true
        this.loginUsername = username
        console.log(this.loginUsername + 'さんがログインしました。')

        // 成功した場合はコンポーネント側に true を返す
        return true
      } catch (error) {
        // HTTP 401 Unauthorized またはその他のエラー
        console.log('ログインエラー:', error)
        this.isLoggedIn = false
        this.userInfo = null

        // エラーメッセージをStateに格納
        this.loginError =
          error.response?.data?.message || 'ログインに失敗しました。認証情報を確認してください。'

        // コンポーネント側でキャッチできるようエラーを再スロー
        throw error
      } finally {
        this.isLoading = false
      }
    },

    // ----------------------------------------------------
    // 2. 新規登録処理
    // ----------------------------------------------------
    async registerUser(username, password, newUserId) {
      console.log({ username, password, newUserId })
      this.isLoading = true
      this.registerError = null // エラーをリセット
      const registerUrl = this.baseUrl // /api/v1/users (POST)

      // DBに重複しないようにIDを生成 (IDが引数で渡される場合はその値を使用)
      const userIdToUse = newUserId || ++currentId

      try {
        const credentials = {
          user_id: userIdToUse,
          username: username,
          password: password,
        }

        // 新規登録POSTリクエストを送信
        let response = await axios.post(registerUrl, credentials)

        // 成功メッセージ（Spring Boot側から返されたもの）を返す
        console.log('Registration response:', response.data)
        return response.data // "ユーザーが正常に保存されました。"
      } catch (error) {
        // 主キー重複などのDBエラーや500エラー
        this.registerError =
          error.response?.data?.message ||
          '新規登録に失敗しました。ユーザーIDが重複している可能性があります。'

        // 失敗した場合は、後続処理のためにエラーを再スロー
        throw error
      } finally {
        this.isLoading = false
      }
    },

    // ----------------------------------------------------
    // 3. その他のユーティリティ
    // ----------------------------------------------------
    logoutUser() {
      this.isLoggedIn = false
      this.userInfo = null
      this.loginError = null
    },
  },
})
