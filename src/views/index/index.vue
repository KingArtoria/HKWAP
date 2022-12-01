<template>
  <div>
    <van-pull-refresh v-model="refreshLoading" @refresh="refresh">
      <div class="content">
        <div class="content_top">
          <van-image
            width="100%"
            height="6.4rem"
            src="http://39.106.208.234/pic/img_/banner_4.png"
            style="padding-top: 0.375rem"
          />
          <div class="sign">
            <van-field
              v-model="signParams.phone"
              placeholder="请输入11位手机号"
              style="margin-bottom: 0.5rem; border: 0.025rem solid #1f73f1"
              maxlength="11"
            />
            <van-cell-group
              style="width: 100%; margin: 0; border: 0.025rem solid #1f73f1"
              :border="false"
            >
              <van-field
                v-model="signParams.verificationcode"
                center
                clearable
                placeholder="请输入6位验证码"
                maxlength="6"
              >
                <template #button>
                  <van-button
                    size="small"
                    type="primary"
                    style="background: #1f73f1"
                    @click="getCode"
                    >获取验证码
                  </van-button>
                </template>
              </van-field>
            </van-cell-group>
            <van-button
              type="primary"
              style="width: 100%; margin-top: 0.7rem; background: #1f73f1"
              @click="sign"
              data-agl-cvt="6"
              >立即注册,免费资源</van-button
            >
            <van-button
              style="width: 100%; margin-top: 0.7rem; background: #fb8521"
              @click="downloadAPP"
              data-agl-cvt="6"
              v-if="isEnvironment != 'dev'"
              >我已注册,立即下载</van-button
            >
          </div>
          <div class="grid">
            <van-swipe style="padding-bottom: 0.64rem" :loop="false">
              <van-swipe-item>
                <van-grid :column-num="5" :border="false">
                  <!-- <van-grid-item icon="http://39.106.208.234/pic/img_/sy_xmtzr@2x.png" text="媒体转让" @click="goSingleList(11)" /> -->
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_ggjf@2x.png"
                    text="广告甲方"
                    @click="goSingleList(1)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_llyftb@2x.png"
                    text="流量乙方"
                    @click="goSingleList(2)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_yzhy@2x.png"
                    text="优质货源"
                    @click="goSingleList(3)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_xsqd.png"
                    text="销售渠道"
                    @click="goSingleList(4)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_zyhh@2x.png"
                    text="资源互换"
                    @click="goSingleList(5)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_llhh@2x.png"
                    text="流量互换"
                    @click="goSingleList(6)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <!-- <van-grid-item icon="http://39.106.208.234/pic/img_/sy_zsjm@2x.png" text="招商加盟" @click="goSingleList(7)" /> -->
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_xxgg@2x.png"
                    text="线下广告"
                    @click="goSingleList(8)"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_xxcd@2x.png"
                    text="线下场地"
                    @click="goSingleList(9)"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_mffl@2x.png"
                    text="免费福利"
                    @click="goSingleList(10)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/tjxm_jgq@2x.png"
                    text="易达靓号"
                    @click="goYidalh"
                    v-if="isEnvironment != 'dev'"
                  />
                </van-grid>
              </van-swipe-item>
              <van-swipe-item>
                <van-grid :column-num="5" :border="false">
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/sy_xmtzr@2x.png"
                    text="媒体转让"
                    @click="goSingleList(11)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/wzzr@2x.png"
                    text="网站转让"
                    @click="goSingleList(12)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <van-grid-item
                    icon="http://39.106.208.234/pic/img_/ymzr@2x.png"
                    text="域名转让"
                    @click="goSingleList(13)"
                    v-if="isEnvironment != 'dev'"
                  />
                  <!-- <van-grid-item icon="http://39.106.208.234/pic/img_/djzx@2x.png" text="道具中心" @click="downloadAPP" /> -->
                </van-grid>
              </van-swipe-item>
            </van-swipe>
          </div>
        </div>
        <div v-if="isEnvironment == 'dev'">
          <div class="info" style="padding-left: 30px">
            开发者：徐州星跃联动网络科技有限公司
          </div>
          <div class="info" style="padding-left: 30px">电话:15190664662</div>
          <div class="info" style="padding-left: 30px">电话:17312793392</div>
          <div class="info" style="padding-left: 30px">
            商务电话:18511169119
          </div>
          <div class="info" style="padding-left: 30px">
            官方邮箱:3459104052@qq.com
          </div>
          <div class="application" style="padding: 30px">
            徐州星跃联动网络科技有限公司是一家集资源整合等一体的综合性资源平台。
            平台成立至今成交项目达上万余个，在广告主对接中体现出了强大的资源整合实力。
          </div>
        </div>
        <div class="tabs">
          <van-tabs
            v-model="tbsCurr"
            background="#f6f6f6"
            title-active-color="#1F73F1"
            :sticky="true"
            @change="tabsChange"
          >
            <van-tab title="推荐" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="广告甲方" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="流量乙方" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="优质货源" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="销售渠道" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="资源互换" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="流量互换" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <!-- <van-tab title="招商加盟">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking :item="item" v-for="(item, index) in index" :key="index" @goInfo="goInfo" />
              </van-list>
            </van-tab> -->
            <van-tab title="线下广告">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="线下场地">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="免费福利" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Docking
                  :item="item"
                  v-for="(item, index) in index"
                  :key="index"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="新媒体转让" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Media
                  v-for="(item, index) in index"
                  :key="index"
                  :item="item"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
            <van-tab title="域名转让" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Domain :dataArray="index" ref="domain" @goInfo="goInfo" />
              </van-list>
            </van-tab>
            <van-tab title="网站转让" v-if="isEnvironment != 'dev'">
              <van-list v-model="listLoading" @load="onLoad">
                <Website
                  v-for="(item, index) in index"
                  :key="index"
                  :item="item"
                  @goInfo="goInfo"
                />
              </van-list>
            </van-tab>
          </van-tabs>
        </div>
      </div>
    </van-pull-refresh>
    <div class="tabbar">
      <div class="tabbar_item" @click="selectTabbar(1)">
        <img src="@assets/shy_xz.png" class="tabbar_item_icon" />
        <div class="tabbar_item_xz">首页</div>
      </div>
      <div class="tabbar_item" @click="selectTabbar(2)">
        <img src="@assets/renmai_wx.png" class="tabbar_item_icon" />
        <div class="tabbar_item_wx">人脉</div>
      </div>
      <div class="tabbar_btn" @click="selectTabbar(1)">
        <img src="@assets/fabu@2x.png" class="tabbar_btn_icon" />
        <div class="tabbar_btn_text">发布</div>
      </div>
      <div class="tabbar_item" @click="selectTabbar(3)">
        <img src="@assets/xiaoxi_wx.png" class="tabbar_item_icon" />
        <div class="tabbar_item_wx">消息</div>
      </div>
      <div class="tabbar_item" @click="selectTabbar(4)">
        <img src="@assets/gerenzx_wx.png" class="tabbar_item_icon" />
        <div class="tabbar_item_wx">客服</div>
      </div>
    </div>
    <van-overlay :show="rightTop" @click="rightTop = false">
      <div class="rightTop">
        <img src="@assets/jt.png" class="rightTop_icon" />
        <div class="rightTop_text">请在游览器打开</div>
      </div>
    </van-overlay>
    <van-overlay
      :show="signOverlay"
      @click="signOverlay = false"
      :custom-style="{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }"
    >
      <div class="wrapper" @click.stop>
        <div style="background: #fff; padding: 2rem">
          <van-field
            v-model="signParams.phone"
            placeholder="请输入11位手机号"
            style="margin-bottom: 0.5rem; border: 0.025rem solid #1f73f1"
            maxlength="11"
          />
          <van-cell-group
            style="width: 100%; margin: 0; border: 0.025rem solid #1f73f1"
            :border="false"
          >
            <van-field
              v-model="signParams.verificationcode"
              center
              clearable
              placeholder="请输入6位验证码"
              maxlength="6"
            >
              <template #button>
                <van-button
                  size="small"
                  type="primary"
                  style="background: #1f73f1"
                  @click="getCode"
                  >获取验证码
                </van-button>
              </template>
            </van-field>
          </van-cell-group>
          <van-button
            type="primary"
            style="width: 100%; margin-top: 0.7rem; background: #1f73f1"
            @click="sign"
            data-agl-cvt="6"
            >立即注册,免费资源</van-button
          >
        </div>
      </div>
    </van-overlay>
    <!-- <van-overlay :show="show" @click="show = false">
      <div class="wrapper" @click.stop>
        <slide-verify :l="42" :r="10" :w="310" :h="155" slider-text="向右滑动" @success="getCode" />
      </div>
    </van-overlay> -->
    <van-overlay :show="buttonShow" @click="buttonShow = false">
      <img :src="imgSrc" class="img" />
    </van-overlay>
  </div>
