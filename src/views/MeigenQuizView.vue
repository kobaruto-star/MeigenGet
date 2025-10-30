<script setup>
import MeigenQuizView from '@/components/MeigenQuiz.vue'
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <div class="maintext">
          <h1>名言クイズ</h1>
        </div>
        <div class="subtext"><p>名言がランダムに表示されるので著者を覚えてね</p></div>
      </v-col>
    </v-row>

    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="6">
          <MeigenQuizView />
        </v-col>
      </v-row>
    </v-container>
  </v-container>
</template>
