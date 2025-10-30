<script setup>
import { useMeigenStore } from '../stores/meigenStore'
import { useDanmakuStore } from '../stores/danmakuStore'
import { useRandomStore } from '@/stores/randomStore'
import { onMounted, onBeforeUnmount } from 'vue'

const randomStore = useRandomStore()
const danmakuStore = useDanmakuStore()
const meigenStore = useMeigenStore()

onMounted(() => {
  randomStore.reset()
  danmakuStore.danmakuP = []

  meigenStore.meigenList.forEach((_, i) => {
    randomStore.randomSet()
    danmakuStore.PositionXstart(i)
  })
})

onBeforeUnmount(() => {
  clearInterval(danmakuStore.PositionFun)
})
</script>

<template>
  <div class="danmakuerea">
    <p
      v-for="(list, index) in meigenStore.meigenList"
      :key="index"
      :style="{
        position: 'absolute',
        left: (randomStore.random[index]?.x ?? 0) + (danmakuStore.danmakuP[index]?.x ?? 0) + 'px',
        top: (randomStore.random[index]?.y ?? 0) + 'px',
        whiteSpace: 'nowrap',
      }"
    >
      {{ list.meigen }}
    </p>
  </div>
</template>

<style>
.danmakuerea {
  position: relative;
  width: 100%;
  height: 350px;
  border: 1px solid #000;
  overflow: hidden;
}
</style>
