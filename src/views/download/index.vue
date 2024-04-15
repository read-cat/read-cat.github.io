<script setup lang="ts">
import { ElButtonGroup, ElButton } from 'element-plus';
import Read from '../../assets/read.webp';



</script>
<template>
  <div class="download">
    <div>
      <img src="/logo.png" alt="logo">
      <p>一款<span>免费</span>、<span>开源</span>、<span>简洁</span>、<span>纯净</span>、<span>无广告</span>的小说阅读器</p>
      <div class="insiders">
        <p>由于诸多功能尚未实现，将暂时不发布Release版本</p>
        <p>若您想提前体验ReadCat请<RouterLink to="/insiders">加入内测</RouterLink>吧</p>
      </div>
      <ElButtonGroup v-if="false">
        <ElButton type="primary" color="#1E78EB">Download (Windows 32-bit)</ElButton>
        <ElButton type="primary" color="#1E78EB">Download (Windows 64-bit)</ElButton>
      </ElButtonGroup>
    </div>
    <div>
      <img :src="Read" alt="read" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.download {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 40px 0;
  color: var(--rc-text-color);
  div:nth-child(1) {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    width: 60%;

    img {
      margin-bottom: 10px;
      width: 50px;
      height: 50px;
      border-radius: 18px;
      box-shadow: 0px 12px 32px 4px rgba(30, 120, 235, 0.5), 0px 8px 20px rgba(30, 120, 235, 0.08);
    }

    p {
      font-size: 20px;
      font-weight: bold;
      color: var(--rc-text-color);

      span {
        color: var(--rc-theme-color);
      }
    }

    .insiders {
      margin: 10px 0;

      a {
        color: var(--rc-theme-color);
        text-decoration: underline;
      }
    }
    :deep(.el-button-group) {
      display: flex;
      align-items: center;
      margin-top: 10px;
    }
  }

  div:nth-child(2) {
    // display: flex;
    width: 60%;

    img {
      width: 100%;
    }
  }
}

@media screen and (max-width: 990px) {
  .download {

    div:nth-child(1) {
      width: 60%;
    }

    div:nth-child(2) {
      width: 80%;
    }

  }
}

@media screen and (max-width: 600px) {
  div:nth-child(1) {
    :deep(.el-button-group) {
      flex-direction: column;
      .el-button {
        margin: 5px 0;
        border-radius: 5px;
        border-color: transparent;
      }
    }
  }
}
</style>