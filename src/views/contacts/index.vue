<template>
  <div>
    <div class="list">
      <div class="list_item" v-for="(item, index) in recommendList" :key="index">
        <img :src="`http://admin.bdhuoke.com${item.head}`" class="list_item_tx" />
        <div class="list_item_right">
          <div class="list_item_right_content">
            <div class="list_item_right_content_top">
              <div class="list_item_right_content_top_name">{{ item.nick_name }}</div>
              <div class="list_item_right_content_top_text">{{ item.company }}</div>
              <div class="list_item_right_content_top_text">{{ item.position }}</div>
            </div>
            <div class="list_item_right_content_tag">{{ item.count }}合作信息</div>
            <div class="list_item_right_content_title">{{ item.title }}</div>
          </div>
          <div class="list_item_right_btn" @click="downloadAPP">
            <img src="http://39.106.208.234/pic/img_/haoyou.png" class="list_item_right_btn_icon" />
            <div class="list_item_right_btn_title">好友</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { getRecommendList } from '@utils/api';
import { isDevice } from '@utils/utils';
export default {
  data() {
    return {
      /* 推荐人脉 */ recommendList: [],
    };
  },
  methods: {
    /* 下载APP */ downloadAPP() {
      if (isDevice() == 'and') window.location.href = 'http://39.106.208.234/azb/BDhuoke.apk';
      else window.location.href = 'https://itunes.apple.com/cn/app/id1568041500?mt=8';
    },
    /* 获取推荐人脉 */ getRecommendList() {
      getRecommendList({ status: 1 }).then(res => {
        this.recommendList = res;
      });
    },
  },
  mounted() {
    /* 获取推荐人脉 */ this.getRecommendList();
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
