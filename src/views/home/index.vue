<script setup lang="ts">
import { ElButton } from 'element-plus';




</script>

<template>
  <div class="container">
    <div>
      <img src="../../assets/logo.png" alt="logo" />
      <p class="intro">一款简洁、纯净、无广告</p>
      <p class="intro">的小说阅读器</p>
      <div class="btns">
        <ElButton type="primary" color="#1E78EB" size="large">下载 Windows 版</ElButton>
        <a href="">加入内测</a>
      </div>
    </div>
    <div>
      <img src="../../assets/read-light.png" alt="Read" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.container {
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
      margin-bottom: 10px;
      width: 128px;
    }
    p {
      font-size: 20px;
      font-weight: bold;
      color: var(--rc-theme-color);
    }
    .intro {
      color: var(--rc-intro-color);
    }
    .btns {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin-top: 10px;

      a {
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
    width: 650px;
    img {
      width: 100%;
      box-shadow: var(--el-box-shadow);
      border-radius: 5px;
    }
  }
}
@media screen and (max-width: 990px) {
  .container {
    flex-direction: column;
    align-items: center;
    div:nth-child(1) {
      margin-right: 0;
      margin-bottom: 10px;
      width: 100%;
    }
    div:nth-child(2) {
      width: 90%;
      min-width: 300px;
    }
  }
}
</style>