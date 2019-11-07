import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../views/Login.vue'
import Main from '../views/Main.vue'
import CategoryEdit from '../views/CategoryEdit.vue'
import CategoryList from '../views/CategoryList.vue'

import ItemsEdit from '../views/ItemEdit.vue'
import ItemsList from '../views/ItemList.vue'

import HerosEdit from '../views/HeroEdit.vue'
import HerosList from '../views/HeroList.vue'

import ArticlesEdit from '../views/ArticleEdit.vue'
import ArticlesList from '../views/ArticleList.vue'

import AdEdit from '../views/AdEdit.vue'
import AdList from '../views/AdList.vue'

import AdminUserEdit from '../views/AdminUserEdit.vue'
import AdminUserList from '../views/AdminUserList.vue'

Vue.use(VueRouter)

const routes = [{
    path: "/login",
    name: "login",
    component: Login,
    meta: {
      isPablic: true
    }
  },

  {
    path: '/',
    name: 'main',
    component: Main,
    children: [{
        path: "/categories/create",
        component: CategoryEdit
      },
      {
        path: "/categories/edit/:id",
        component: CategoryEdit,
        props: true
      },
      {
        path: "/categories/list",
        component: CategoryList
      },

      {
        path: "/items/create",
        component: ItemsEdit,
      },
      {
        path: "/items/edit/:id",
        component: ItemsEdit,
        props: true
      },
      {
        path: "/items/list",
        component: ItemsList
      },

      {
        path: "/heros/create",
        component: HerosEdit,
      },
      {
        path: "/heros/edit/:id",
        component: HerosEdit,
        props: true
      },
      {
        path: "/heros/list",
        component: HerosList
      },

      {
        path: "/articles/create",
        component: ArticlesEdit,
      },
      {
        path: "/articles/edit/:id",
        component: ArticlesEdit,
        props: true
      },
      {
        path: "/articles/list",
        component: ArticlesList
      },

      {
        path: "/ads/create",
        component: AdEdit,
      },
      {
        path: "/ads/edit/:id",
        component: AdEdit,
        props: true
      },
      {
        path: "/ads/list",
        component: AdList
      },

      {
        path: "/admin_users/create",
        component: AdminUserEdit,
      },
      {
        path: "/admin_users/edit/:id",
        component: AdminUserEdit,
        props: true
      },
      {
        path: "/admin_users/list",
        component: AdminUserList
      },

    ]
  },

]

const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (!to.meta.isPablic && !localStorage.token) {
    return next("/login")
  }
  next()
})
export default router