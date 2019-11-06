<template>
  <div class="about">
    <h1>{{id?"编辑":"新建"}}管理员</h1>
    <el-form :model="model" ref="model" label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.username"></el-input>
      </el-form-item>

      <el-form-item label="密码">
        <el-input type="text" v-model="model.password"></el-input>
      </el-form-item>
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
      model: {
        name: ""
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
        res = await this.$http.put(`rest/admin_users/${this.id}`, this.model);
      } else {
        res = await this.$http.post("rest/admin_users", this.model);
      }
      this.$router.push("/admin_users/list");
      this.$message.success("保存成功" + res);
    },
    async fetch() {
      const res = await this.$http.get(`rest/admin_users/${this.id}`);
      this.model = res.data;
    },
   
  }
};
</script>
