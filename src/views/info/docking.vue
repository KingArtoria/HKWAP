<template>
  <div style="padding-bottom: 12.352rem">
    <div class="top">
      <div class="top_title">{{ obtainInfo.title }}</div>
      <div class="top_time">{{ obtainInfo.addtime }}</div>
    </div>
    <div class="info">
      <img :src="`https://admin.bdhuoke.com${obtainInfo.head}`" class="info_tx" v-if="obtainInfo.head" />
      <div class="info_right">
        <div class="info_right_top">
          <div class="info_right_top_name">{{ obtainInfo.nick_name }}</div>
          <div class="info_right_top_text">{{ obtainInfo.position }}</div>
        </div>
        <div class="info_right_bottom">{{ obtainInfo.company }}</div>
      </div>
      <div class="info_btn" @click="downloadAPP">
        <img src="http://39.106.208.234/pic/img_/haoyou.png" class="info_btn_icon" />
        <div class="info_btn_title">好友</div>
      </div>
    </div>
    <div class="tag" v-if="obtainInfo.platform == 1" @click="downloadAPP">
      <img src="http://39.106.208.234/pic/img_/baozhang@2x.png" class="tag_icon" />
      <div class="tag_text">已加入平台交易</div>
      <div class="tag_title">交易双方资金安全保障</div>
    </div>
    <div class="list" v-if="obtainInfo.type == 1 || obtainInfo.type == 2">
      <div class="list_title">
        <div class="list_title_line" />
        <div class="list_title_text">我能提供</div>
      </div>
      <div class="list_value">
        <div class="list_value_item">结算方式：{{ obtainInfo.settmod_id }}</div>
        <div class="list_value_item">结算单价：{{ obtainInfo.price == '0.00' ? '可议' : obtainInfo.price }}</div>
        <div class="list_value_item">结算周期：{{ obtainInfo.settcycle_id }}</div>
        <div class="list_value_item">推广方式：{{ obtainInfo.promotion }}</div>
        <div class="list_value_item">合作类型：{{ obtainInfo.cooptype_id }}</div>
        <div class="list_value_item">
          合作地区：
          <div class="list_value_item_value" v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="text" v-if="obtainInfo.type == 1 || obtainInfo.type == 2">
      <div class="text_title">
        <div class="text_title_line" />
        <div class="text_title_text">资源详情</div>
      </div>
      <div class="text_content">{{ obtainInfo.assessment }}</div>
    </div>
    <div class="list" v-if="obtainInfo.type == 3">
      <div class="list_title">
        <div class="list_title_line" />
        <div class="list_title_text">我能提供</div>
      </div>
      <div class="list_value">
        <div class="list_value_item">产品类型：{{ obtainInfo.product }}</div>
        <div class="list_value_item">资源类型：{{ obtainInfo.source }}</div>
        <div class="list_value_item">客单价：{{ obtainInfo.price == '0.00' ? '可议' : obtainInfo.price }}</div>
        <div class="list_value_item">产品名称：{{ obtainInfo.product_name }}</div>
        <div class="list_value_item">一件代发：{{ obtainInfo.issuing }}</div>
        <div class="list_value_item">相关资质：{{ obtainInfo.supplement }}</div>
        <div class="list_value_item">
          合作地区：
          <div class="list_value_item_value" v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="text" v-if="obtainInfo.type == 3">
      <div class="text_title">
        <div class="text_title_line" />
        <div class="text_title_text">产品优势</div>
      </div>
      <div class="text_content">{{ obtainInfo.product_advantage }}</div>
    </div>
    <div class="text" v-if="obtainInfo.type == 3">
      <div class="text_title">
        <div class="text_title_line" />
        <div class="text_title_text">产品名称</div>
      </div>
      <div class="text_content">{{ obtainInfo.product_name }}</div>
    </div>
    <div class="list" v-if="obtainInfo.type == 4">
      <div class="list_title">
        <div class="list_title_line" />
        <div class="list_title_text">我能提供</div>
      </div>
      <div class="list_value">
        <div class="list_value_item">类型：{{ obtainInfo.source }}</div>
        <div class="list_value_item">产品类型：{{ obtainInfo.product }}</div>
        <div class="list_value_item">结算周期：{{ obtainInfo.settcycle_id }}</div>
        <div class="list_value_item">销货能力：{{ obtainInfo.assessment }}</div>
        <div class="list_value_item">合作模式：{{ obtainInfo.alliance }}</div>
        <div class="list_value_item">一件代发：{{ obtainInfo.issuing }}</div>
        <div class="list_value_item">其他补充：{{ obtainInfo.supplement }}</div>
        <div class="list_value_item">
          合作地区：
          <div class="list_value_item_value" v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="text" v-if="obtainInfo.type == 4">
      <div class="text_title">
        <div class="text_title_line" />
        <div class="text_title_text">渠道简介</div>
      </div>
      <div class="text_content">{{ obtainInfo.introduce }}</div>
    </div>
    <div class="text" v-if="obtainInfo.type == 4">
      <div class="text_title">
        <div class="text_title_line" />
        <div class="text_title_text">产品要求</div>
      </div>
      <div class="text_content">{{ obtainInfo.product_advantage }}</div>
    </div>
    <div class="list" v-if="obtainInfo.type == 5">
      <div class="list_title">
        <div class="list_title_line" />
        <div class="list_title_text">我能提供</div>
      </div>
      <div class="list_value">
        <div class="list_value_item">提供类型：{{ obtainInfo.source }}</div>
        <div class="list_value_item">需求类型：{{ obtainInfo.comprehensive }}</div>
        <div class="list_value_item">合作要求：{{ obtainInfo.assessment }}</div>
        <div class="list_value_item">其他补充：{{ obtainInfo.supplement }}</div>
        <div class="list_value_item">
          合作地区：
          <div class="list_value_item_value" v-for="(item, index) in obtainInfo.area" :key="index">{{ item }}</div>
        </div>
      </div>
    </div>
    <div class="text" v-if="obtainInfo.type == 5">
      <div class="text_title">
        <div class="text_title_line" />
        <div class="text_title_text">提供的资源</div>
      </div>
      <div class="text_content">{{ obtainInfo.product_advantage }}</div>
    </div>
    <div class="text" v-if="obtainInfo.type == 5">
      <div class="text_title">
        <div class="text_title_line" />
        <div class="text_title_text">需求的资源</div>
      </div>
      <div class="text_content">{{ obtainInfo.info }}</div>
    </div>
    <div class="bottom">
      <div class="bottom_icon">
        <img src="http://39.106.208.234/pic/img_/shoucang@2x.png" class="bottom_icon_img" />
        <div class="bottom_icon_text">收藏</div>
      </div>
      <div class="bottom_btn">点击查看联系方式</div>
    </div>
  </div>
</template>

<script>
import { getObtainInfo } from '@utils/api';
export default {
  data() {
    return {
      /* 资源详细 */ obtainInfo: {},
    };
  },
  methods: {
    /* 下载APP */ downloadAPP() {
      window.location.href = 'http://39.106.208.234/azb/BDhuoke.apk';
    },
    /* 资源详细 */ getObtainInfo() {
      getObtainInfo({ fid: this.$route.params.id }).then(res => {
        res.data[0].area = res.data[0].area.split(',');
        this.obtainInfo = res.data[0];
      });
    },
  },
  mounted() {
    /* 资源详细 */ this.getObtainInfo();
  },
};
</script>

<style lang="scss" scoped>
@import './docking.scss';
</style>
