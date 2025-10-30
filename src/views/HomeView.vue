<script setup>
import MeigenDanmaku from '@/components/MeigenDanmaku.vue'
</script>

<template>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <div class="maintext">
          <h1>ホーム</h1>
        </div>
        <div class="subtext"><p>今まで見てきた名言が下に流れます</p></div>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row justify="center">
      <v-col cols="12" md="6">
        <MeigenDanmaku />
      </v-col>
    </v-row>
  </v-container>
</template>

<style scope>
h1 {
  font-weight: 700;
  font-family: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', sans-serif;
  transition: 0.3s;
  opacity: 0.8;
}

h1:hover {
  opacity: 1;
}

.maintext {
  padding-bottom: 5px;
  border-bottom: 5px solid transparent;
  background: linear-gradient(to right, red 10%, gray 50%);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: bottom;
}
p {
  font-weight: 500;
  transition: 1s;
  opacity: 0.8;
}

p:hover {
  color: red;
}
</style>
