<template>
  <div>
    <div class="ad">
      <div class="ad_title">知识产权一站式平台</div>
      <div class="ad_text">专注知识产权6年，13万+客户的选择</div>
    </div>
    <van-tree-select :items="registration" :main-active-index="activeIndex" @click-nav="treeSelectClick">
      <template #content>
        <div class="treeSelect_info" v-for="(item, index) in registration[activeIndex].children" :key="index">
          <img :src="item.icon" class="treeSelect_info_icon" />
          <div class="treeSelect_info_text">
            <div class="treeSelect_info_text_value">{{ item.title }}</div>
            <div class="treeSelect_info_text_key">{{ item.detail }}</div>
          </div>
        </div>
      </template>
    </van-tree-select>
    <div class="service">
      <div class="service_text">全国服务热线：</div>
      <div class="service_phone">{{ mobile }}</div>
      <img src="http://39.106.208.234/pic/img_/dianhua@2x.png" class="service_icon" />
    </div>
  </div>
</template>
<script>
import { getRegistration } from '@utils/api';
export default {
  data() {
    return {
      /* 分类索引 */ activeIndex: 0,
      /* 办证服务 */ registration: [
        { text: '增值电信', children: [] },
        { text: '认证服务', children: [] },
        { text: '知识产权', children: [] },
      ],
      /* 客服电话 */ mobile: '',
    };
  },
  methods: {
    /* 获取办证服务 */ getRegistration() {
      getRegistration().then(res => {
        this.mobile = res.data.mobile;
        this.registration[0].children = res.data.registration[0];
        this.registration[1].children = res.data.registration[1];
        this.registration[2].children = res.data.registration[2];
      });
    },
    /* 点击左侧回调 */ treeSelectClick(index) {
      this.activeIndex = index;
    },
  },
  mounted() {
    /* 获取办证服务 */ this.getRegistration();
  },
};
</script>
<style lang="scss" scoped>
@import './index.scss';
</style>
