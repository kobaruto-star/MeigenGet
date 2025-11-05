<script setup>
import MeigenQuizView from '@/components/MeigenQuiz.vue'
</script>

<template>
  <v-progress-linear color="green" indeterminate></v-progress-linear>
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
            <div class="maintext4">
              <h1>名言クイズ</h1>
            </div>
            <div class="subtext"><p>名言がランダムに表示されるので著者を覚えてね</p></div>

            <MeigenQuizView />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
