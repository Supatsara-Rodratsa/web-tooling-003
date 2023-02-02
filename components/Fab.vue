<script setup>
defineProps({ count: Number })
</script>
<template>
  <div class="relative">
    <div
      class="rounded-full w-16 h-16 bg-brown flex justify-center items-center drop-shadow-md"
    >
      <img src="~assets/img/cart.png" width="30" height="30" />
    </div>
    <div
      v-show="count > 0"
      class="absolute rounded-full w-6 h-6 bg-darkBrown flex items-center justify-center text-white -top-1 right-0"
    >
      <span class="pb-[6px]">{{ count }}</span>
    </div>
  </div>
</template>
