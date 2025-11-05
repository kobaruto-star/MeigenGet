<script setup>
import { useMeigenStore } from '../stores/meigenStore'
import { useloadotStore } from '@/stores/loadotStore'
import LoadMessage from './LoadMessage.vue'
import { useDanmakuStore } from '@/stores/danmakuStore'
import { useRandomStore } from '@/stores/randomStore'
const meigenStore = useMeigenStore()
const loadotstore = useloadotStore()
const danmakuStore = useDanmakuStore()
const randomStore = useRandomStore()

const PositionXstart = (index) => {
  danmakuStore.PositionXstart(index)
}
const getMeigen = () => {
  meigenStore.getMeigenApi()
}
const getLoadingDot = () => {
  loadotstore.LoadingDot()
}
const randomSet = () => {
  randomStore.randomSet()
}
</script>

<template>
  <div class="meigenbtn">
    <v-btn
      class="btn"
      @click="
        (getMeigen(), getLoadingDot(), randomSet(), PositionXstart(danmakuStore.danmakuP.length))
      "
      >名言取得してみる</v-btn
    >
    <div class="loadmessage">
      <div v-if="meigenStore.meigenGetLoading"><LoadMessage /></div>
      <div v-if="meigenStore.meigenGetTureFalse">
        名言の取得に失敗しました、もう一度お試しください。
      </div>
    </div>
  </div>

  <div class="meigen-area">
    <div class="meigen">{{ meigenStore.meigenTmp.meigen }}</div>
    <div class="auther">{{ meigenStore.meigenTmp.auther }}</div>
  </div>
</template>

<style scoped>
.meigen-area {
  margin-top: 30px;
  text-align: center;
  font-family: serif;
}

.meigen {
  font-size: 24px;
  margin-top: 20px;
  transition: 1s;
}
.meigen:hover {
  font-weight: 700;
}
.auther {
  font-size: 20px;
  margin-top: 10px;
}
.meigenbtn {
  display: flex;
  align-items: center;
  gap: 50px;
  padding-bottom: 5px;
  border-bottom: 2px solid rgba(128, 128, 128, 0.5);
}
</style>
