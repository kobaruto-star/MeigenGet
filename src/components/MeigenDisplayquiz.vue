<script setup>
import { useQuizStore } from '@/stores/quizStore'
import LoadMessage from './LoadMessage.vue'
import MeigenQuizStart from './MeigenQuizStart.vue'
const quizStore = useQuizStore()
</script>

<template>
  <div v-if="quizStore.quizList.length > 0">
    <div v-if="quizStore.quizloading" class="quizload">
      <LoadMessage />
    </div>

    <div v-if="!quizStore.quizloading">
      <MeigenQuizStart />
    </div>
  </div>

  <div v-if="quizStore.quizTF" class="c">正解</div>
  <div v-if="quizStore.quizTF === false" class="f">不正解</div>
</template>

<style>
.quizload {
  text-align: center;
}
.c {
  text-align: center;
  color: lightgreen;
  font-weight: 600;
  font-size: 25px;
}
.f {
  text-align: center;
  color: red;
  font-weight: 600;
  font-size: 25px;
}
</style>
