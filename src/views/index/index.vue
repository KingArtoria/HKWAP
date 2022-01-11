<template>
  <div>
    <van-pull-refresh v-model="refreshLoading" @refresh="refresh">
      <!-- <div class="head">
        <div class="head_search" @click="goSearch">
          <van-field clearable left-icon="search" placeholder="地推 | 拉新 | 教育 | 跑量 | 阅读..." style="border-radius: 1.12rem; border: 0.064rem solid #4281fe" />
        </div>
      </div> -->
      <div class="content">
        <div class="content_top">
          <van-swipe autoplay="3000" style="height: 6.4rem" :show-indicators="false" class="swipe">
            <van-swipe-item v-for="(item, index) in pic" :key="index">
              <van-image :src="item.pic" style="height: 6.4rem; width: 100%" fit="fill" />
            </van-swipe-item>
          </van-swipe>
          <div class="tag">
            <img src="@assets/sy_ptjy.png" class="tag_item" @click="downloadAPP" />
            <img src="@assets/sy_qycx.png" class="tag_item" @click="downloadAPP" />
            <img src="@assets/sy_zzbl.png" class="tag_item" @click="goCertificate" />
          </div>
          <img src="@assets/sy_ggtf.png" class="ad" @click="goAd" />
          <div class="grid">
            <van-swipe style="padding-bottom: 0.64rem" :loop="false">
              <van-swipe-item>
                <van-grid :column-num="5" :border="false">
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_ggjf@2x.png" text="广告甲方" @click="goSingleList(1)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_llyftb@2x.png" text="流量乙方" @click="goSingleList(2)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_yzhy@2x.png" text="优质货源" @click="goSingleList(3)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_xsqd.png" text="销售渠道" @click="goSingleList(4)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_zyhh@2x.png" text="资源互换" @click="goSingleList(5)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_llhh@2x.png" text="流量互换" @click="goSingleList(6)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_zsjm@2x.png" text="招商加盟" @click="goSingleList(7)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_xxgg@2x.png" text="线下广告" @click="goSingleList(8)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_xxcd@2x.png" text="线下场地" @click="goSingleList(9)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_mffl@2x.png" text="免费福利" @click="goSingleList(10)" />
                </van-grid>
              </van-swipe-item>
              <van-swipe-item>
                <van-grid :column-num="5" :border="false">
                  <van-grid-item icon="http://39.106.208.234/pic/img_/tjxm_jgq@2x.png" text="易达靓号" @click="goYidalh" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/sy_xmtzr@2x.png" text="新媒体转让" @click="goSingleList(11)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/wzzr@2x.png" text="网站转让" @click="goSingleList(12)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/ymzr@2x.png" text="域名转让" @click="goSingleList(13)" />
                  <van-grid-item icon="http://39.106.208.234/pic/img_/djzx@2x.png" text="道具中心" @click="downloadAPP" />
                </van-grid>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <div class="tabs">
          <van-tabs v-model="tbsCurr" background="#f6f6f6" title-active-color="#1F73F1" :sticky="true" @change="tabsChange">
            <van-tab title="推荐">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="广告甲方">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="流量乙方">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="优质货源">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="销售渠道">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="资源互换">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="流量互换">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="招商加盟">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="线下广告">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="线下场地">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="免费福利">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" />
              </van-list>
            </van-tab>
            <van-tab title="新媒体转让">
              <van-list v-model="listLoading" @load="onLoad">
                <Media v-for="(item, index) in index" :key="index" :item="item" />
              </van-list>
            </van-tab>
            <van-tab title="域名转让">
              <van-list v-model="listLoading" @load="onLoad">
                <Domain :dataArray="index" ref="domain" />
              </van-list>
            </van-tab>
            <van-tab title="网站转让">
              <van-list v-model="listLoading" @load="onLoad">
                <Website v-for="(item, index) in index" :key="index" :item="item" />
              </van-list>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import Docking from '@components/Docking/index';
