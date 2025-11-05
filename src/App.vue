<script setup>
import { RouterView } from 'vue-router'
import { useMenuStore } from './stores/menuStore'
import { useImgStore } from './stores/imgStore'
import { onMounted } from 'vue'

const menuStore = useMenuStore()
const imgStore = useImgStore()

const headtext = ['ホーム', '名言取得', 'お気に入り', '名言クイズ']
const color = ['red', 'blue', 'yellow', 'green']
let imgcount

//DOMをよんだときにgetimgを動かし、5sおきに動かす。
onMounted(() => {
  imgStore.getimage()
  imgcount = setInterval(() => {
    imgStore.getimage()
  }, 5000)
})
</script>

<template>
  <header>
    <!--ロゴ -->

    <div class="header-left">
      <p>MeigenGet!</p>
    </div>

    <!--上部メニュー -->
    <div class="menu">
      <v-item-group mandatory>
        <v-container>
          <v-row>
            <!-- 画面が大きくても小さくても要素を3/12で表示-->
            <v-col
              v-for="(item, index) in menuStore.items"
              :key="item"
              cols="3"
              md="3"
              class="menuA"
            >
              <v-item v-slot="{ isSelected, toggle }" class="menuA">
                <v-card
                  :color="isSelected ? color[index] : 'black'"
                  class="d-flex align-center menuA"
                  height="30"
                  dark
                  @click="toggle"
                  :to="item.path"
                  router
                  :value="index"
                >
                  <v-scroll-y-transition>
                    <div class="text-p flex-grow-1 text-center headermenu">
                      {{ isSelected ? headtext[index] : headtext[index]
                      }}<!-- 押したとき押してないときの表示名-->
                    </div>
                  </v-scroll-y-transition>
                </v-card>
              </v-item>
            </v-col>
          </v-row>
        </v-container>
      </v-item-group>
    </div>
  </header>

  <main>
    <div v-if="!imgStore.a">
      <div class="mainimg" :style="{ backgroundImage: `url(${imgStore.imageList[0]})` }"></div>
    </div>
    <div v-if="imgStore.a">
      <div class="mainimg" :style="{ backgroundImage: `url(${imgStore.imageList[1]})` }"></div>
    </div>
    <div class="mainback">
      <!--routerview読み込み -->
      <RouterView />
    </div>
  </main>
</template>

<style>
header {
  background-color: black;
  opacity: 0.9;
  height: 60px;
  align-items: center;
}

.header-left {
  float: left;
  margin-left: 20px;
  margin-top: 13px;
  font-family: fantasy;
  font-size: 24px;
  color: grey;
}

.menu {
  opacity: 1;
}

.headermenu {
  font-family: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', sans-serif;
  font-weight: 500;
}
.mainimg {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  z-index: -2;
  opacity: 1;
  pointer-events: none;
}

.main-content {
  position: relative;
  z-index: 1;
}
</style>
