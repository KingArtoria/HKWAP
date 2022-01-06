<template>
  <div>
    <div class="website">
      <div class="website_title">{{ item.title }}</div>
      <div class="website_price">￥{{ item.price }}</div>
      <div class="website_tag">
        <div class="website_tag_item">
          <div class="website_tag_item_value">{{ item.baidupcbr }}</div>
          <div class="website_tag_item_key">百度权重</div>
        </div>
        <div class="website_tag_item">
          <div class="website_tag_item_value">{{ item.baiducount }}</div>
          <div class="website_tag_item_key">百度收录</div>
        </div>
        <div class="website_tag_item">
          <div class="website_tag_item_value">{{ item.flow }}</div>
          <div class="website_tag_item_key">网站流量</div>
        </div>
        <div class="website_tag_item">
          <div class="website_tag_item_value">{{ item.program }}</div>
          <div class="website_tag_item_key">建站程序</div>
        </div>
        <div class="website_tag_item">
          <div class="website_tag_item_value">{{ item.replace }}</div>
          <div class="website_tag_item_key">内容更新</div>
        </div>
        <div class="website_tag_item">
          <div class="website_tag_item_value">{{ item.sitebr }}</div>
          <div class="website_tag_item_key">搜狗权重/收录</div>
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
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
