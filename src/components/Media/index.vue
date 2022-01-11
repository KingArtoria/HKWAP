<template>
  <div>
    <div class="media" @click="goMedia(item.platform, item.id)">
      <img src="http://39.106.208.234/pic/img_/kuaishou@2x.png" class="media_icon" v-if="item.platform == 1" />
      <img src="http://39.106.208.234/pic/img_/weibo@2x.png" class="media_icon" v-if="item.platform == 2" />
      <img src="http://39.106.208.234/pic/img_/weixin@2x.png" class="media_icon" v-if="item.platform == 3" />
      <img src="http://39.106.208.234/pic/img_/douyin@2x.png" class="media_icon" v-if="item.platform == 4" />
      <img src="http://39.106.208.234/pic/img_/xiaohongshu@2x.png" class="media_icon" v-if="item.platform == 5" />
      <div class="media_title">{{ item.title }}</div>
      <div class="media_text">所属类目：{{ item.category }}</div>
      <div class="media_price">￥{{ item.price }}</div>
      <div class="media_bottom">
        <div class="media_bottom_item">
          <div class="media_bottom_item_value">{{ item.certification_status }}</div>
          <div class="media_bottom_item_key">认证状态</div>
        </div>
        <div class="media_bottom_item">
          <div class="media_bottom_item_value">{{ item.fans_num }}</div>
          <div class="media_bottom_item_key">粉丝数量</div>
        </div>
        <div class="media_bottom_item" v-if="item.platform != 5">
          <div class="media_bottom_item_value">{{ item.fans_bias }}</div>
          <div class="media_bottom_item_key">粉丝偏向</div>
        </div>
        <div class="media_bottom_item" v-if="item.platform == 1">
          <div class="media_bottom_item_value">{{ item.fans_area }}</div>
          <div class="media_bottom_item_key">粉丝区域</div>
        </div>
        <div class="media_bottom_item" v-if="item.platform == 2">
          <div class="media_bottom_item_value">{{ item.grade_weibo }}级</div>
          <div class="media_bottom_item_key">微博等级</div>
        </div>
        <div class="media_bottom_item" v-if="item.platform == 3">
          <div class="media_bottom_item_value">{{ item.wechat_account_type }}级</div>
          <div class="media_bottom_item_key">账号类型</div>
        </div>
        <div class="media_bottom_item" v-if="item.platform == 4">
          <div class="media_bottom_item_value">{{ item.thumb_up }}</div>
          <div class="media_bottom_item_key">点赞量</div>
        </div>
        <div class="media_bottom_item" v-if="item.platform == 5">
          <div class="media_bottom_item_value">{{ item.grade }}</div>
          <div class="media_bottom_item_key">红薯等级</div>
        </div>
        <div class="media_bottom_item" v-if="item.platform == 5">
          <div class="media_bottom_item_value">{{ item.redbook_brand_partner }}</div>
          <div class="media_bottom_item_key">品牌合伙人</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    item: { type: Object },
  },
  data() {
    return {};
  },
  methods: {
    /* 前往详细 */ goMedia(platform, id) {
      this.$router.push(`/info/media/${platform}/${id}`);
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
