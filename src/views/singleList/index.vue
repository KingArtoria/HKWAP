<template>
  <div>
    <van-pull-refresh v-model="refreshLoading" @refresh="onRefresh">
      <van-list v-model="listLoading" finished-text="没有更多了" @load="onLoad" :finished="finished" v-if="listParams.type < 11">
        <Docking v-for="(item, index) in list" :key="index" :item="item" />
      </van-list>
      <van-list v-model="listLoading" finished-text="没有更多了" @load="onLoad" :finished="finished" v-if="listParams.type == 11">
        <Media v-for="(item, index) in list" :key="index" :item="item" />
      </van-list>
      <van-list v-model="listLoading" finished-text="没有更多了" @load="onLoad" :finished="finished" v-if="listParams.type == 12">
        <Website v-for="(item, index) in list" :key="index" :item="item" />
      </van-list>
      <van-list v-model="listLoading" finished-text="没有更多了" @load="onLoad" :finished="finished" v-if="listParams.type == 13">
        <Domain :dataArray="list" ref="domain" />
      </van-list>
    </van-pull-refresh>
  </div>
</template>

<script>
import { getResponses, queryrelGetResponses, queryrelWebList, queryrelDomainList } from '@utils/api';
import { isNull } from '@utils/utils';
import Docking from '@components/Docking/index';
import Media from '@components/Media/index';
import Website from '@components/Website/index';
import Domain from '@components/Domain/index';
export default {
  data() {
    return {
      /* 下拉刷新加载 */ refreshLoading: false,
      /* 分页加载 */ listLoading: false,
      /* 列表参数 */ listParams: { page: 1 },
      /* 列表 */ list: [],
      /* 是否已经加载完成 */ finished: false,
    };
  },
  methods: {
    /* 域名查询 */ queryrelDomainList() {
      queryrelDomainList().then(res => {
        if (isNull(res.data)) {
          this.finished = true;
          return false;
        }
        res.data.forEach(item => this.list.push(item));
        this.refreshLoading = false;
        this.listLoading = false;
      });
    },
    /* 网站查询 */ queryrelWebList() {
      queryrelWebList(this.listParams).then(res => {
        if (isNull(res.data)) {
          this.finished = true;
          return false;
        }
        res.data.forEach(item => {
          if (item.baiducount > 10000) item.baiducount = `${parseInt(item.baiducount / 10000)}万+`;
          if (item.flow > 10000) item.flow = `${parseInt(item.flow / 10000)}万+`;
          if (item.sitecount > 10000) item.sitecount = `${parseInt(item.sitecount / 10000)}万+`;
          this.list.push(item);
          this.refreshLoading = false;
          this.listLoading = false;
        });
      });
    },
    /* 获取新媒体转让 */ queryrelGetResponses() {
      queryrelGetResponses(this.listParams).then(res => {
        if (isNull(res.data)) {
          this.finished = true;
          return false;
        }
        res.data.forEach(item => {
          if (item.fans_num > 10000) item.fans_num = `${parseInt(item.fans_num / 10000)}W`;
          if (item.platform == 4 && item.thumb_up > 10000) item.thumb_up = `${parseInt(item.thumb_up / 10000)}W`;
          this.list.push(item);
        });
        this.refreshLoading = false;
        this.listLoading = false;
      });
    },
    /* 初始化列表参数 */ initListParams() {
      this.listParams.type = this.$route.params.type;
      this.$forceUpdate();
    },
    /* 获取资源对接 */ getResponses() {
      getResponses(this.listParams).then(res => {
        if (isNull(res.data)) {
          this.finished = true;
          return false;
        }
        res.data.forEach(item => {
          if (item.is_super == 1) item.name_color = '#B957FD';
          else if (item.is_vip == 1) item.name_color = '#F11F1F';
          else item.name_color = '#333';
          this.list.push(item);
        });
        this.refreshLoading = false;
        this.listLoading = false;
      });
    },
    /* 下拉刷新 */ onRefresh() {
      this.listParams = { page: 1, type: this.$route.params.type };
      this.getList();
    },
    /* 分页 */ onLoad() {
      this.listParams.page += 1;
      this.getList();
      if (this.listParams.type == 13) this.$refs.domain.separateList();
    },
    /* 获取列表 */ getList() {
      if (this.$route.params.type < 11) this.getResponses();
      else if (this.$route.params.type == 11) this.queryrelGetResponses();
      else if (this.$route.params.type == 12) this.queryrelWebList();
      else if (this.$route.params.type == 13) this.queryrelDomainList();
    },
  },
  mounted() {
    /* 初始化列表参数 */ this.initListParams();
    /* 获取列表 */ this.getList();
  },
  components: { Docking, Media, Website, Domain },
};
</script>

<style lang="scss" scoped>
@import './index.scss';
</style>
