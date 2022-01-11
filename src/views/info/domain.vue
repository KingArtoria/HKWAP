<template>
  <div style="padding-bottom: 5rem">
    <div class="head">
      <div class="head_title">{{ data.url }}</div>
      <div class="head_text">域名描述：{{ data.describe }}</div>
    </div>
    <div class="price">
      <div class="price_top">
        <div class="price_top_text">出售价格：</div>
        <div class="price_top_num">￥{{ data.price }}</div>
        <div class="price_top_tag">请联系经纪人以确定最终报价</div>
      </div>
      <div class="price_text">郑重承诺：账号数据透明，描述不符全额退款！</div>
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
import { getDomainInfo } from '@utils/api';
export default {
  data() {
    return {
      /* 域名查询详情 */ data: {},
    };
  },
  methods: {
    /* 域名查询详情 */ getDomainInfo() {
      getDomainInfo({ fid: this.$route.params.id }).then(res => {
        res.data.price = res.data.price.replace(/,/g, '');
        res.data.price = res.data.price >= 10000 ? `${parseInt(res.data.price / 10000)}W+` : res.data.price;
        this.data = res.data;
      });
    },
  },
  mounted() {
    /* 域名查询详情 */ this.getDomainInfo();
  },
};
</script>

<style lang="scss" scoped>
@import './domain.scss';
</style>