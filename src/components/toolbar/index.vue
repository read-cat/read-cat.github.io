<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useWindowStore } from '../../store/window';
import IconSun from '../../assets/icon/icon-sun.svg';
import IconMoon from '../../assets/icon/icon-moon.svg';
import IconGithub from '../../assets/icon/icon-github.svg';
import IconMoreMenu from '../../assets/icon/icon-more-menu.svg';
import IconClose from '../../assets/icon/icon-close.svg';
import { ElIcon } from 'element-plus';
import { useToggle } from '@vueuse/core';
import Menu from './components/menu/index.vue';


const router = useRouter();
const currentNavSelected = ref('');
router.afterEach((to, _, fail) => {
  if (fail) {
    return;
  }
  currentNavSelected.value = String(to.name);
});

const { isDark } = storeToRefs(useWindowStore());
const toggle = () => {
  const _toggle = useToggle(isDark);
  if (document.startViewTransition !== void 0) {
    document.startViewTransition(() => {
      _toggle();
    }).ready.then(() => {
      document.documentElement.animate(null, {
        duration: 300,
        easing: 'ease'
      });
    });
  } else {
    _toggle();
  }
}

const showMenu = ref(false);
</script>
<script lang="ts">
export default {
  name: 'Toolbar'
}
</script>
<template>
  <div class="toolbar">
    <nav v-memo="[currentNavSelected]">
      <ul>
        <li :class="[currentNavSelected === 'home' ? 'selected' : '']">
          <RouterLink to="/">首页</RouterLink>
        </li>
        <li :class="[currentNavSelected === 'plugin' ? 'selected' : '']">
          <RouterLink to="/plugin">插件</RouterLink>
        </li>
        <li :class="[currentNavSelected === 'download' ? 'selected' : '']">
          <RouterLink to="/download">下载</RouterLink>
        </li>
        <li :class="[currentNavSelected === 'insiders' ? 'selected' : '']">
          <RouterLink to="/insiders">内测</RouterLink>
        </li>
      </ul>
    </nav>
    <div class="theme-btn" @click="toggle()">
      <ElIcon v-if="!isDark" size="18">
        <IconSun style="color: #FE9814;" />
      </ElIcon>
      <ElIcon v-else>
        <IconMoon style="color: #5553B9;" />
      </ElIcon>
    </div>
    <a v-once href="https://github.com/read-cat/read-cat" target="_blank" class="github-btn">
      <ElIcon size="18">
        <IconGithub />
      </ElIcon>
    </a>
    <div v-memo="[showMenu]" class="menu-btn" @click="showMenu = !showMenu">
      <ElIcon v-if="!showMenu">
        <IconMoreMenu />
      </ElIcon>
      <ElIcon size="14" v-else>
        <IconClose />
      </ElIcon>
    </div>
    <Menu v-model="showMenu" />
  </div>
</template>

<style scoped lang="scss">
.toolbar {
  display: flex;
  align-items: center;

  nav {
    ul {
      display: flex;

      li {
        margin-right: 5px;
        color: var(--rc-text-color);
        transition: color 0.3s ease;
        &:last-child {
          margin-right: 0;
        }

        a {
          padding: 5px 15px;
          color: currentColor;
        }

        &:hover {
          color: var(--rc-theme-color);
        }
      }

      li.selected {
        color: var(--rc-theme-color);
      }
    }
  }

  .theme-btn,
  .github-btn,
  .menu-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 0 5px;
    width: 30px;
    height: 30px;
    border-radius: 12px;
    cursor: pointer;
    transition: all 0.3s ease;
    &:hover {
      background-color: var(--rc-button-hover-bgcolor);
    }

    &:active {
      transform: scale(0.85);
    }
  }

  .theme-btn {}

  .menu-btn,
  .github-btn {
    color: var(--rc-text-color);
  }

  .menu-btn {
    display: none;
  }
}

@media screen and (max-width: 990px) {
  
}

@media screen and (max-width: 550px) {
  .toolbar {
    nav {
      display: none;
    }


    .theme-btn,
    .github-btn,
    .menu-btn {
      &:hover {
        background-color: transparent;
      }
    }

    .menu-btn {
      display: flex;
    }
  }
}
</style>