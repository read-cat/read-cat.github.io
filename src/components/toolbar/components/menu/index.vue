<script setup lang="ts">
import { ElDivider } from 'element-plus';
import { useRouter } from 'vue-router';
import { ref } from 'vue';

const router = useRouter();
const modelValue = defineModel<boolean>({
  required: true
});
const currentNavSelected = ref('');
router.afterEach((to, __, fail) => {
  if (fail) {
    return;
  }
  modelValue.value = false;
  currentNavSelected.value = String(to.name);
});
</script>
<script lang="ts">
export default {
  name: 'Menu'
}
</script>

<template>
  <Teleport to="body">
    <Transition name="el-fade-in">
      <div class="menu" v-show="modelValue">
        <ul>
          <li :class="[currentNavSelected === 'home' ? 'selected' : '']">
            <RouterLink to="/">首页</RouterLink>
          </li>
          <ElDivider />
          <li :class="[currentNavSelected === 'plugin' ? 'selected' : '']">
            <RouterLink to="/plugin">插件</RouterLink>
          </li>
          <ElDivider />
          <li :class="[currentNavSelected === 'download' ? 'selected' : '']">
            <RouterLink to="/download">下载</RouterLink>
          </li>
          <ElDivider />
          <li :class="[currentNavSelected === 'insiders' ? 'selected' : '']">
            <RouterLink to="/insiders">内测</RouterLink>
          </li>
        </ul>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.menu {
  position: absolute;
  top: 50px;
  left: 0;
  display: flex;
  justify-content: center;
  width: 100%;
  height: calc(100vh - 50px);
  background-color: var(--rc-window-box-blur-bgcolor);
  backdrop-filter: blur(30px);
  z-index: 999;
  ul {
    margin-top: 10px;
    li {
      padding: 5px 10px;
      width: 280px;
      color: var(--rc-text-color);

      a {
        display: inline-block;
        width: 100%;
        color: currentColor;
      }

      &:hover {
        color: var(--rc-theme-color);
      }
    }
    li.selected {
      color: var(--rc-theme-color);
    }

    :deep(.el-divider) {
      margin: 5px 0;
    }
  }
}

@media screen and (max-width: 300px) {
  .menu ul li {
    width: 200px;
  }
}
</style>