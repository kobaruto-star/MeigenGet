<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { useMenuStore } from './stores/menuStore'
const menuStore = useMenuStore()

const headtext = ['ホーム', '名言取得', 'お気に入り', '名言クイズ']
</script>

<template>
  <header>
    <!-- ヘッダーメニューここから -->
    <div class="header-left">
      <p>MeigenGet!</p>
    </div>

    <v-item-group mandatory>
      <v-container>
        <v-row>
          <v-col v-for="(item, index) in menuStore.items" :key="item" cols="3" md="3">
            <v-item v-slot="{ isSelected, toggle }">
              <v-card
                :color="isSelected ? 'red' : 'grey'"
                class="d-flex align-center"
                height="30"
                dark
                @click="toggle"
                :to="item.path"
                router
                :value="index"
              >
                <v-scroll-y-transition>
                  <div class="text-p flex-grow-1 text-center headermenu">
                    {{ isSelected ? headtext[index] : headtext[index] }}
                  </div>
                </v-scroll-y-transition>
              </v-card>
            </v-item>
          </v-col>
        </v-row>
      </v-container>
    </v-item-group>

    <!-- ヘッダーメニューここまで -->
  </header>

  <main>
    <RouterView />
  </main>
</template>

<style>
header {
  border-bottom: 1px solid #ccc;
}

.header-left {
  opacity: 0.7;
  float: left;
  margin-left: 20px;
  margin-top: 20px;
  font-family: fantasy;
  font-size: 24px;
}

.headermenu {
  font-family: 'Noto Sans JP', 'Yu Gothic', 'Hiragino Kaku Gothic ProN', sans-serif;
  font-weight: 500;
}
</style>
