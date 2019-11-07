<template>
  <div>
    <swiper :options="swiperOption">
      <swiper-slide>
        <img class="w-100" src="../assets/images/25bef405982eda3414029e8859d7ffc8.jpeg" alt srcset />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/9dac5ac96d27c55b6b322a02eacf1813.jpeg" alt srcset />
      </swiper-slide>
      <swiper-slide>
        <img class="w-100" src="../assets/images/8f3dc9afda3109063a49f07365d17867.jpeg" alt srcset />
      </swiper-slide>
      <div class="swiper-pagination pagination-home text-right px-3 pb-1" slot="pagination"></div>
    </swiper>
    <!-- end of swiper -->
    <div class="nav-icons bg-white mt-3 text-center pt-3 text-dark-1">
      <div class="d-flex flex-wrap">
        <div v-for="n in 12" :key="n" class="nav-item mb-3">
          <i class="sprite sprite-news"></i>
          <div class="py-2">爆料站</div>
        </div>
      </div>
      <div class="bg-light py-2 fs-sm">
        <i class="sprite sprite-arrow mr-1"></i>
        <span>收起</span>
      </div>
    </div>
    <!-- end of nav icons -->

    <m-list-card title="新闻资讯" icon="cc-menu-circle" :categories="newsCats">
      <template #items="{category}">
        <div v-for="(items,i) in category.newsList" :key="i" class="py-2">
          <span>[{{ items.categoryName }}]</span>
          <span>|</span>
          <span>{{ items.title }}</span>
          <span>{{ items.date }}</span>
        </div>
      </template>
    </m-list-card>

    <m-card icon="bg_hero" title="英雄列表"></m-card>
    <m-card icon="bg_hero" title="精彩视频"></m-card>
    <m-card icon="bg_hero" title="图文攻略"></m-card>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      newsCats: [
        {
          name: "热门",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "公告",
            title: "《婉儿是怎么练成的》——揭秘婉儿学艺之路！",
            date: "06/01"
          }))
        },
        {
          name: "新闻",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "新闻",
            title: "七城灯火，与你共赏！《王者荣耀》周年庆千灯会正式开园",
            date: "11/06"
          }))
        },
        {
          name: "公告",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "公告",
            title: "10月30日全服不停机修复公告",
            date: "10/30"
          }))
        },
        {
          name: "活动",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "活动",
            title: "告别孤单 浪漫峡谷陪你狂欢 秒杀皮肤限时返场",
            date: "11/04"
          }))
        },
        {
          name: "赛事",
          newsList: new Array(5).fill({}).map(v => ({
            categoryName: "赛事",
            title: "佛山“舞狮”助兴  城市赛全国半决赛精彩对抗即将来临！",
            date: "11/07"
          }))
        },
      ]
    };
  }
};
</script>

<style lang="scss">
@import "../assets/scss/variable.scss";
.pagination-home {
  .swiper-pagination-bullet {
    background: #fff;
    opacity: 1;
    border-radius: 0.1538rem;
    &.swiper-pagination-bullet-active {
      background: map-get($colors, "info") !important;
    }
  }
}
.nav-icons {
  border-top: 1px solid $border-color;
  border-bottom: 1px solid $border-color;
  .nav-item {
    width: 25%;
    border-left: 1px solid $border-color;
    &:nth-child(4n + 1) {
      border-left: none;
    }
  }
}
</style>

<style lang="scss" scoped>
</style>