</template>
<script>
import Docking from "@components/Docking/index";
import Media from "@components/Media/index";
import Domain from "@components/Domain/index";
import Website from "@components/Website/index";
import axios from "axios";
import {
  comprehensiveIndex,
  getPic,
  getResponses,
  queryrelGetResponses,
  queryrelDomainList,
  queryrelWebList,
  lhcount,
  sign,
  getCode,
} from "@utils/api";
import { isNull, isDevice } from "@utils/utils";
import { getUserIP } from "../../utils/utils";
export default {
  data() {
    return {
      /* 轮播图 */ pic: [],
      /* tabs当前页 */ tbsCurr: 0,
      /* 首页接口参数 */ indexParams: { page: 1, exclude: [], num: 1 },
      /* 首页数据 */ index: [],
      /* 下拉刷新加载 */ refreshLoading: false,
      /* 列表加载 */ listLoading: false,
      /* 右上角箭头 */ rightTop: false,
      /* 注册参数 */ signParams: {
        source: "360M",
      },
      /* 获取验证码参数 */ codeParams: {
        type: "sign",
      },
      /* 注册遮罩层 */ signOverlay: false,
      show: false,
      buttonShow: false,
      imgSrc: "",
      /* 应用环境 */ isEnvironment: "dev",
    };
  },
  methods: {
    setKeyWord(id, keyWord) {
      console.log(id, keyWord);
      axios.post("http://node.bdhuoke.com/member/setKeyWord", { id, keyWord });
      const cityName = localStorage.getItem("cityname");
      // cityName包含江苏省
      if (cityName != "北京市") this.buttonShow = true;
      else this.downloadAPP();
      // this.downloadAPP();
    },
    selectTabbar() {
      this.signOverlay = true;
    },
    goInfo() {
      this.signOverlay = true;
    },
    /* 获取验证码 */ getCode() {
      this.show = false;
      this.codeParams.mobile = this.signParams.phone;
      getCode(this.codeParams).then((res) => {
        if (res.code != 1) {
          alert(res.data);
          return;
        }
        alert("发送成功");
      });
    },
    /* 注册 */ sign(e) {
      this.signParams.pass = Math.floor(Math.random() * 10000000 + 1);
      // DeviceInfo.getDeviceInfo({
      //   domain: 'http://promote.channel.bdhuoke.com/'
      // }, r => {
      //   this.signParams.IMEI = `设备类型${r.deviceType};操作系统:${r.OS};操作系统版本:${r.OSVersion};屏幕高:${r.screenHeight};屏幕宽:${r.screenWidth};当前使用的语言-国家:${r.language};联网类型:${r.netWork};横竖屏:${r.orientation};浏览器信息:${r.browserInfo};浏览器指纹:${r.fingerprint};用户代理:${r.userAgent};地理位置:${r.geoPosition};系统时间:${r.date};通用唯一标识:${r.UUID}`
      //   // 获取手势点击位置
      this.signParams.pixel_point = `X:${e.screenX};Y:${e.screenY}`;
      sign(this.signParams).then((res) => {
        if (res.code == 1) {
          window._agl && window._agl.push(["track", ["success", { t: 3 }]]);
          this.setKeyWord(res.data.id, this.$route.query.KeyWord);
          alert("注册成功,正在为您下载APP...");
        } else alert(res.msg);
      });
      // })
    },
    /* 跳转靓号 */ goYidalh() {
      lhcount();
      location.href = "http://yidalh.zhibiwl.com";
    },
    /* 前往单个列表 */ goSingleList(num) {
      this.signOverlay = true;
    },
    /* 前往广告位 */ goAd() {
      this.$router.push("/ad");
    },
    /* 前往资质办理 */ goCertificate() {
      this.$router.push("/certificate");
    },
    /* 下载APP */ downloadAPP() {
      if (this.isEnvironment == "dev") return false;
      if (isDevice() == "wx") this.rightTop = true;
      else if (isDevice() == "and")
        window.location.href = "http://39.106.208.234/azb/BDhuoke.apk";
      else
        window.location.href =
          "https://itunes.apple.com/cn/app/id1568041500?mt=8";
    },
    /* 切换tabs */ tabsChange(curr) {
      console.log(curr, "curr");
      if (this.isEnvironment == "dev") {
        curr += 7;
      }
      this.index = [];
      // switch (curr) {
      //   case 0:
      //     this.indexParams = { page: 1, exclude: [], num: 1 };
      //     this.queryrelGetResponses({ page: 1 });
      //     break;
      //   case 1:
      //     this.indexParams = { page: 1, exclude: [], num: 1 };
      //     this.queryrelDomainList({ page: 1 });
      //     break;
      //   case 2:
      //     this.indexParams = { page: 1, exclude: [], num: 1 };
      //     this.queryrelWebList({ page: 1 });
      //     break;
      // }
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
          // case 10:
          if (curr >= 7) {
            curr += 1;
          }
          this.indexParams = { page: 1, exclude: [], num: 1 };
          this.getResponses({ type: curr, page: 1 });
          break;
        case 10:
          this.indexParams = { page: 1, exclude: [], num: 1 };
          this.queryrelGetResponses({ page: 1 });
          break;
        case 11:
          this.indexParams = { page: 1, exclude: [], num: 1 };
          this.queryrelDomainList({ page: 1 });
          break;
        case 12:
          this.indexParams = { page: 1, exclude: [], num: 1 };
          this.queryrelWebList({ page: 1 });
          break;
      }
    },
    /* 分页 */ onLoad() {
      // switch (this.tbsCurr) {
      //   case 0:
      //     this.indexParams.page += 1;
      //     this.queryrelGetResponses({ page: this.indexParams.page });
      //     break;
      //   case 1:
      //     this.indexParams.page += 1;
      //     this.queryrelDomainList({ page: this.indexParams.page });
      //     break;
      //   case 2:
      //     this.indexParams.page += 1;
      //     this.queryrelWebList({ page: this.indexParams.page });
      //     break;
      // }
      this.tbsCurr += 7;
      switch (this.tbsCurr) {
        case 0:
          this.indexParams.page += 1;
          this.indexParams.exclude = this.index
            .map((item) => item.id)
            .join(",");
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
          let num = this.tbsCurr;
          if (this.tbsCurr >= 7) {
            num += 1;
          }
          this.indexParams.page += 1;
          this.getResponses({ page: this.indexParams.page, type: num });
          break;
        case 10:
          this.indexParams.page += 1;
          this.queryrelGetResponses({ page: this.indexParams.page });
          break;
        case 11:
          this.indexParams.page += 1;
          this.queryrelDomainList({ page: this.indexParams.page });
          break;
        case 12:
          this.indexParams.page += 1;
          this.queryrelWebList({ page: this.indexParams.page });
          break;
      }
    },
    /* 网站查询 */ queryrelWebList(params) {
      queryrelWebList(params).then((res) => {
        if (isNull(res.data)) {
          this.$notify({ type: "primary", message: "已经到底啦" });
          this.refreshLoading = false;
          this.listLoading = false;
          return false;
        }
        res.data.forEach((item) => {
          if (item.baiducount > 10000)
            item.baiducount = `${parseInt(item.baiducount / 10000)}万+`;
          if (item.flow > 10000)
            item.flow = `${parseInt(item.flow / 10000)}万+`;
          if (item.sitecount > 10000)
            item.sitecount = `${parseInt(item.sitecount / 10000)}万+`;
          this.index.push(item);
          this.refreshLoading = false;
          this.listLoading = false;
        });
      });
    },
    /* 域名查询 */ queryrelDomainList(params) {
      queryrelDomainList(params).then((res) => {
        if (isNull(res.data)) {
          this.$notify({ type: "primary", message: "已经到底啦" });
          this.refreshLoading = false;
          this.listLoading = false;
          return false;
        }
        res.data.forEach((item) => this.index.push(item));
        this.refreshLoading = false;
        this.listLoading = false;
        this.$refs.domain.separateList();
      });
    },
    /* 新媒体查询 */ queryrelGetResponses(params) {
      queryrelGetResponses(params).then((res) => {
        // res.data = [
        //   {
        //     title: '桐乡微生活微博帐号转让',
        //     category: '本地生活',
        //     certification_status: '未认证',
        //     fans_bias: '男女平衡',
        //     fans_num: 11300,
        //     grade_weibo: 1,
        //     platform: 2,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Weibo.png',
        //   },
        //   {
        //     title: '出11万粉三无母婴抖音号，点赞49w',
        //     category: '母婴亲子',
        //     certification_status: '未认证',
        //     fans_num: 118000,
        //     fans_bias: '女粉多',
        //     grade_weibo: 1,
        //     platform: 4,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Tiktok.png',
        //     thumb_up: 71000,
        //   },
        //   {
        //     title: '抖音三无未实名帅哥生活类',
        //     category: '搞笑段子',
        //     certification_status: '未认证',
        //     fans_num: 118000,
        //     fans_bias: '女粉多',
        //     grade_weibo: 1,
        //     platform: 4,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Tiktok.png',
        //     thumb_up: 71000,
        //   },
        //   {
        //     title: '快手图集壁纸号 无实名无违规',
        //     category: '搞笑段子',
        //     certification_status: '未认证',
        //     fans_num: 118000,
        //     fans_bias: '女粉多',
        //     grade_weibo: 1,
        //     platform: 1,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Wellquickly.png',
        //     thumb_up: 71000,
        //     fans_area: '全国',
        //   },
        //   {
        //     title: '知识资源',
        //     category: '新闻资讯',
        //     certification_status: '未认证',
        //     fans_num: 118000,
        //     fans_bias: '女粉多',
        //     grade_weibo: 1,
        //     platform: 1,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Wellquickly.png',
        //     thumb_up: 71000,
        //     fans_area: '全国',
        //   },
        //   {
        //     title: '1.6万粉丝三无快手号出售，非诚勿扰',
        //     category: '情感杂谈',
        //     certification_status: '未认证',
        //     fans_bias: '男女平衡',
        //     fans_num: 11300,
        //     grade_weibo: 1,
        //     platform: 1,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Weibo.png',
        //   },
        //   {
        //     title: '未认证9.1万美女类型-成年男粉带无违规高活跃度',
        //     category: '电影视频',
        //     certification_status: '未认证',
        //     fans_num: 118000,
        //     fans_bias: '男粉多',
        //     grade_weibo: 1,
        //     platform: 1,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Tiktok.png',
        //     thumb_up: 71000,
        //   },
        //   {
        //     title: '抖音三无未实名帅哥生活类',
        //     category: '搞笑段子',
        //     certification_status: '未认证',
        //     fans_num: 118000,
        //     fans_bias: '女粉多',
        //     grade_weibo: 1,
        //     platform: 4,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Tiktok.png',
        //     thumb_up: 71000,
        //   },
        //   {
        //     title: '3.6万粉王者号，男粉多，0违规',
        //     category: '游戏娱乐',
        //     certification_status: '未认证',
        //     fans_num: 118000,
        //     fans_bias: '男粉多',
        //     grade_weibo: 1,
        //     platform: 1,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Wellquickly.png',
        //     thumb_up: 71000,
        //     fans_area: '全国',
        //   },
        //   {
        //     title: '红包封面公众号出售',
        //     category: '其他分类',
        //     certification_status: '未认证',
        //     fans_num: 118000,
        //     fans_bias: '女粉多',
        //     grade_weibo: 1,
        //     platform: 3,
        //     price: '议价',
        //     url: 'https://asd.bdhuoke.com/uploads/logurl/Wellquickly.png',
        //     thumb_up: 71000,
        //     fans_area: '全国',
        //     wechat_account_type: '订阅号',
        //   },
        // ];
        if (isNull(res.data)) {
          this.$notify({ type: "primary", message: "已经到底啦" });
          this.refreshLoading = false;
          this.listLoading = false;
          return false;
        }
        res.data.forEach((item) => {
          if (item.fans_num > 10000)
            item.fans_num = `${parseInt(item.fans_num / 10000)}W`;
          if (item.platform == 4 && item.thumb_up > 10000)
            item.thumb_up = `${parseInt(item.thumb_up / 10000)}W`;
          item.title = item.title.replace(/出售/, "转让");
          item.title = item.title.replace(/卖/, "转让");
          item.title = item.title.replace(/出/, "转让");
          this.index.push(item);
        });
        this.refreshLoading = false;
        this.listLoading = false;
      });
    },
    /* 资源对接查询 */ getResponses(params) {
      getResponses(params).then((res) => {
        if (isNull(res.data)) {
          this.$notify({ type: "primary", message: "已经到底啦" });
          this.refreshLoading = false;
          this.listLoading = false;
          return false;
        }
        res.data.forEach((item) => {
          if (item.is_super == 1) item.name_color = "#B957FD";
          else if (item.is_vip == 1) item.name_color = "#F11F1F";
          else item.name_color = "#333";
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
      return "暂未开发";
    },
    /* 获取轮播 */ getPic() {
      getPic({ type: "banner" }).then((res) => (this.pic = res));
    },
    /* 推荐接口 */ comprehensiveIndex() {
      comprehensiveIndex(this.indexParams).then((res) => {
        this.indexParams.num = res.msg;
        res.data.is_rec1.forEach((item) => {
          if (item.is_super == 1) item.name_color = "#B957FD";
          else if (item.is_vip == 1) item.name_color = "#F11F1F";
          else item.name_color = "#333";
          this.index.push(item);
        });
        res.data.is_rec0.forEach((item) => {
          if (item.is_super == 1) item.name_color = "#B957FD";
          else if (item.is_vip == 1) item.name_color = "#F11F1F";
          this.index.push(item);
        });
        this.refreshLoading = false;
        this.listLoading = false;
      });
    },
    /* 初始化首页参数 */ initIndexParams() {
      this.indexParams.time = isNull(localStorage.getItem("time"))
        ? "0000-00-00 00:00"
        : localStorage.getItem("time");
    },
  },
  mounted() {
    // axios.post('http://nad.bdhuoke.com/web_v1/Other/web_sign_log', { log: window.location.href });
    /* 初始化首页参数 */ this.initIndexParams();
    // /* 推荐接口 */ this.comprehensiveIndex();
    this.tabsChange(1);
    /* 获取轮播 */ this.getPic();
    // 随机1-3
    let num = Math.floor(Math.random() * 3);
    console.log(num);
    this.imgSrc = `http://39.106.208.234/pic/img_/gfxmtj${num + 1}.webp`;
  },
  watch: {
    buttonShow() {
      if (!this.buttonShow) this.downloadAPP();
    },
  },
  components: { Docking, Media, Domain, Website },
};
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>
