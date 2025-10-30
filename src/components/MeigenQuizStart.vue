<script setup>
import { useQuizStore } from '@/stores/quizStore'
const quizStore = useQuizStore()
</script>

<template>
  <h3 style="text-align: center; padding-bottom: 10px; padding-top: 20px; font-size: large">
    Q.この名言の著者はだれ
  </h3>

  <h1 style="padding-bottom: 20px; text-align: center">{{ quizStore.quizList[0].meigen }}</h1>
  <div style="display: flex; flex-wrap: wrap">
    <div
      v-for="(quiz, index) in quizStore.quizshuffle"
      :key="index"
      style="width: 50%; padding: 4px"
    >
      <v-btn @click="quizStore.judge(quiz.auther)" style="width: 100%">{{ quiz.auther }}</v-btn>
    </div>
  </div>
</template>

<style>
h3 {
  opacity: 0.8;
}
</style>
