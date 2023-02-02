import { defineStore } from "pinia"
export const productStore = defineStore("product", () => {
  // state
  const selectedProducts = new Map<string, number>()
  const selectedProduct = reactive(selectedProducts)

  // action
  function addItem(name: string) {
    if (selectedProduct.get(name)) {
      selectedProduct.set(name, (selectedProduct.get(name) || 0) + 1)
    } else {
      selectedProduct.set(name, 1)
    }
  }

  function removeItem(name: string) {
    const count = (selectedProduct.get(name) || 0) - 1
    if (selectedProduct.get(name) && count > 0) {
      selectedProduct.set(name, (selectedProduct.get(name) || 0) - 1)
    } else {
      selectedProduct.delete(name)
    }
  }

  return { selectedProduct, addItem, removeItem }
})
