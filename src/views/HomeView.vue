<script setup>
import MeigenDanmaku from '@/components/MeigenDanmaku.vue'
</script>

<template>
  <v-progress-linear color="red" indeterminate></v-progress-linear>
  <v-container>
    <v-row justify="center"
      ><!-- 横方向で中央寄せ-->
      <v-col cols="12" md="12"
        ><!--小さい画面だと12/12、大きいと6/12-->
        <!--上記表示で画面を12等分したうちの中央の6を使うという風になる-->
        <v-hover v-slot="{ isHovering, props }" open-delay="200">
          <v-card
            class="pa-4 card"
            color="secondary"
            v-bind="props"
            :class="{ 'on-hover': isHovering }"
            :elevation="isHovering ? 16 : 1"
          >
            <div class="maintext1">
              <h1>ホーム</h1>
            </div>
            <div class="subtext"><p>今まで見てきた名言が下に流れます</p></div>

            <MeigenDanmaku />
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.card {
  opacity: 0.9;
  height: 80vh;
}

h1 {
  font-weight: 700;
  font-family: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', sans-serif;
  transition: 0.3s;
  opacity: 1;
  color: white;
  text-shadow:
    0 0 1px #fff,
    0 0 2px #fff,
    0 0 10px #fff;
}

h1:hover {
  opacity: 1;
}

.maintext1 {
  padding-bottom: 5px;
  border-bottom: 5px solid transparent;
  background: linear-gradient(to right, red 10%, gray 50%);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: bottom;
}
.maintext2 {
  padding-bottom: 5px;
  border-bottom: 5px solid transparent;
  background: linear-gradient(to right, blue 10%, gray 50%);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: bottom;
}
.maintext3 {
  padding-bottom: 5px;
  border-bottom: 5px solid transparent;
  background: linear-gradient(to right, yellow 10%, gray 50%);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: bottom;
}
.maintext4 {
  padding-bottom: 5px;
  border-bottom: 5px solid transparent;
  background: linear-gradient(to right, green 10%, gray 50%);
  background-size: 100% 2px;
  background-repeat: no-repeat;
  background-position: bottom;
}

p {
  font-weight: 500;
  transition: 1s;
  opacity: 0.8;
}
.subtext {
  padding-bottom: 50px;
}
</style>
