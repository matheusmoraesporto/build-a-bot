import { defineStore } from 'pinia';
import { ref } from 'vue';

const usePartStore = defineStore('parts', () => {
  const parts = ref(null);

  const getParts = async () => {
    const response = await fetch('/api/parts');
    parts.value = await response.json();
  };

  return { parts, getParts };
});

export default usePartStore;
