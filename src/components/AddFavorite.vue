<script setup>
import { useMeigenStore } from '../stores/meigenStore'
import { useFavoriteStore } from '../stores/favoriteStore'

const meigenStore = useMeigenStore()
const favoriteStore = useFavoriteStore()
const addFavorite = () => {
  favoriteStore.addFavorite(meigenStore.meigenTmp)
}
</script>

<template>
  <div class="favorite">
    <v-btn class="btn" @click="addFavorite()">お気に入りに追加</v-btn>
  </div>
</template>

<style>
.favorite {
  border-top: 2px solid rgba(128, 128, 128, 0.5);
  padding-top: 5px;
}
</style>
