<script setup lang="ts">
import { ElTable, ElTableColumn, ElImage, ElLink } from 'element-plus';
import IconGithub from '../../assets/icon/icon-github.svg';
import { storeToRefs } from 'pinia';
import { useWindowStore } from '../../store/window';
import QRCode from '../../assets/qrcode.webp';
import QRCodeDark from '../../assets/qrcode-dark.webp';

const downloads = [{
  title: '阿里云盘',
  icon: 'https://img.alicdn.com/imgextra/i1/O1CN01JDQCi21Dc8EfbRwvF_!!6000000000236-73-tps-64-64.ico',
  url: 'https://www.alipan.com/s/Cfdf3RMqorm'
}, {
  title: '123云盘',
  icon: 'https://statics.123pan.com/static/favicon.ico',
  url: 'https://www.123pan.com/s/OwzA-UoGsd.html'
}];

const { isDark } = storeToRefs(useWindowStore());
</script>
<template>
  <div class="insiders">
    <h2>欢迎您加入ReadCat内测</h2>
    <p>暂时只支持Windows(>=10)平台, 后续逐步发放Linux、MacOS版</p>
    <div class="downloads">
      <p>下载内测版:</p>
      <ElTable border :data="downloads" :show-header="false">
        <ElTableColumn width="140">
          <template #default="{ row }">
            <div class="title">
              <ElImage :src="row.icon" style="width: 20px;height: 20px;" fit="cover" />
              <span>{{ row.title }}</span>
            </div>
          </template>
        </ElTableColumn>
        <ElTableColumn>
          <template #default="{ row }">
            <div class="url">
              <!-- <a :href="row.url" target="_blank">{{ row.url }}</a> -->
              <ElLink :href="row.url" target="_blank">{{ row.url }}</ElLink>
            </div>
          </template>
        </ElTableColumn>
      </ElTable>
    </div>
    <div class="discussion">
      <div class="qq">
        <p>内测交流群(群号：<ElLink href="https://qm.qq.com/q/y5yIM9MIkE" target="_blank">903473975</ElLink>)</p>
        <div class="qrcode">
          <img :src="isDark ? QRCodeDark : QRCode" alt="QQ群二维码" width="200px" />
        </div>
      </div>
      <div class="github">
        <ElLink :icon="IconGithub" target="_blank" href="https://github.com/read-cat/read-cat/discussions">Github
          Discussions</ElLink>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.insiders {
  margin: 40px;
  max-width: 500px;
  color: var(--rc-text-color);

  a {
    color: var(--rc-theme-color);
    --el-link-hover-text-color: var(--rc-theme-color);
  }

  .downloads {
    margin-top: 15px;
    // width: 400px;

    .title {
      display: flex;
      flex-direction: row;
      align-items: center;

      span {
        margin-left: 5px;
      }
    }

    :deep(.el-link) {
      justify-content: flex-start;
      max-width: 100%;
      .el-link__inner {
        display: inline-block;
        max-width: 100%;
      }
    }

  }

  .discussion {
    margin-top: 15px;

    .qq {
      p {
        display: flex;
      }
      .qrcode {
        display: flex;
        justify-content: center;
        align-items: center;
        margin-top: 10px;
        width: 220px;
        height: 220px;
        border-radius: 10px;
        border: 2px solid var(--rc-qrcode-border-color);
        background-color: var(--rc-qrcode-bgcolor);
      }

    }

    .github {
      margin-top: 20px;

      a {
        :deep(.el-icon) {
          margin-right: 5px;
        }

        font-size: 17px;
      }
    }
  }
}

@media screen and (max-width: 990px) {}

@media screen and (max-width: 375px) {}
</style>