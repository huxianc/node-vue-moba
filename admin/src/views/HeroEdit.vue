<template>
  <div class="about">
    <h1>{{id?"编辑":"新建"}}英雄</h1>
    <el-form :model="model" ref="model" label-width="80px" @submit.native.prevent="save">
      <el-tabs type="border-card" value="basic">
        <el-tab-pane label="基本信息" name="basic">
          <el-form-item label="名称">
            <el-input v-model="model.name"></el-input>
          </el-form-item>
          <el-form-item label="称号">
            <el-input v-model="model.title"></el-input>
          </el-form-item>
          <el-form-item label="头像">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res=>$set(model,'avatar',res.url)"
            >
              <img v-if="model.avatar" :src="model.avatar" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="Banner">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res=>$set(model,'banner',res.url)"
            >
              <img v-if="model.banner" :src="model.banner" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="model.categories" placeholder multiple>
              <el-option
                v-for="item in categories"
                :key="item._id"
                :label="item.name"
                :value="item._id"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="难度">
            <el-rate :max="9" show-score v-model="model.scores.difficult" style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="技能">
            <el-rate :max="9" show-score v-model="model.scores.skills" style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="攻击">
            <el-rate :max="9" show-score v-model="model.scores.attack" style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="生存">
            <el-rate :max="9" show-score v-model="model.scores.survive" style="margin-top:0.6rem"></el-rate>
          </el-form-item>
          <el-form-item label="顺风出装">
            <el-select v-model="model.items1" placeholder multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="逆风出装">
            <el-select v-model="model.items2" placeholder multiple>
              <el-option v-for="item in items" :key="item._id" :label="item.name" :value="item._id"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="使用技巧">
            <el-input type="textarea" :rows="2" v-model="model.usageTips" placeholder></el-input>
          </el-form-item>
          <el-form-item label="对抗技巧">
            <el-input type="textarea" :rows="2" v-model="model.battleTips" placeholder></el-input>
          </el-form-item>
          <el-form-item label="团战思路">
            <el-input type="textarea" :rows="3" v-model="model.teamTips" placeholder></el-input>
          </el-form-item>
        </el-tab-pane>
        <el-tab-pane label="技能" name="skills">
          <el-button
            @click="model.skills.push({})"
            type="primary"
            size="small"
            style="margin-bottom:1rem;"
          >
            <i class="el-icon-plus"></i>
            添加技能
          </el-button>
          <el-row type="flex" style="flex-wrap:wrap;">
            <el-col :md="12" v-for="(item,index) in model.skills" :key="index">
              <el-form-item label="名称">
                <el-input v-model="item.name"></el-input>
              </el-form-item>
              <el-form-item label="冷却值">
                <el-input v-model="item.delay"></el-input>
              </el-form-item>
              <el-form-item label="消耗">
                <el-input v-model="item.cost"></el-input>
              </el-form-item>
              <el-form-item label="图标">
                <el-upload
                  class="avatar-uploader"
                  :action="uploadUrl"
                  :headers="getAuthHeaders()"
                  :show-file-list="false"
                  :on-success="res=> $set(item,'icon',res.url)"
                >
                  <img v-if="item.icon" :src="item.icon" class="avatar" />
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>
              <el-form-item label="小提示">
                <el-input type="textarea" v-model="item.tips"></el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="danger" @click="model.skills.splice(index,1)" size="small">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
        <el-tab-pane label="最佳搭档" name="partners">
          <el-button
            @click="model.partners.push({})"
            type="primary"
            size="small"
            style="margin-bottom:1rem;"
          >
            <i class="el-icon-plus"></i>
            添加英雄
          </el-button>
          <el-row type="flex" style="flex-wrap:wrap;">
            <el-col :md="12" v-for="(item,index) in model.partners" :key="index">
              <el-form-item label="英雄">
                <el-select filterable  v-model="item.hero">
                  <el-option
                    v-for="hero in heros"
                    :key="hero._id"
                    :label="hero.name"
                    :value="hero._id"
                  ></el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="描述">
                <el-input type="textarea" v-model="item.description"></el-input>
              </el-form-item>

              <el-form-item>
                <el-button type="danger" @click="model.partners.splice(index,1)" size="small">删除</el-button>
              </el-form-item>
            </el-col>
          </el-row>
        </el-tab-pane>
      </el-tabs>
      <el-form-item style="margin-top:1rem;">
        <el-button type="primary" native-type="submit">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  props: {
    id: {}
  },
  data() {
    return {
      categories: [],
      items: [],
      heros: [],
      model: {
        name: "",
        avatar: "",
        skills: [],
        partners: [],
        scores: {
          difficult: 0,
          skills: 0,
          attack: 0,
          survive: 0
        }
      }
    };
  },
  created() {
    // 满足前面的才执行后面的
    this.id && this.fetch();
    this.fetchCategories();
    this.fetchItems();
    this.fetchHeros();
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/heros/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/heros", this.model);
      }
      this.$router.push("/heros/list");
      this.$message.success("保存成功" + res);
    },
    async fetch() {
      const res = await this.$http.get(`rest/heros/${this.id}`);
      console.log(res.data);

      this.model = Object.assign({}, this.model, res.data);
    },
    async fetchCategories() {
      const res = await this.$http.get(`rest/categories`);
      this.categories = res.data;
    },
    async fetchItems() {
      const res = await this.$http.get(`rest/items`);
      this.items = res.data;
    },
    async fetchHeros() {
      const res = await this.$http.get(`rest/heros`);
      this.heros = res.data;
    },
  }
};
</script>

<style>
</style>
