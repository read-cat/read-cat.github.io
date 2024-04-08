<script setup lang="ts">
import { ElContainer, ElFooter, ElHeader, ElMain } from 'element-plus';
import { useRouter } from 'vue-router';

const router = useRouter();

router.afterEach((to, _, fail) => {
  if (fail) {
    return;
  }
  const title = document.head.querySelector('title');
  title && (title.innerText = `${to.meta.title} | ReadCat`);
});

</script>

<template>
  <ElContainer id="container" class="rc-scrollbar">
    <ElHeader class="header">
      <div class="logo">
        <a href="/">
          <img src="./assets/logo.png" alt="logo" />
          <span>ReadCat</span>
        </a>
      </div>
    </ElHeader>
    <ElMain class="main">
      <RouterView />
    </ElMain>
    <ElFooter></ElFooter>
  </ElContainer>
</template>

<style scoped lang="scss">
#container {
  width: 100%;
  max-width: 1400px;
}
.header {
  position: sticky;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50px;
  background-color: var(--rc-window-box-blur-bgcolor);
  backdrop-filter: blur(30px);
  border-bottom: 1px solid #E9E9EB;
  .logo {
    a {
      display: flex;
      align-items: center;

      img {
        width: 30px;
        height: 30px;
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
  padding: 0;
}

@media screen and (max-width: 990px) {
  .header {
  }
}
</style>
