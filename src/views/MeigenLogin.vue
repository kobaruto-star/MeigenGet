<script setup>
import { ref } from 'vue' // データ定義に必要な ref をインポート
import { useUserStore } from '@/stores/userStore'

// 【必須】Storeのインスタンス化 (userStoreがtemplateで自動利用可能になる)
const userStore = useUserStore()

// 【必須】入力フォームのリアクティブデータの定義 (loginUsernameなどがtemplateで自動利用可能になる)
const loginUsername = ref('')
const loginPassword = ref('')
// ... 他の ref 変数もすべてここに定義 ...

// (以降、templateで使用している loginUsername, loginPassword, registerUsername, registerPassword, newUserId をすべてここに ref で定義してください)
</script>

<template>
  <v-progress-linear color="grey" indeterminate></v-progress-linear>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="12">
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
            class="pa-4 card"
            color="secondary"
            v-bind="props"
            :class="{ 'on-hover': isHovering }"
            :elevation="isHovering ? 16 : 1"
          >
            <div class="maintext5"><h1>ログイン</h1></div>
            <div class="subtext"><p>ユーザー名とパスワードを入力してログインしましょう。</p></div>

            <v-responsive class="mx-auto" max-width="344">
              <v-text-field
                hide-details="auto"
                label="User Name"
                v-model="loginUsername"
              ></v-text-field>
            </v-responsive>
            <v-responsive class="mx-auto" max-width="344">
              <v-text-field
                hide-details="auto"
                label="Password"
                v-model="loginPassword"
                type="password"
              ></v-text-field>
            </v-responsive>

            <div class="center">
              <v-btn
                class="btn"
                color="secondary"
                @click="userStore.loginUser(loginUsername, loginPassword)"
                >ログイン</v-btn
              >
              <div v-if="userStore.isLoggedIn">
                <p>現在のログイン：{{ userStore.loginUsername }}さん</p>
              </div>
              <div v-if="!userStore.isLoggedIn">
                <p>ログインしていません。</p>
              </div>
            </div>

            <v-divider class="my-4"></v-divider>

            <div class="maintext5"><h1>新規登録</h1></div>
            <p class="newlogintext">登録してない方はこちら</p>

            <v-responsive class="mx-auto" max-width="344">
              <v-text-field
                hide-details="auto"
                label="User Name"
                v-model="registerUsername"
              ></v-text-field>
            </v-responsive>

            <v-responsive class="mx-auto" max-width="344">
              <v-text-field
                hide-details="auto"
                label="Password"
                v-model="registerPassword"
                type="password"
              ></v-text-field>
            </v-responsive>

            <div class="center">
              <v-btn
                class="btn"
                color="secondary"
                @click="userStore.registerUser(registerUsername, registerPassword, newUserId++)"
                >新規登録</v-btn
              >
            </div>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
