<template>
  <div
    class="slidev-layout default grid justify-center content-center bg-cover bg-center background-image"
    :style="style"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  background: { type: String },
});

const style = computed(
  () =>
    `color: white; background-image: linear-gradient(#0006, #000b),url('${
      import.meta.env.BASE_URL
    }${props.background}');`
);
</script>

<style scoped>
.background-image {
  color: white;
}

.background-image :deep(h1) {
  color: white;
  font-size: 4rem;
}

:deep(h2) {
  margin-top: 0;
  font-size: 1.8rem;
}
</style>
