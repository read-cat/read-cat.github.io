<script setup lang="ts">
import { ElContainer, ElHeader, ElMain } from 'element-plus';
import { useRouter } from 'vue-router';
import Toolbar from './components/toolbar/index.vue';

const router = useRouter();

router.afterEach((to, _, fail) => {
  if (fail) {
    return;
  }
  const title = document.head.querySelector('title');
  title && (title.innerText = (to.meta.title ? `${to.meta.title} | ` : '') + 'ReadCat');
});

</script>

<template>
  <ElContainer>
    <ElHeader class="header">
      <div class="logo">
        <a href="/">
          <img src="/logo.png" alt="logo" />
          <span>ReadCat</span>
        </a>
      </div>
      <Toolbar />
    </ElHeader>
    <ElMain class="main rc-scrollbar">
      <RouterView />
      <footer class="footer">
        <p>Released under the GPL-3.0 License.</p>
        <p>Copyright © 2024-present Panda</p>
      </footer>
    </ElMain>
  </ElContainer>
</template>

<style scoped lang="scss">
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
  z-index: 1;

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
        user-select: none;
      }
    }

  }
}

.main {
  padding: 50px 0 0 0;
  min-height: 500px;
  height: 100vh;
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
}

@media screen and (max-width: 990px) {
  .header {}
}
</style>
