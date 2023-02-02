<script setup>
defineProps({ title: String })
</script>
<template>
  <div
    class="flex justify-center items-center bg-transparent border-2 border-white px-5 py-3 w-fit cursor-pointer hover:bg-darkBrown hover:text-white transition-all"
  >
    {{ title }}
  </div>
</template>
