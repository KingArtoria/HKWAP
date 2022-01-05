<template>
  <div>
    <div class="head">
      <div class="head_search" @click="goSearch">
        <van-field clearable left-icon="search" placeholder="地推 | 拉新 | 教育 | 跑量 | 阅读..." style="border-radius: 1.12rem; border: 0.064rem solid #4281fe" />
      </div>
    </div>
    <div class="content">
      <div class="content_top">
        <van-swipe autoplay="3000" style="height: 6.4rem" :show-indicators="false" class="swipe">
          <van-swipe-item v-for="(item, index) in pic" :key="index">
            <van-image :src="item.pic" style="height: 6.4rem; width: 100%" fit="fill" />
          </van-swipe-item>
        </van-swipe>
        <div class="tag">
          <img src="@assets/sy_ptjy.png" class="tag_item" />
          <img src="@assets/sy_qycx.png" class="tag_item" />
          <img src="@assets/sy_zzbl.png" class="tag_item" />
        </div>
        <img src="@assets/sy_ggtf.png" class="ad" />
        <div class="grid">
          <van-swipe style="padding-bottom: 0.64rem" :loop="false">
            <van-swipe-item>
              <van-grid :column-num="5" :border="false">
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_ggjf@2x.png" text="广告甲方" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_llyftb@2x.png" text="流量乙方" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_yzhy@2x.png" text="优质货源" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_xsqd.png" text="销售渠道" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_zyhh@2x.png" text="资源互换" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_llhh@2x.png" text="流量互换" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_zsjm@2x.png" text="招商加盟" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_xxgg@2x.png" text="线下广告" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_xxcd@2x.png" text="线下场地" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_mffl@2x.png" text="免费福利" />
              </van-grid>
            </van-swipe-item>
            <van-swipe-item>
              <van-grid :column-num="5" :border="false">
                <van-grid-item icon="http://39.106.208.234/pic/img_/tjxm_jgq@2x.png" text="易达靓号" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/sy_xmtzr@2x.png" text="新媒体转让" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/wzzr@2x.png" text="网站转让" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/ymzr@2x.png" text="域名转让" />
                <van-grid-item icon="http://39.106.208.234/pic/img_/djzx@2x.png" text="道具中心" />
              </van-grid>
            </van-swipe-item>
          </van-swipe>
        </div>
        <div class="tabs">
          <van-tabs v-model="tbsCurr" background="#f6f6f6" title-active-color="#1F73F1" :sticky="true">
            <van-tab title="推荐">
              <Docking :item="item" v-for="(item, index) in index" :key="index" />
            </van-tab>
            <van-tab title="广告甲方"></van-tab>
            <van-tab title="流量乙方"></van-tab>
            <van-tab title="优质货源"></van-tab>
            <van-tab title="销售渠道"></van-tab>
            <van-tab title="资源互换"></van-tab>
            <van-tab title="流量互换"></van-tab>
            <van-tab title="招商加盟"></van-tab>
            <van-tab title="线下广告"></van-tab>
            <van-tab title="线下场地"></van-tab>
            <van-tab title="免费福利"></van-tab>
            <van-tab title="新媒体转让"></van-tab>
            <van-tab title="域名转让"></van-tab>
            <van-tab title="网站转让"></van-tab>
          </van-tabs>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { comprehensiveIndex, getPic } from '@utils/api';
import { isNull } from '@utils/utils';
import Docking from '@components/Docking/index';
export default {
  data() {
    return {
      /* 轮播图 */ pic: [],
      /* tabs当前页 */ tbsCurr: 0,
      /* 首页接口参数 */ indexParams: { page: 1, exclude: [], num: 1 },
      /* 首页数据 */ index: [],
    };
  },
  methods: {
    /* 获取页面总高度 */ getScrollHeight() {
      var scrollHeight = 0,
        bodyScrollHeight = 0,
        documentScrollHeight = 0;
      if (document.body) bodyScrollHeight = document.body.scrollHeight;
      if (document.documentElement) documentScrollHeight = document.documentElement.scrollHeight;
      scrollHeight = bodyScrollHeight - documentScrollHeight > 0 ? bodyScrollHeight : documentScrollHeight;
      return scrollHeight;
    },
    /* 滚动监听 */ handleScroll() {
      this.scrollTop = document.documentElement.scrollTop;
      console.log(this.getScrollHeight(),'21313')
      console.log(this.scrollTop);
    },
    /* 前往搜索 */ goSearch() {
      return '暂未开发';
    },
    /* 获取轮播 */ getPic() {
      getPic({ type: 'banner' }).then(res => (this.pic = res));
    },
    /* 推荐接口 */ comprehensiveIndex() {
      comprehensiveIndex(this.indexParams).then(res => {
        res.data.is_rec0.forEach(item => this.index.push(item));
        res.data.is_rec1.forEach(item => this.index.push(item));
      });
    },
    /* 初始化首页参数 */ initIndexParams() {
      this.indexParams.time = isNull(localStorage.getItem('time')) ? '0000-00-00 00:00' : localStorage.getItem('time');
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll, true);
    /* 初始化首页参数 */ this.initIndexParams();
    /* 推荐接口 */ this.comprehensiveIndex();
    /* 获取轮播 */ this.getPic();
  },
  components: { Docking },
  destroyed() {
    window.removeEventListener('scroll', this.handleScroll);
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
