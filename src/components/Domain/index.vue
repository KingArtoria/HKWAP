<template>
  <div>
    <div class="domain">
      <div class="domain_item">
        <div class="domain_item_data" v-for="(item, index) in leftList" :key="index" @click="goDomain(item.id)">
          <div class="domain_item_data_title">{{ item.url }}</div>
          <div class="domain_item_data_price">￥{{ item.price }}</div>
          <div class="domain_item_data_tag">
            <div class="domain_item_data_tag_item" v-for="(item, index) in item.describe" :key="index">{{ item }}</div>
          </div>
        </div>
      </div>
      <div class="domain_item">
        <div class="domain_item_data" v-for="(item, index) in rightList" :key="index" @click="goDomain(item.id)">
          <div class="domain_item_data_title">{{ item.url }}</div>
          <div class="domain_item_data_price">￥{{ item.price }}</div>
          <div class="domain_item_data_tag">
            <div class="domain_item_data_tag_item" v-for="(item, index) in item.describe" :key="index">{{ item }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    dataArray: { type: Array },
  },
  data() {
    return {
      /* 左列表 */ leftList: [],
      /* 右列表 */ rightList: [],
    };
  },
  methods: {
    /* 前往域名详细 */ goDomain(id) {
      this.$router.push(`/info/domain/${id}`);
    },
    /* 分离数组 */ separateList() {
      this.leftList = this.dataArray.filter(item => item.id % 2 != 0);
      this.rightList = this.dataArray.filter(item => item.id % 2 == 0);
    },
  },
  mounted() {
    /* 分离数组 */ this.separateList();
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
