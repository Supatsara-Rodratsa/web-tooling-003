<template>
  <div
    class="bg-primary h-screen flex justify-center items-center overflow-hidden relative"
  >
    <div class="absolute top-[30%] flex flex-col gap-10 items-center">
      <h1 class="flex font-bold text-[40px] text-darkBrown">Scented Candles</h1>
      <Button
        :title="'View Products'"
        @click="navigateTo('/products')"
      ></Button>
    </div>

    <div class="object-fill">
      <img src="~assets/img/image.png" width="400" />
    </div>
  </div>
</template>
