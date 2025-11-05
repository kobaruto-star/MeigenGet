<script setup>
import MeigenFavorite from '@/components/MeigenFavorite.vue'
</script>

<template>
  <v-progress-linear color="yellow" indeterminate></v-progress-linear>
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
            <div class="maintext3">
              <h1>お気に入りの名言</h1>
            </div>
            <div class="subtext"><p>お気に入り登録した名言がみれます</p></div>
            <MeigenFavorite />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>
