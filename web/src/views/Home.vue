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
        <router-link
          tag="div"
          :to="`/articles/${news._id}`"
          v-for="(news,i) in category.newsList"
          :key="i"
          class="py-2 d-flex fs-lg"
        >
          <span class="text-info">[{{ news.categoryName }}]</span>
          <span class="px-2">|</span>
          <span class="flex-1 text-dark-1 text-ellipsis pr-2">{{ news.title }}</span>
          <span class="text-grey-1 fs-sm">{{ news.createdAt | date }}</span>
        </router-link>
      </template>
    </m-list-card>

    <m-list-card title="英雄列表" icon="bg_hero" :categories="heroCats">
      <template #items="{category}">
        <div class="d-flex flex-wrap" style="margin:0 -0.5rem;">
          <router-link
          tag="div"
            v-for="(hero,i) in category.heroList"
            :key="i"
            class="p-2 text-center"
            style="width:20%;"
            :to="`/heros/${hero._id}`"
          >
            <img :src="hero.avatar" alt srcset class="w-100" />
            <div>{{ hero.name }}</div>
          </router-link>

        </div>
      </template>
    </m-list-card>

    <m-card icon="bg_hero" title="英雄列表"></m-card>
    <m-card icon="bg_hero" title="精彩视频"></m-card>
    <m-card icon="bg_hero" title="图文攻略"></m-card>
  </div>
</template>

<script>
import dayjs from "dayjs";
// @ is an alias to /src

export default {
  name: "home",
  components: {},
  filters: {
    date(val) {
      return dayjs(val).format("MM/DD");
    }
  },
  data() {
    return {
      swiperOption: {
        pagination: {
          el: ".pagination-home"
        }
      },
      newsCats: [],
      heroCats: []
    };
  },
  created() {
    this.fetchNewsCats();
    this.fetchHeroCats();
  },
  methods: {
    async fetchNewsCats() {
      const res = await this.$http.get("news/list");
      this.newsCats = res.data;
    },
    async fetchHeroCats() {
      const res = await this.$http.get("heros/list");
      this.heroCats = res.data;
    }
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