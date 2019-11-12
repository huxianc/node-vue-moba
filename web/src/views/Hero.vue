<template>
  <div class="page-hero" v-if="model">
    <div class="topbar bg-black py-2 px-3 d-flex ai-center text-white">
      <img src="../assets/images/logo.png" alt height="30" />
      <div class="px-2 flex-1">
        <span>王者荣耀</span>
        <span class="ml-2">攻略站</span>
      </div>
      <router-link to="/" tag="div">更多英雄 &gt;</router-link>
    </div>
    <div class="top text-white" :style="{'background-image':`url(${model.banner})`}">
      <div class="info p-3 h-100 d-flex flex-column jc-end">
        <div class="fs-sm">{{model.title}}</div>
        <h2 class="my-2">{{model.name}}</h2>
        <div class="fs-sm">{{model.categories.map(v=>v.name).join('/')}}</div>
        <div class="d-flex jc-between pt-2">
          <div class="scores d-flex ai-center" v-if="model.scores">
            <span>难度</span>
            <span class="badge bg-primary">{{ model.scores.difficult}}</span>
            <span>技能</span>
            <span class="badge bg-blue-1">{{ model.scores.skills}}</span>
            <span>攻击</span>
            <span class="badge bg-danger">{{ model.scores.attack}}</span>
            <span>生存</span>
            <span class="badge bg-dark">{{ model.scores.survive}}</span>
          </div>
          <router-link tag="span" class="text-grey fs-sm" to="/">皮肤:2 &gt;</router-link>
        </div>
      </div>
    </div>
    <!-- end of top -->
    <div class>
      <div class="px-3 bg-white">
        <div class="nav d-flex jc-around pt-3 pb-2 border-bottom">
          <div class="nav-item active">
            <div class="nav-link">英雄初始</div>
          </div>
          <div class="nav-item">
            <div class="nav-link">进阶攻略</div>
          </div>
        </div>
      </div>
      <swiper>
        <swiper-slide>
          <div>
            <div class="p-3 border-bottom bg-white">
              <div class="d-flex">
                <router-link tag="button" to="/" class="btn flex-1 btn-lg">
                  <i class="iconfont icon-menu"></i>英雄介绍视频
                </router-link>
                <router-link tag="button" to="/" class="btn flex-1 ml-2 btn-lg">
                  <i class="iconfont icon-menu"></i>英雄介绍视频
                </router-link>
              </div>
              <!-- skills -->
              <div class="skills mt-4">
                <div class="d-flex jc-around">
                  <img
                    class="icon"
                    @click="currentSkillIndex = i"
                    :class="{active:i===currentSkillIndex}"
                    v-for="(item,i) in model.skills"
                    :key="i"
                    :src="item.icon"
                  />
                </div>
                <div v-if="currentSkill">
                  <div class="d-flex pt-4 pb-3">
                    <h3 class="m-0">{{ currentSkill.name }}</h3>
                    <span
                      class="text-grey-1 ml-4"
                    >（冷却值：{{currentSkill.delay}} 消耗：{{currentSkill.cost}}）</span>
                  </div>
                  <p>{{ currentSkill.description }}</p>
                  <div class="border-bottom"></div>
                  <p class="text-grey">小提示：{{currentSkill.tips}}</p>
                </div>
              </div>
            </div>

            <m-card icon="menu" title="出装推荐" class="hero-items">
              <div class="fs-xl py-3">顺风出装</div>
              <div class="d-flex jc-around text-center">
                <div v-for="item in model.items1" :key="item.name">
                  <img :src="item.icon" class="icon" />
                  <p class="fs-xs">{{item.name}}</p>
                </div>
              </div>
              <div class="border-bottom my-2"></div>
              <div class="fs-xl py-3">逆风出装</div>
              <div class="d-flex jc-around text-center">
                <div v-for="item in model.items2" :key="item.name">
                  <img :src="item.icon" class="icon" />
                  <p class="fs-xs">{{item.name}}</p>
                </div>
              </div>
            </m-card>

            <m-card plain icon="menu" title="使用技巧">
              <p>{{ model.usageTips }}</p>
            </m-card>
            <m-card plain icon="menu" title="对抗技巧">
              <p>{{ model.battleTips }}</p>
            </m-card>
            <m-card plain icon="menu" title="团战思路">
              <p>{{ model.teamTips }}</p>
            </m-card>
            <m-card plain icon="menu" title="英雄关系">
              <div class="fs-xl my-3">最佳搭档</div>
              <div v-for="item in model.partners" :key="item.name" class="d-flex pt-3">
                <img :src="item.hero.avatar" alt  height="50"/>
                <p class="flex-1 m-0 pl-3">{{item.description}}</p>
              </div>
              <div class="border-bottom mt-3"></div>
            </m-card>
          </div>
        </swiper-slide>
      </swiper>
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
      model: null,
      currentSkillIndex: 0
    };
  },
  computed: {
    currentSkill() {
      return this.model.skills[this.currentSkillIndex];
    }
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      // 5dc4fc3e4833b71b285bf02e
      const res = await this.$http.get(`heros/${this.id}`);
      console.log(res.data);
      this.model = res.data;
    }
  }
};
</script>

<style lang="scss">
@import "../assets/scss/_variable.scss";
.page-hero {
  .top {
    height: 50vw;
    background: #fff no-repeat top center;
    background-size: auto 100%;
    .badge {
    }
  }
  .info {
    background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
    .scores {
      .badge {
        margin: 0 0.25rem;
        display: inline-block;
        width: 1rem;
        height: 1rem;
        line-height: 1.05rem;
        text-align: center;
        border-radius: 50%;
        font-size: 0.6rem;
        border: 1px solid rgba(255, 255, 255, 0.2);
      }
    }
  }
  .skills {
    img.icon {
      &.active {
        border: 3px solid map-get($colors, "primary");
      }
      border-color: map-get($colors, "white");
      border-radius: 50%;
      width: 5.3846rem;
      height: 5.3846rem;
    }
  }
  .hero-items {
    img.icon {
      width: 3.4615rem;
      height: 3.4615rem;
      border-radius: 50%;
    }
  }
}
</style>
