import { ref } from 'vue';
import { defineStore } from 'pinia';

const useCartStore = defineStore('cart', () => {
  const cart = ref([]);
  return { cart };
});

export default useCartStore;
