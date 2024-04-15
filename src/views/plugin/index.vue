<script setup lang="ts">
import Giscus from '@giscus/vue';
import { storeToRefs } from 'pinia';
import { useWindowStore } from '../../store/window';


const { isDark } = storeToRefs(useWindowStore());
</script>
<template>
  <div id="plugin-giscus">
    <Giscus
      id="plugin-comments"
      repo="read-cat/read-cat"
      repoId="R_kgDOLraubQ"
      mapping="number"
      term="2"
      strict="0"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      :theme="isDark ? 'dark_dimmed' : 'light'"
      lang="zh-CN"
      loading="lazy"
    />
    
  </div>
</template>

<style scoped lang="scss">
#plugin-giscus {
  display: flex;
  justify-content: center;
  margin: 50px 0;
}
#plugin-comments {
  width: 90%;
  max-width: 700px;
}
</style>