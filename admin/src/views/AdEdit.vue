<template>
  <div class="about">
    <h1>{{id?"编辑":"新建"}}广告位</h1>
    <el-form :model="model" ref="model" label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item label="广告">
        <el-button @click="model.items.push({})" type="primary" size="small">
          <i class="el-icon-plus"></i>
          添加广告
        </el-button>
      </el-form-item>

      <el-row type="flex" style="flex-wrap:wrap;">
        <el-col :md="24" v-for="(item,index) in model.items" :key="index">
          <el-form-item label="跳转链接（url）">
            <el-input v-model="item.url"></el-input>
          </el-form-item>
          <el-form-item label="图片">
            <el-upload
              class="avatar-uploader"
              :action="uploadUrl"
              :headers="getAuthHeaders()"
              :show-file-list="false"
              :on-success="res=> $set(item,'image',res.url)"
            >
              <img v-if="item.image" :src="item.image" class="avatar" />
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>

          <el-form-item>
            <el-button type="danger" @click="model.items.splice(index,1)" size="small">删除</el-button>
          </el-form-item>
        </el-col>
      </el-row>

      <el-form-item>
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
      parents: [],
      model: {
        name: "",
        items: []
      }
    };
  },
  created() {
    // 满足前面的才执行后面的
    this.id && this.fetch();
  },
  methods: {
    async save() {
      let res;
      if (this.id) {
        res = await this.$http.put(`rest/ads/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/ads", this.model);
      }
      this.$router.push("/ads/list");
      this.$message.success("保存成功" + res);
    },
    async fetch() {
      const res = await this.$http.get(`rest/ads/${this.id}`);
      this.model = Object.assign({}, this.model, res.data);
    }
  }
};
</script>
