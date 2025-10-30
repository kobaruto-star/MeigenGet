<script setup>
import MeigenGet from '../components/MeigenGet.vue'
import AddFavorite from '../components/AddFavorite.vue'
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <div class="maintext">
          <h1>名言を見てみよう</h1>
        </div>
        <div class="subtext"><p>名言取得ボタンから名言を取得できます</p></div>
      </v-col>
    </v-row>

    <v-row justify="center">
      <v-col cols="12" md="6">
        <div class="meigenget">
          <MeigenGet />
        </div>
        <div class="addfavorite">
          <AddFavorite />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>
.meigenget {
  height: 300px;
}

.addfavorite {
  justify-content: flex-end;
}
</style>
