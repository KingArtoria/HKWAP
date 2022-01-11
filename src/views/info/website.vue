<template>
  <div style="padding-bottom: 5rem">
    <div class="head">
      <div class="head_title">{{ data.title }}</div>
      <div class="head_text">卖家描述：{{ data.describe }}</div>
    </div>
    <div class="price">
      <div class="price_top">
        <div class="price_top_text">出售价格：</div>
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
          <div class="info_list_item_value">{{ data.baidupcbr }}</div>
          <div class="info_list_item_key">百度权重</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.baiducount }}</div>
          <div class="info_list_item_key">百度收录</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.flow }}</div>
          <div class="info_list_item_key">网站流量</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.program }}</div>
          <div class="info_list_item_key">建站程序</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.replace }}</div>
          <div class="info_list_item_key">内容更新</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.sitebr }}/{{ data.sitecount }}</div>
          <div class="info_list_item_key">搜狗权重/收录</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">联系经纪人</div>
          <div class="info_list_item_key">网站地址</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.turn_server }}</div>
          <div class="info_list_item_key">转服务器</div>
        </div>
        <div class="info_list_item">
          <div class="info_list_item_value">{{ data.merit }}</div>
          <div class="info_list_item_key">网站卖点</div>
        </div>
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
import { getWebInfo } from '@utils/api';
export default {
  data() {
    return {
      /* 网站详情 */ data: {},
    };
  },
  methods: {
    /* 网站详情查询 */ getWebInfo() {
      getWebInfo({ fid: this.$route.params.id }).then(res => {
        res.data.baiducount = res.data.baiducount > 10000 ? `${parseInt(res.data.baiducount / 10000)}W+` : res.data.baiducount;
        res.data.flow = res.data.flow > 10000 ? `${parseInt(res.data.flow / 10000)}W+` : res.data.flow;
        res.data.sitecount = res.data.sitecount > 10000 ? `${parseInt(res.data.sitecount / 10000)}W+` : res.data.sitecount;
        this.data = res.data;
      });
    },
  },
  mounted() {
    /* 网站详情查询 */ this.getWebInfo();
  },
};
</script>

<style lang="scss" scoped>
@import './website.scss';
</style>
