<template>
  <div>
    <img src="http://39.106.208.234/pic/img_/guanggaozz@2x.png" class="icon" />
    <van-form @submit="setAdverti">
      <van-field v-model="setAdvertiParams.company" label="企业名称" placeholder="请输入企业名称" :rules="[{ required: true, message: '请填写企业名称' }]" />
      <van-field v-model="setAdvertiParams.contact" label="联系人" placeholder="请输入联系人" :rules="[{ required: true, message: '请填写联系人' }]" />
      <van-field v-model="setAdvertiParams.mobile" label="联系方式" placeholder="请输入联系方式" :rules="[{ required: true, message: '请填写联系方式' }]" />
      <van-field readonly clickable :value="setAdvertiParams.showPlace_id" label="投放位置" placeholder="点击选择投放位置" @click="showPlace_id = true" />
      <van-field readonly clickable :value="setAdvertiParams.showCycle_id" label="投放周期" placeholder="点击选择投放周期" @click="showCycle_id = true" />
      <van-field v-model="setAdvertiParams.budget" label="预算(元)" placeholder="请输入预算" :rules="[{ required: true, message: '请填写预算' }]" type="number" />
      <van-button round block type="info" native-type="submit" class="btn">提交</van-button>
      <div class="text">提交完成后请耐心等待客服与您联系</div>
    </van-form>
    <van-popup v-model="showPlace_id" position="bottom">
      <van-picker show-toolbar :columns="place" @confirm="placeIdConfirm" @cancel="showPlace_id = false" value-key="label" />
    </van-popup>
    <van-popup v-model="showCycle_id" position="bottom">
      <van-picker show-toolbar :columns="cycle" @confirm="cycleIdConfirm" @cancel="showCycle_id = false" value-key="label" />
    </van-popup>
  </div>
</template>

<script>
import { setAdverti, getPlace, getCycle } from '@utils/api';
export default {
  data() {
    return {
      /* 添加广告申请参数 */ setAdvertiParams: {},
      /* 投放位置选择器 */ showPlace_id: false,
      /* 广告位置 */ place: [],
      /* 投放周期选择器 */ showCycle_id: false,
      /* 投放周期 */ cycle: [],
    };
  },
  methods: {
    /* 选中投放周期 */ cycleIdConfirm(e) {
      this.setAdvertiParams.showCycle_id = e.label;
      this.setAdvertiParams.cycle_id = e.value;
      this.showCycle_id = false;
    },
    /* 获取投放周期 */ getCycle() {
      getCycle().then(res => (this.cycle = res.data));
    },
    /* 选中投放位置 */ placeIdConfirm(e) {
      this.setAdvertiParams.showPlace_id = e.label;
      this.setAdvertiParams.place_id = e.value;
      this.showPlace_id = false;
    },
    /* 获取投放位置 */ getPlace() {
      getPlace().then(res => (this.place = res.data));
    },
    /* 广告申请 */ setAdverti() {
      setAdverti(this.setAdvertiParams).then(res => {
        if (res.code != 1) {
          this.$notify({ type: 'danger', message: res.msg });
          return false;
        }
        this.setAdvertiParams = {};
        this.$notify({ type: 'success', message: '提交成功,客服会尽快与您联系' });
      });
    },
  },
  mounted() {
    /* 获取投放周期 */ this.getCycle();
    /* 获取广告位置 */ this.getPlace();
  },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
