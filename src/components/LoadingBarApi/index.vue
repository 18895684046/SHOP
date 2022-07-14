<template>
  <div></div>
</template>
 
<script lang="ts">
import { defineComponent } from "vue";
import { useLoadingBar  } from "naive-ui";

export default defineComponent({
  setup() {
    (window as any).$loadingBar = useLoadingBar();
  },
});
</script>