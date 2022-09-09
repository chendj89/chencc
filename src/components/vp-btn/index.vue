<script setup lang="ts">
import { ref } from "vue";
const props = withDefaults(defineProps<{ msg?: string }>(), {});
</script>
<template>
  <div class="vp-btn">
    <div>我是</div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped></style>
