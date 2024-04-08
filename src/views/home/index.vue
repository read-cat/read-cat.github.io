<script setup lang="ts">
import { ElButton, ElIcon } from 'element-plus';
import IconPlugin from '../../assets/icon/icon-plugins.svg';
import IconBookshelf from '../../assets/icon/icon-bookshelf.svg';
import IconBookstore from '../../assets/icon/icon-bookstore.svg';
import IconBookmark from '../../assets/icon/icon-bookmark.svg';
import IconMore from '../../assets/icon/icon-more.svg';



</script>

<template>
  <div>
    <div v-once class="container-1">
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
    <div class="container-2">
      <h1>功能</h1>
      <div class="cards">
        <ul>
          <li>
            <h4>
              <ElIcon>
                <IconPlugin />
              </ElIcon>
              <span>插件</span>
            </h4>
            <p>插件让ReadCat拥有搜索、阅读的能力</p>
          </li>
          <li>
            <h4>
              <ElIcon>
                <IconBookshelf />
              </ElIcon>
              <span>书架</span>
            </h4>
            <p>将您喜欢的书本加入书架吧</p>
          </li>
          <li>
            <h4>
              <ElIcon size="18">
                <IconBookstore />
              </ElIcon>
              <span>书城</span>
            </h4>
            <p>为您推荐更多优质的小说</p>
          </li>
          <li>
            <h4>
              <ElIcon size="18">
                <IconBookmark />
              </ElIcon>
              <span>书签</span>
            </h4>
            <p>记录您阅读小说的点点滴滴</p>
          </li>
          <li>
            <h4>
              <ElIcon size="18">
                <IconMore />
              </ElIcon>
              <span>更多</span>
            </h4>
            <p>ReadCat不单只有这些功能，还有其他功能等你探索</p>
          </li>
          <li class="hide"></li>
          <li class="hide"></li>
          <li class="hide"></li>
          <li class="hide"></li>
          <li class="hide"></li>
        </ul>
      </div>
    </div>
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
    width: 650px;

    img {
      width: 100%;
      box-shadow: var(--el-box-shadow);
      border-radius: 5px;
    }
  }
}

.container-2 {
  display: flex;
  flex-direction: column;
  padding: 40px;

  h1 {
    text-align: center;
    margin-bottom: 10px;
  }

  .cards {
    ul {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;

      li {
        margin: 10px;
        padding: 10px 20px;
        width: 260px;
        height: 80px;
        background-color: #F3F3F3;
        border-radius: 10px;

        &.hide {
          padding: 0;
          width: 300px;
          height: 0;
        }

        h4 {
          display: flex;
          align-items: center;
          margin-bottom: 5px;

          span {
            margin-left: 5px;
          }
        }
      }
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
      min-width: 300px;
    }
  }
}
</style>