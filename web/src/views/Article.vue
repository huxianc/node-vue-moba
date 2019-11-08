<template>
  <div class="page-article" v-if="model">
    <div class="d-flex py-3 px-2 border-bottom">
      <div class="iconfont icon-back text-blue"></div>
      <strong class="flex-1 text-ellipsis text-blue px-2">{{model.title}}</strong>
      <div class="text-grey fs-xs">2019-11-08</div>
    </div>
    {{model.ces}}
    <div class="px-3 body fs-lg" v-html="model.body"></div>
    <div class="px-3 border-top py-2 ">
      <div class="d-flex ai-center mb-2">
        <i class="iconfont icon-menu"></i>
        <strong class="text-blue fs-g ml-2">相关资讯</strong>
      </div>
      <div>
        <router-link v-for="item in model.related" :key="item._id" tag="div" :to="`/articles/${item._id}`" class="text-ellipsis mt-2">{{ item.title }}</router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    id: {
      required: true
    }
  },
  data() {
    return {
      model: null
    };
  },
  watch:{
    id:"fetch"
    // id(){
    //   this.fetch()
    // }
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get(`articles/${this.id}`);
      // res.data.body = String(res.data.body).replace(
      //   /<img/g,
      //   `<img style="max-width:100%;height:auto" `
      // );
      this.model = res.data;
    }
  }
};
</script>

<style lang="scss" >
.page-article {
  .icon-back {
    font-size: 1.6923rem;
  }
  .body {
    img {
      max-width: 100%;
      height: auto;
    }
    iframe {
      width: 100%;
      height: auto;
    }
  }
}
</style>
