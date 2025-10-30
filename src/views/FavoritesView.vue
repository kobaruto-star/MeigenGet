<script setup>
import MeigenFavorite from '@/components/MeigenFavorite.vue'
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <div class="maintext">
          <h1>お気に入りの名言</h1>
        </div>
        <div class="subtext"><p>お気に入り登録した名言がみれます</p></div>
      </v-col>
    </v-row>
  </v-container>
  <MeigenFavorite />
</template>
