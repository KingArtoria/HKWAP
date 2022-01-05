<template>
  <div id="app" style="padding-bottom: 5rem">
    <router-view />
    <div class="tabbar">
      <div class="tabbar_item" @click="selectTabbar(1)">
        <img src="@assets/shy_wx.png" class="tabbar_item_icon" v-if="tabbarCurr != 1" />
        <div class="tabbar_item_wx" v-if="tabbarCurr != 1">首页</div>
        <img src="@assets/shy_xz.png" class="tabbar_item_icon" v-if="tabbarCurr == 1" />
        <div class="tabbar_item_xz" v-if="tabbarCurr == 1">首页</div>
      </div>
      <div class="tabbar_item" @click="selectTabbar(2)">
        <img src="@assets/renmai_wx.png" class="tabbar_item_icon" v-if="tabbarCurr != 2" />
        <div class="tabbar_item_wx" v-if="tabbarCurr != 2">人脉</div>
        <img src="@assets/renmai_xz.png" class="tabbar_item_icon" v-if="tabbarCurr == 2" />
        <div class="tabbar_item_xz" v-if="tabbarCurr == 2">人脉</div>
      </div>
      <div class="tabbar_btn">
        <img src="@assets/fabu@2x.png" class="tabbar_btn_icon" />
        <div class="tabbar_btn_text">发布</div>
      </div>
      <div class="tabbar_item" @click="selectTabbar(3)">
        <img src="@assets/xiaoxi_wx.png" class="tabbar_item_icon" v-if="tabbarCurr != 3" />
        <div class="tabbar_item_wx" v-if="tabbarCurr != 3">消息</div>
        <img src="@assets/xiaoxi_xz.png" class="tabbar_item_icon" v-if="tabbarCurr == 3" />
        <div class="tabbar_item_xz" v-if="tabbarCurr == 3">消息</div>
      </div>
      <div class="tabbar_item" @click="selectTabbar(4)">
        <img src="@assets/gerenzx_wx.png" class="tabbar_item_icon" v-if="tabbarCurr != 4" />
        <div class="tabbar_item_wx" v-if="tabbarCurr != 4">客服</div>
        <img src="@assets/gerenzx_xz.png" class="tabbar_item_icon" v-if="tabbarCurr == 4" />
        <div class="tabbar_item_xz" v-if="tabbarCurr == 4">客服</div>
      </div>
    </div>
  </div>
</template>
<script>
import { timestampYMDHM } from '@utils/utils';
export default {
  data() {
    return {
      /* 当前tabbar */ tabbarCurr: 1,
    };
  },
  methods: {
    /* 选中tabbar */ selectTabbar(num) {
      this.tabbarCurr = num;
      switch (num) {
        case 1:
          this.$router.push('/');
          break;
      }
    },
  },
  destroyed() {
    localStorage.setItem('time', timestampYMDHM(new Date()));
  },
};
</script>
<style lang="scss">
@import './index.scss';
</style>
<style>
@import './index.css';
</style>
