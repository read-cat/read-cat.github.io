<script setup lang="ts">
import { ElButton } from 'element-plus';
import ReadLight from '../../assets/read-light.webp';
import ReadDark from '../../assets/read-dark.webp';
import { storeToRefs } from 'pinia';
import { useWindowStore } from '../../store/window';
import Functions from './components/functions/index.vue';
import { useRouter } from 'vue-router';

const router = useRouter();
const { isDark } = storeToRefs(useWindowStore());

</script>

<template>
  <div>
    <div class="container-1">
      <div v-once>
        <img src="/logo.png" alt="logo" />
        <p class="intro">一款免费、开源、简洁、纯净、无广告的小说阅读器</p>
        <div class="btns">
          <ElButton type="primary" color="#1E78EB" size="large" @click="router.push('/download')">下载最新版</ElButton>
          <RouterLink to="/insiders">加入内测</RouterLink>
        </div>
      </div>
      <div>
        <img v-memo="[isDark]" :src="`${isDark? ReadDark : ReadLight}`" alt="Read" />
      </div>
    </div>
    <Functions />
  </div>
</template>

<style scoped lang="scss">
.container-1 {
  display: flex;
  justify-content: space-around;
  padding: 40px;

  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 40px 20px 0 0;
    min-width: 220px;

    img {
      margin-bottom: 20px;
      width: 128px;
      border-radius: 44px;
      box-shadow: 0px 12px 32px 4px rgb(30 120 235 / 50%), 0px 8px 20px rgba(30, 120, 235, 0.08);
    }

    p {
      font-size: 20px;
      font-weight: bold;
      color: var(--rc-theme-color);
    }

    .intro {
      max-width: 350px;
      color: var(--rc-intro-color);
    }

    .btns {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 10px;

      a {
        align-items: center;
        margin-top: 10px;
        color: var(--rc-theme-color);
        text-align: center;

        &:hover {
          text-decoration: underline;
        }
      }
    }
  }

  div:nth-child(2) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 650px;
    border-radius: 6px;
    box-shadow: var(--rc-read-box-shadow);
    background-color: var(--rc-read-bgcolor);
    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 990px) {
  .container-1 {
    flex-direction: column;
    align-items: center;

    div:nth-child(1) {
      margin-right: 0;
      margin-bottom: 20px;
      width: 100%;
    }

    div:nth-child(2) {
      width: 90%;
      min-width: 250px;
      min-height: 150px;
    }
  }
}
@media screen and (max-width: 375px) {
  .container-1 {
    padding: 40px 10px;
  }
}
</style>