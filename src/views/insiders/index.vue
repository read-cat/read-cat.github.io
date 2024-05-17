<script setup lang="ts">
import { ElTable, ElTableColumn, ElImage, ElLink } from 'element-plus';
import IconGithub from '../../assets/icon/icon-github.svg';
import { storeToRefs } from 'pinia';
import { useWindowStore } from '../../store/window';
import QRCode from '../../assets/qrcode.webp';
import QRCodeDark from '../../assets/qrcode-dark.webp';
import QRCode1 from '../../assets/qrcode-1.webp';
import QRCode1Dark from '../../assets/qrcode-1-dark.webp';

const downloads = [{
  title: '123云盘<br>(插件、Linux、MacOS、Windows)',
  icon: 'https://statics.123pan.com/static/favicon.ico',
  url: 'https://www.123pan.com/s/OwzA-UoGsd.html'
}, {
  title: 'Github',
  icon: 'data:image/svg+xml;charset=utf-8;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNiAwQzcuMTYgMCAwIDcuMTYgMCAxNkMwIDIzLjA4IDQuNTggMjkuMDYgMTAuOTQgMzEuMThDMTEuNzQgMzEuMzIgMTIuMDQgMzAuODQgMTIuMDQgMzAuNDJDMTIuMDQgMzAuMDQgMTIuMDIgMjguNzggMTIuMDIgMjcuNDRDOCAyOC4xOCA2Ljk2IDI2LjQ2IDYuNjQgMjUuNTZDNi40NiAyNS4xIDUuNjggMjMuNjggNSAyMy4zQzQuNDQgMjMgMy42NCAyMi4yNiA0Ljk4IDIyLjI0QzYuMjQgMjIuMjIgNy4xNCAyMy40IDcuNDQgMjMuODhDOC44OCAyNi4zIDExLjE4IDI1LjYyIDEyLjEgMjUuMkMxMi4yNCAyNC4xNiAxMi42NiAyMy40NiAxMy4xMiAyMy4wNkM5LjU2IDIyLjY2IDUuODQgMjEuMjggNS44NCAxNS4xNkM1Ljg0IDEzLjQyIDYuNDYgMTEuOTggNy40OCAxMC44NkM3LjMyIDEwLjQ2IDYuNzYgOC44MiA3LjY0IDYuNjJDNy42NCA2LjYyIDguOTggNi4yIDEyLjA0IDguMjZDMTMuMzIgNy45IDE0LjY4IDcuNzIgMTYuMDQgNy43MkMxNy40IDcuNzIgMTguNzYgNy45IDIwLjA0IDguMjZDMjMuMSA2LjE4IDI0LjQ0IDYuNjIgMjQuNDQgNi42MkMyNS4zMiA4LjgyIDI0Ljc2IDEwLjQ2IDI0LjYgMTAuODZDMjUuNjIgMTEuOTggMjYuMjQgMTMuNCAyNi4yNCAxNS4xNkMyNi4yNCAyMS4zIDIyLjUgMjIuNjYgMTguOTQgMjMuMDZDMTkuNTIgMjMuNTYgMjAuMDIgMjQuNTIgMjAuMDIgMjYuMDJDMjAuMDIgMjguMTYgMjAgMjkuODggMjAgMzAuNDJDMjAgMzAuODQgMjAuMyAzMS4zNCAyMS4xIDMxLjE4QzI3LjQyIDI5LjA2IDMyIDIzLjA2IDMyIDE2QzMyIDcuMTYgMjQuODQgMCAxNiAwVjBaIiBmaWxsPSIjMjQyOTJFIi8+Cjwvc3ZnPg==',
  url: 'https://github.com/read-cat/read-cat/releases'
}];

const qqs = [{
  title: '内测交流群',
  code: '903473975',
  link: 'https://qm.qq.com/q/y5yIM9MIkE',
  image: {
    light: QRCode,
    dark: QRCodeDark
  }
}, {
  title: '内测交流群1',
  code: '959115174',
  link: 'https://qm.qq.com/q/qKuY7T8Wu6',
  image: {
    light: QRCode1,
    dark: QRCode1Dark
  }
}];

const { isDark } = storeToRefs(useWindowStore());
</script>
<template>
  <div class="insiders">
    <h2>欢迎您加入ReadCat内测</h2>
    <p>支持Windows(>=10)、Linux、MacOS(darwin)平台</p>
    <div class="downloads">
      <p>下载内测版:</p>
      <ElTable border :data="downloads" :show-header="false">
        <ElTableColumn>
          <template #default="{ row }">
            <div class="title">
              <ElImage :src="row.icon" style="width: 20px;height: 20px;" fit="cover" />
              <span v-html="row.title"></span>
            </div>
          </template>
        </ElTableColumn>
        <ElTableColumn>
          <template #default="{ row }">
            <div class="url">
              <ElLink :href="row.url" target="_blank">{{ row.url }}</ElLink>
            </div>
          </template>
        </ElTableColumn>
      </ElTable>
    </div>
    <div class="discussion">
      <div class="qqs">
        <div v-for="qq of qqs" class="qq">
          <p>{{ qq.title }}(群号：<ElLink :href="qq.link" target="_blank">{{ qq.code }}</ElLink>)</p>
          <div class="qrcode">
            <img :src="isDark ? qq.image.dark : qq.image.light" alt="QQ群二维码" width="200px" />
          </div>
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
  max-width: 800px;
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
        display: inline-block;
        margin-left: 5px;
        max-width: 220px;
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

    .qqs {
      display: flex;
      flex-wrap: wrap;

      .qq {
        margin-right: 10px;

        &:last-child {
          margin-right: 0;
        }
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

@media screen and (max-width: 450px) {
  .insiders {
    .downloads {
      .title {
        span {
          max-width: 80px;
        }
      }
    }
  }
}

@media screen and (max-width: 375px) {}
</style>