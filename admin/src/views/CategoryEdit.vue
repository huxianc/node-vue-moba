<template>
  <div class="about">
    <h1>新建分类</h1>
    <el-form :model="model" ref="model" label-width="80px" @submit.native.prevent="save">
      <el-form-item label="名称">
        <el-input v-model="model.name"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: {
        name: ""
      }
    };
  },
  methods: {
    async save() {
      const res = await this.$http.post("categories", this.model);
      this.$router.push("/categories/list");
      this.$message.success("保存成功"+res)
    }
  }
};
</script>
