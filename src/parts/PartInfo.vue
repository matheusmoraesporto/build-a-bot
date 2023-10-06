<template>
    <div>
        <h1>{{ part.title }}</h1>
        <div>
            {{ part.description }}
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import parts from '../data/parts';

const part = computed(() => {
  const route = useRoute();
  const { partType } = route.params;
  const partId = route.params.id;
  return parts[partType].find((p) => p.id === +partId);
});
</script>
