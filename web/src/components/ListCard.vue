<template>
  <m-card :title="title" :icon="icon">
    <div class="nav jc-between pt-3">
      <div
        v-for="(category,index) in categories"
        :key="index"
        @click="$refs.list.swiper.slideTo(index)"
        class="nav-item"
        :class="{active:active === index}"
      >
        <div class="nav-link">{{ category.name }}</div>
      </div>
    </div>
    <swiper class="mt-3" ref="list" @slide-change="()=>active = $refs.list.swiper.realIndex" :options="{autoHeight:true}">
      <swiper-slide v-for="(category,index) in categories" :key="index">
        <slot name="items" :category="category"></slot>
      </swiper-slide>
    </swiper>
  </m-card>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    icon: {
      type: String,
      required: true
    },
    categories: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      active: 0
    };
  }
};
</script>