import Media from '@components/Media/index';
import Domain from '@components/Domain/index';
import Website from '@components/Website/index';
import { comprehensiveIndex, getPic, getResponses, queryrelGetResponses, queryrelDomainList, queryrelWebList, lhcount } from '@utils/api';
import { isNull, isDevice } from '@utils/utils';
export default {
  data() {
    return {
      /* 轮播图 */ pic: [],
      /* tabs当前页 */ tbsCurr: 0,
      /* 首页接口参数 */ indexParams: { page: 1, exclude: [], num: 1 },
      /* 首页数据 */ index: [],
      /* 下拉刷新加载 */ refreshLoading: false,
      /* 列表加载 */ listLoading: false,
    };
  },
  methods: {
    /* 跳转靓号 */ goYidalh() {
      lhcount();
      location.href = 'http://yidalh.zhibiwl.com';
    },
    /* 前往单个列表 */ goSingleList(num) {
      this.$router.push(`/singleList/${num}`);
    },
    /* 前往广告位 */ goAd() {
      this.$router.push('/ad');
    },
    /* 前往资质办理 */ goCertificate() {
      this.$router.push('/certificate');
    },
    /* 下载APP */ downloadAPP() {
      if (isDevice() == 'and') window.location.href = 'http://39.106.208.234/azb/BDhuoke.apk';
      else window.location.href = 'https://itunes.apple.com/cn/app/id1568041500?mt=8';
    },
    /* 切换tabs */ tabsChange(curr) {
      this.index = [];
      switch (curr) {
        case 0:
          this.indexParams = { page: 1, exclude: [], num: 1 };
          this.comprehensiveIndex();
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          this.indexParams = { page: 1, exclude: [], num: 1 };
          this.getResponses({ type: curr, page: 1 });
          break;
        case 11:
          this.indexParams = { page: 1, exclude: [], num: 1 };
          this.queryrelGetResponses({ page: 1 });
          break;
        case 12:
          this.indexParams = { page: 1, exclude: [], num: 1 };
          this.queryrelDomainList({ page: 1 });
          break;
        case 13:
          this.indexParams = { page: 1, exclude: [], num: 1 };
          this.queryrelWebList({ page: 1 });
          break;
      }
    },
    /* 分页 */ onLoad() {
      switch (this.tbsCurr) {
        case 0:
          this.indexParams.page += 1;
          this.indexParams.exclude = this.index.map(item => item.id).join(',');
          this.comprehensiveIndex();
          break;
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9:
        case 10:
          this.indexParams.page += 1;
          this.getResponses({ page: this.indexParams.page, type: this.tbsCurr });
          break;
        case 11:
          this.indexParams.page += 1;
          this.queryrelGetResponses({ page: this.indexParams.page });
          break;
        case 12:
          this.indexParams.page += 1;
          this.queryrelDomainList({ page: this.indexParams.page });
          break;
        case 13:
          this.indexParams.page += 1;
          this.queryrelWebList({ page: this.indexParams.page });
          break;
      }
    },
    /* 网站查询 */ queryrelWebList(params) {
      queryrelWebList(params).then(res => {
        if (isNull(res.data)) {
          this.$notify({ type: 'primary', message: '已经到底啦' });
          this.refreshLoading = false;
          this.listLoading = false;
          return false;
        }
        res.data.forEach(item => {
          if (item.baiducount > 10000) item.baiducount = `${parseInt(item.baiducount / 10000)}万+`;
          if (item.flow > 10000) item.flow = `${parseInt(item.flow / 10000)}万+`;
          if (item.sitecount > 10000) item.sitecount = `${parseInt(item.sitecount / 10000)}万+`;
          this.index.push(item);
          this.refreshLoading = false;
          this.listLoading = false;
        });
      });
    },
    /* 域名查询 */ queryrelDomainList(params) {
      queryrelDomainList(params).then(res => {
        if (isNull(res.data)) {
          this.$notify({ type: 'primary', message: '已经到底啦' });
          this.refreshLoading = false;
          this.listLoading = false;
          return false;
        }
        res.data.forEach(item => this.index.push(item));
        this.refreshLoading = false;
        this.listLoading = false;
        this.$refs.domain.separateList();
      });
    },
    /* 新媒体查询 */ queryrelGetResponses(params) {
      queryrelGetResponses(params).then(res => {
        if (isNull(res.data)) {
          this.$notify({ type: 'primary', message: '已经到底啦' });
          this.refreshLoading = false;
          this.listLoading = false;
          return false;
        }
        res.data.forEach(item => {
          if (item.fans_num > 10000) item.fans_num = `${parseInt(item.fans_num / 10000)}W`;
          if (item.platform == 4 && item.thumb_up > 10000) item.thumb_up = `${parseInt(item.thumb_up / 10000)}W`;
          this.index.push(item);
        });
        this.refreshLoading = false;
        this.listLoading = false;
      });
    },
    /* 资源对接查询 */ getResponses(params) {
      getResponses(params).then(res => {
        if (isNull(res.data)) {
          this.$notify({ type: 'primary', message: '已经到底啦' });
          this.refreshLoading = false;
          this.listLoading = false;
          return false;
        }
        res.data.forEach(item => {
          if (item.is_super == 1) item.name_color = '#B957FD';
          else if (item.is_vip == 1) item.name_color = '#F11F1F';
          else item.name_color = '#333';
          this.index.push(item);
        });
        this.refreshLoading = false;
        this.listLoading = false;
      });
    },
    /* 下拉刷新 */ refresh() {
      this.tbsCurr = 0;
      this.indexParams = { page: 1, exclude: [], num: 1 };
      this.comprehensiveIndex();
    },
    /* 前往搜索 */ goSearch() {
      return '暂未开发';
    },
    /* 获取轮播 */ getPic() {
      getPic({ type: 'banner' }).then(res => (this.pic = res));
    },
    /* 推荐接口 */ comprehensiveIndex() {
      comprehensiveIndex(this.indexParams).then(res => {
        this.indexParams.num = res.msg;
        res.data.is_rec0.forEach(item => {
          if (item.is_super == 1) item.name_color = '#B957FD';
          else if (item.is_vip == 1) item.name_color = '#F11F1F';
          else item.name_color = '#333';
          this.index.push(item);
        });
        res.data.is_rec1.forEach(item => {
          if (item.is_super == 1) item.name_color = '#B957FD';
          else if (item.is_vip == 1) item.name_color = '#F11F1F';
          this.index.push(item);
        });
        this.refreshLoading = false;
        this.listLoading = false;
      });
    },
    /* 初始化首页参数 */ initIndexParams() {
      this.indexParams.time = isNull(localStorage.getItem('time')) ? '0000-00-00 00:00' : localStorage.getItem('time');
    },
  },
  mounted() {
    /* 初始化首页参数 */ this.initIndexParams();
    /* 推荐接口 */ this.comprehensiveIndex();
    /* 获取轮播 */ this.getPic();
  },
  components: { Docking, Media, Domain, Website },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
