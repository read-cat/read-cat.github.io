<script setup lang="ts">
import { ElIcon } from 'element-plus';
import IconPlugin from '../../../../assets/icon/icon-plugins.svg';
import IconBookshelf from '../../../../assets/icon/icon-bookshelf.svg';
import IconBookstore from '../../../../assets/icon/icon-bookstore.svg';
import IconBookmark from '../../../../assets/icon/icon-bookmark.svg';
import IconMore from '../../../../assets/icon/icon-more.svg';
</script>
<script lang="ts">
export default {
  name: 'Functions'
}
</script>

<template>
  <div v-once>
    <div class="functions">
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
.functions {
  display: flex;
  flex-direction: column;
  padding: 40px;

  h1 {
    text-align: center;
    margin-bottom: 10px;
    color: var(--rc-text-color);
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
        background-color: var(--rc-card-bgcolor);
        border-radius: 10px;
        color: var(--rc-text-color);
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
            user-select: text;
            -webkit-user-select: text;
          }
        }
        p {
          user-select: text;
          -webkit-user-select: text;
        }
      }
    }
  }
}

@media screen and (max-width: 375px) {
  .functions {
    padding: 40px 10px;
  }
}
</style>