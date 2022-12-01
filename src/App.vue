<template>
  <div id="app" :style="`padding-bottom: ${paddingBottom}rem`">
    <router-view />
    <van-overlay :show="rightTop" @click="rightTop = false">
      <div class="rightTop">
        <img src="@assets/jt.png" class="rightTop_icon" />
        <div class="rightTop_text">请在游览器打开</div>
      </div>
    </van-overlay>
  </div>
</template>
<script>
import { timestampYMDHM, isDevice } from '@utils/utils';
export default {
  data() {
    return {
      /* 当前tabbar */ tabbarCurr: 1,
      /* 展示tabbar */ tabbarShow: true,
      /* paddingBottom */ paddingBottom: 5,
      /* 右上角箭头 */ rightTop: false,
    };
  },
  methods: {
    /* 初始化转化 */ initAgl() {
      window._agl = window._agl || [];
      (() => {
        _agl.push(['production', '_f7L2XwGXjyszb4d1e2oxPybgD']);
        (() => {
          var agl = document.createElement('script');
          agl.type = 'text/javascript';
          agl.async = true;
          agl.src = 'https://fxgate.baidu.com/angelia/fcagl.js?production=_f7L2XwGXjyszb4d1e2oxPybgD';
          var s = document.getElementsByTagName('script')[0];
          s.parentNode.insertBefore(agl, s);
        })();
      })();
    },
    /* 添加脚本 */ initCNZZ() {
      const script = document.createElement('script');
      script.src = `https://v1.cnzz.com/z_stat.php?id=1280925020&web_id=1280925020`;
      script.language = 'JavaScript';
      document.body.appendChild(script);
    },
    /* 下载APP */ downloadAPP() {
      if (isDevice() == 'wx') this.rightTop = true;
      else if (isDevice() == 'and') window.location.href = 'http://39.106.208.234/azb/BDhuoke.apk';
      else window.location.href = 'https://itunes.apple.com/cn/app/id1568041500?mt=8';
    },
    /* 选中tabbar */ selectTabbar(num) {},
  },
  destroyed() {
    localStorage.setItem('time', timestampYMDHM(new Date()));
  },
  watch: {
    $route(to) {
      if (to.path != '/' && to.path != '/contacts' && to.path != '/service') [this.tabbarShow, this.paddingBottom] = [false, 0];
      else [this.tabbarShow, this.paddingBottom] = [true, 5];
    },
    // $route: {
    //   handler(to, from) {
    //     setTimeout(() => {
    //       //避免首次获取不到window._czc
    //       if (window._czc) {
    //         let location = window.location;
    //         let contentUrl = location.pathname + location.hash;
    //         let refererUrl = '/';
    //         // 用于发送某个URL的PV统计请求，
    //         window._czc.push(['_trackPageview', contentUrl, refererUrl]);
    //       }
    //     }, 300);
    //   },
    //   immediate: true, // 首次进入页面即执行
    // },
  },
  mounted() {
    var ua = window.navigator.userAgent.toLowerCase();
    console.log(ua); //mozilla/5.0 (iphone; cpu iphone os 9_1 like mac os x) applewebkit/601.1.46 (khtml, like gecko)version/9.0 mobile/13b143 safari/601.1
    // if (ua.match(/MicroMessenger/i) == 'micromessenger') {
    //   alert('请在点击右上角在外部浏览器打开');
    // }
    // this.initAgl();
  },
};
</script>
<style lang="scss">
@import './index.scss';
</style>
<style>
@import './index.css';
</style>
