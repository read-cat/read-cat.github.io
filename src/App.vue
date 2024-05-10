<script setup lang="ts">
import { ElContainer, ElHeader, ElMain, ElBacktop } from 'element-plus';
import { useRouter } from 'vue-router';
import Toolbar from './components/toolbar/index.vue';
import { nextTick } from 'vue';

const router = useRouter();

router.afterEach((to, _, fail) => {
  if (fail) {
    return;
  }
  const title = document.head.querySelector('title');
  title && (title.innerText = (to.meta.title ? `${to.meta.title} | ` : '') + 'ReadCat');
  nextTick(() => {
    const container = document.querySelector<HTMLElement>('#container');
    container && (container.scrollTop = 0);
  })
});

</script>

<template>
  <ElContainer id="container" class="rc-scrollbar">
    <ElHeader class="header">
      <div class="logo">
        <a href="/">
          <img src="/logo.png" alt="logo" />
          <span>ReadCat</span>
        </a>
      </div>
      <Toolbar />
    </ElHeader>
    <ElMain class="main">
      <RouterView />
      <footer class="footer">
        <p>Released under the GPL-3.0 License.</p>
        <p>Copyright © 2024-present ReadCat</p>
      </footer>
    </ElMain>
    <ElBacktop target="section.rc-scrollbar" :bottom="120" />
  </ElContainer>
</template>

<style scoped lang="scss">
#container {
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100vh;

  .header {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100vw;
    height: 50px;
    background-color: var(--rc-window-box-blur-bgcolor);
    backdrop-filter: blur(30px);
    border-bottom: 1px solid var(--rc-border-color);
    z-index: 999;

    .logo {
      a {
        display: flex;
        align-items: center;

        img {
          width: 25px;
          height: 25px;
          -webkit-user-drag: none;
        }

        span {
          margin-left: 5px;
          font-weight: bold;
          color: var(--rc-theme-color);
        }
      }

    }
  }

  .main {
    padding: 50px 0 0 0;
    min-height: 500px;
    max-width: 1400px;
    width: 100%;
    overflow: visible;
  }

  .footer {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 30px;
    border-top: 1px solid var(--rc-border-color);
    height: auto;
    font-size: 13px;
    color: #73767a;

    p {
      user-select: text;
      -webkit-user-select: text;
    }
  }
}

@media screen and (max-width: 900px) {
  :deep(.el-backtop) {
    right: 20px !important;
  }
}
</style>
