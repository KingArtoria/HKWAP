<template>
  <div>
    <div class="docking" @click="goInfo(item.id)">
      <div class="docking_line" v-if="item.supertoptime > 0" />
      <div class="docking_super" v-if="item.supertoptime > 0">
        <img src="http://39.106.208.234/pic/img_/cjzd.png" class="docking_super_icon" />
      </div>
      <img src="@assets/sy_zd.png" class="docking_top" v-else-if="item.toptime > 0 || item.above_time > 0" />
      <div class="docking_info">
        <img :src="`https://admin.bdhuoke.com${item.head}`" class="docking_info_tx" v-if="item.head" />
        <div class="docking_info_name" :style="`color:${item.name_color}`">{{ item.nick_name }}</div>
        <div class="docking_info_position">| 职位</div>
        <img src="http://39.106.208.234/pic/img_/svip.png" class="docking_info_svip" v-if="item.is_super == 1" />
        <img src="http://39.106.208.234/pic/img_/vip_l@2x.png" class="docking_info_vip" v-else-if="item.is_vip == 1" />
      </div>
      <div class="docking_title">{{ item.title }}</div>
      <div class="docking_text">
        <div class="docking_text_item">{{ item.addtime }}</div>
        <div class="docking_text_item">{{ item.company }}</div>
      </div>
      <div class="docking_bottom">
        <div class="docking_bottom_tag">
          <div class="docking_bottom_tag_item" v-if="item.type == 1 || item.type == 2 || item.type == 4">{{ item.settcycle_id }}</div>
          <div class="docking_bottom_tag_item" v-if="item.type == 1 || item.type == 2">{{ item.promotion }}</div>
          <div class="docking_bottom_tag_item" v-if="item.type == 1 || item.type == 2">结算方式：{{ item.settmod_id }}</div>
          <div class="docking_bottom_tag_item" v-if="item.type == 3 || item.type == 4 || item.type == 7 || item.type == 8 || item.type == 9 || item.type == 10">{{ item.product }}</div>
          <div class="docking_bottom_tag_item" v-if="item.type == 3 || item.type == 4">{{ item.source }}</div>
          <div class="docking_bottom_tag_item" v-if="item.type == 5 || item.type == 6">提供：{{ item.source }}</div>
          <div class="docking_bottom_tag_item" v-if="item.type == 5 || item.type == 6">需求：{{ item.comprehensive }}</div>
          <div class="docking_bottom_tag_item" v-if="item.type == 6">用户量：{{ item.user_number }}</div>
          <div class="docking_bottom_tag_item" v-if="item.type == 7 || item.type == 9">{{ item.comprehensive == 0 ? '议价' : item.comprehensive }}</div>
          <div class="docking_bottom_tag_item" v-if="item.type == 8">曝光：{{ item.user_number }}</div>
        </div>
        <div class="docking_bottom_ad" v-if="item.advertisement_time > 0">广告</div>
        <div class="docking_bottom_type" v-if="item.type == 1">广告甲方</div>
        <div class="docking_bottom_type" v-if="item.type == 2">流量乙方</div>
        <div class="docking_bottom_type" v-if="item.type == 3">优质货源</div>
        <div class="docking_bottom_type" v-if="item.type == 4">销售渠道</div>
        <div class="docking_bottom_type" v-if="item.type == 5">资源互换</div>
        <div class="docking_bottom_type" v-if="item.type == 6">流量互换</div>
        <div class="docking_bottom_type" v-if="item.type == 7">招商加盟</div>
        <div class="docking_bottom_type" v-if="item.type == 8">线下广告</div>
        <div class="docking_bottom_type" v-if="item.type == 9">线下场地</div>
        <div class="docking_bottom_type" v-if="item.type == 10">免费福利</div>
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
    /* 前往资源对接详页 */ goInfo(id) {
      this.$emit('goInfo')
    },
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
