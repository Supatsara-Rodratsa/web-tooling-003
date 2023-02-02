<script lang="ts" setup>
import { storeToRefs } from "pinia"
import { Candle } from "~~/library/interface"

defineProps<{ product: Candle }>()
const useProductStore = productStore()
const { selectedProduct } = storeToRefs(useProductStore)
const { removeItem, addItem } = useProductStore
</script>
<template>
  <div>
    <div class="w-[300px] h-[370px] overflow-hidden object-fill">
      <img :src="product.image" width="300" height="370" />
    </div>
    <h2 class="uppercase text-[20px] font-bold py-3 w-full text-center">
      {{ product.name }}
    </h2>
    <div class="flex justify-between text-[18px] w-full px-2">
      <p>Price</p>
      -----------------
      <p>{{ product.price }}&#8364;</p>
    </div>
    <div class="flex justify-center items-center gap-2 pt-8">
      <div
        class="flex justify-center items-center p-1 border rounded-full w-[28px] text-[18px] h-[28px] cursor-pointer"
        @click="removeItem(product.name)"
      >
        -
      </div>
      <p class="px-2 text-[18px]">
        {{ selectedProduct.get(product.name) || 0 }}
      </p>
      <div
        class="flex justify-center items-center p-1 rounded-full w-[28px] h-[28px] text-[18px] cursor-pointer bg-darkBrown text-white font-bold"
        @click="addItem(product.name)"
      >
        +
      </div>
    </div>
  </div>
</template>
