<script setup>
import { useloadotStore } from '../stores/loadotStore'

const loadotStore = useloadotStore()
</script>

<template>
  <div class="load">読み込み中です{{ loadotStore.dot }}</div>
</template>

<style></style>
