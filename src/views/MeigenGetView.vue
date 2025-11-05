<script setup>
import MeigenGet from '../components/MeigenGet.vue'
import AddFavorite from '../components/AddFavorite.vue'
</script>

<template>
  <v-progress-linear color="blue" indeterminate></v-progress-linear>
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
            <div class="maintext2">
              <h1>名言を見てみよう</h1>
            </div>
            <div class="subtext"><p>名言取得ボタンから名言を取得できます</p></div>

            <div class="meigenget">
              <MeigenGet />
            </div>
            <div class="addfavorite">
              <AddFavorite />
            </div>
          </v-card>
        </v-hover>
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
