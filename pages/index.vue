<script lang="ts" setup>
type Item = { id: string }
const items: Item[] = [
  { id: "1" },
  { id: "2" },
  { id: "3" },
  { id: "4" },
  { id: "5" },
]
</script>
<template>
  <div class="bg-primary h-screen">
    <div v-for="item in items" :key="item.id">
      <!-- content -->
      {{ item }}
    </div>
  </div>
</template>
