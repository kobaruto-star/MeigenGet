<script setup>
import { useFavoriteStore } from '../stores/favoriteStore'
const favoriteStore = useFavoriteStore()
</script>

<template>
  <div>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="12">
          <li v-for="fav in favoriteStore.favoriteList" :key="fav.id">
            <div class="favmeigen">
              <h2>{{ fav.meigen }}</h2>
            </div>
            <div class="favauther">
              <v-row justify="end">
                <h3>{{ fav.auther }}</h3>
              </v-row>
            </div>
          </li>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style>
li {
  list-style: none;
}
.favauther {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 2px solid grey;
}
.favmeigen {
  text-align: center;
}
</style>
