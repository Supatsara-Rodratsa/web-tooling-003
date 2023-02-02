<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { candleProducts } from "~~/mocks/products"

const products = candleProducts
const useProductStore = productStore()
const { selectedProduct } = storeToRefs(useProductStore)

const countItems = ref(0)

watch(selectedProduct.value, (newItem) => {
  countItems.value = 0
  newItem.forEach((value: number) => {
    countItems.value += value
  })
})
</script>
<template>
  <div class="bg-primary overflow-scroll flex flex-col justify-center relative">
    <h1 class="text-[40px] py-14 w-full text-center font-medium">
      Candle Products
    </h1>
    <div class="flex flex-wrap gap-5 justify-center">
      <div
        v-for="(product, index) in products"
        :key="index"
        class="flex flex-col justify-center items-center relative mb-10"
      >
        <Product :product="product"></Product>
      </div>
    </div>
    <div v-show="countItems > 0" class="fixed bottom-10 right-10">
      <Fab :count="countItems"></Fab>
    </div>
  </div>
</template>
