<script setup>
import { ref } from 'vue'
import { useQuizStore } from '../stores/quizStore'
import { useloadotStore } from '@/stores/loadotStore'
const loadotstore = useloadotStore()
const quizStore = useQuizStore()

const getLoadingDot = () => {
  loadotstore.LoadingDot()
}
const quizstart = () => {
  quizStore.quizstart()
}
const countSet = (value) => {
  quizStore.countSet(value)
}

let count = ref(0)
</script>
<template>
  <p class="subtext C">難易度を入力してください（選択肢の数）</p>

  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <v-number-input
          :reverse="false"
          controlVariant="split"
          label=""
          :hideInput="false"
          :inset="false"
          v-model="count"
        ></v-number-input>
        <div class="quizstart">
          <v-btn class="btn" @click="(countSet(count), quizstart(), getLoadingDot())"
            >スタート</v-btn
          >
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.quizstart {
  text-align: center;
}
.C {
  text-align: center;
  padding-bottom: 0;
}
</style>
