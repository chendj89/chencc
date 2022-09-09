<script setup lang="ts">
import { ref } from "vue";
const props = withDefaults(defineProps<{ msg?: string }>(), {});
let msg = ref(props.msg);
const updateMsg: IVpTool["updateMsg"] = (_msg: string) => {
  msg.value = _msg;
};
defineExpose({
  updateMsg,
  props,
});
</script>
<template>
  <div class="vp-tool">hello {{ msg }}</div>
</template>

<style lang="scss" scoped>
.vp {
  &-tool {
    --color: #ff5c00;
    color: var(--color);
  }
}
</style>
