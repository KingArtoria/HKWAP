<template>
  <div style="padding-bottom: 5rem">
    <div class="head">
      <div class="head_title">
        <img src="http://39.106.208.234/pic/img_/kuaishou@2x.png" class="head_title_icon" v-if="data.platform == 1" />
        <img src="http://39.106.208.234/pic/img_/weibo@2x.png" class="head_title_icon" v-if="data.platform == 2" />
        <img src="http://39.106.208.234/pic/img_/weixin@2x.png" class="head_title_icon" v-if="data.platform == 3" />
        <img src="http://39.106.208.234/pic/img_/douyin@2x.png" class="head_title_icon" v-if="data.platform == 4" />
        <img src="http://39.106.208.234/pic/img_/xiaohongshu@2x.png" class="head_title_icon" v-if="data.platform == 5" />
        <div class="head_title_text">{{ data.title }}</div>
      </div>
      <div class="head_text">卖家描述 : {{ data.describe }}</div>
    </div>
    <div class="price">
      <div class="price_top">
        <div class="price_top_key">出售价格：</div>
        <div class="price_top_value">￥{{ data.price }}</div>
        <div class="price_top_tag">请联系经纪人以确定最终报价</div>
      </div>
      <div class="price_text">郑重承诺：账号数据透明，描述不符全额退款！</div>
    </div>
    <div class="info">
      <div class="info_title">
        <div class="info_title_line" />
        <div class="info_title_text">账号信息</div>
      </div>
      <div class="info_list">
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.fans_bias }}</div>
          <div class="info_list_item_kay">粉丝偏向</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.fans_area }}</div>
          <div class="info_list_item_kay">粉丝区域</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.category }}</div>
          <div class="info_list_item_kay">所属类目</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.certification_status }}</div>
          <div class="info_list_item_kay">认证状态</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.fans_num }}</div>
          <div class="info_list_item_kay">粉丝数量</div>
        </div>
        <div class="info_list_item" v-if="data.platform == 2">
          <div class="info_list_item_value">{{ data.grade_weibo }}</div>
          <div class="info_list_item_kay">微博等级</div>
        </div>
        <div class="info_list_item" v-if="data.platform == 3">
          <div class="info_list_item_value">{{ data.wechat_account_type }}</div>
          <div class="info_list_item_kay">账号类型</div>
        </div>
        <div class="info_list_item" v-if="data.platform == 3">
          <div class="info_list_item_value">{{ data.wechat_message }}</div>
          <div class="info_list_item_kay">留言功能</div>
        </div>
        <div class="info_list_item" v-if="data.platform == 3">
          <div class="info_list_item_value">{{ data.wechat_reading }}</div>
          <div class="info_list_item_kay">头条阅读数</div>
        </div>
        <div class="info_list_item" v-if="data.platform == 4">
          <div class="info_list_item_value">{{ data.thumb_up }}</div>
          <div class="info_list_item_kay">点赞量</div>
        </div>
        <div class="info_list_item" v-if="data.platform == 5">
          <div class="info_list_item_value">{{ data.redbook_collection }}</div>
          <div class="info_list_item_kay">获赞及收藏量</div>
        </div>
        <div class="info_list_item" v-if="data.platform == 5">
          <div class="info_list_item_value">{{ data.grade }}</div>
          <div class="info_list_item_kay">红薯等级</div>
        </div>
        <div class="info_list_item" v-if="data.platform == 5">
          <div class="info_list_item_value">{{ data.redbook_brand_partner }}</div>
          <div class="info_list_item_kay">品牌合作人</div>
        </div>
        <div class="info_list_item" v-if="data.platform == 5">
          <div class="info_list_item_value">{{ data.redbook_penalty }}</div>
          <div class="info_list_item_kay">有无处罚</div>
        </div>
      </div>
    </div>
    <div class="info" v-if="data.data_img == []">
      <div class="info_title">
        <div class="info_title_line" />
        <div class="info_title_text">数据图</div>
      </div>
      <div class="info_imgs" v-for="(item, index) in data.data_img" :key="index">
        <van-image :src="item" />
      </div>
    </div>
    <div class="info">
      <div class="info_title">
        <div class="info_title_line" />
        <div class="info_title_text">交易流程</div>
      </div>
      <div class="info_process">
        <div class="info_process_item">
          <img src="http://39.106.208.234/pic/img_/xuanzezh@2x.png" class="info_process_item_icon" />
          <div class="info_process_item_text">
            <div class="info_process_item_text_num">1</div>
            <div class="info_process_item_text_title">选择所需类型账号</div>
          </div>
        </div>
        <div class="info_process_item">
          <img src="http://39.106.208.234/pic/img_/lianxkfzx@2x.png" class="info_process_item_icon" />
          <div class="info_process_item_text">
            <div class="info_process_item_text_num">2</div>
            <div class="info_process_item_text_title">咨询客服了解详情</div>
          </div>
        </div>
        <div class="info_process_item">
          <img src="http://39.106.208.234/pic/img_/qianht@2x.png" class="info_process_item_icon" />
          <div class="info_process_item_text">
            <div class="info_process_item_text_num">3</div>
            <div class="info_process_item_text_title">下单转接账号并签署合同</div>
          </div>
        </div>
        <div class="info_process_item">
          <img src="http://39.106.208.234/pic/img_/jiaoyiwc@2x.png" class="info_process_item_icon" />
          <div class="info_process_item_text">
            <div class="info_process_item_text_num">4</div>
            <div class="info_process_item_text_title">交易完成</div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div class="bottom_icon">
        <img src="http://39.106.208.234/pic/img_/shoucang@2x.png" class="bottom_icon_img" />
        <div class="bottom_icon_text">收藏</div>
      </div>
      <div class="bottom_phone">客服热线：18511169119</div>
    </div>
  </div>
</template>

<script>
import { getMediaInfo } from '@utils/api';
export default {
  data() {
    return {
      /* 新媒体参数 */ params: {},
      /* 新媒体 */ data: { data_img: [] },
    };
  },
  methods: {
    /* 初始化新媒体参数 */ initMediaInfoParams() {
      console.log(this.$route.params);
      this.params = { platform: this.$route.params.platform, fid: this.$route.params.id };
    },
    /* 新媒体详细 */ getMediaInfo() {
      getMediaInfo(this.params).then(res => {
        res.data.price = res.data.price >= 10000 ? `${parseInt(res.data.price / 10000)}W+` : res.data.price;
        res.data.fans_num = res.data.fans_num >= 10000 ? `${parseInt(res.data.fans_num / 10000)}W+` : res.data.fans_num;
        if (res.data.data_img != null) res.data.data_img = res.data.data_img.map(item => (item = `https://asd.bdhuoke.com${item}`));
        if (res.data.platform == 3) res.data.wechat_reading = res.data.wechat_reading >= 10000 ? `${parseInt(res.data.wechat_reading / 10000)}W+` : res.data.wechat_reading;
        if (res.data.platform == 4) res.data.thumb_up = res.data.thumb_up >= 10000 ? `${parseInt(res.data.thumb_up / 10000)}W+` : res.data.thumb_up;
        if (res.data.platform == 5) res.data.redbook_collection = res.data.redbook_collection >= 10000 ? `${parseInt(res.data.redbook_collection / 10000)}W+` : res.data.redbook_collection;
        this.data = res.data;
      });
    },
  },
  mounted() {
    /* 初始化新媒体参数 */ this.initMediaInfoParams();
    /* 新媒体详细 */ this.getMediaInfo();
  },
};
</script>

<style lang="scss" scoped>
@import './media.scss';
</style>
