<template>
  <div class="about">
    <h1>英雄列表</h1>
    <el-table :data="items" border stripe>
      <el-table-column prop="_id" label="ID" width="220"></el-table-column>
      <el-table-column prop="name" label="英雄名称"></el-table-column>
      <el-table-column prop="title" label="英雄称号"></el-table-column>
      <el-table-column label="头像">
        <template #default="scope">
          <img :src="scope.row.avatar" style="height:3rem" />
        </template>
      </el-table-column>
      <el-table-column fixed="right" label="操作">
        <template #default="scope">
          <el-button type="text" @click="$router.push(`/heros/edit/${scope.row._id}`)">编辑</el-button>
          <el-button type="text" @click="remove(scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>


<script>
export default {
  data() {
    return {
      items: []
    };
  },
  created() {
    this.fetch();
  },
  methods: {
    async fetch() {
      const res = await this.$http.get("rest/heros");
      this.items = res.data;
    },
    async remove(row) {
      this.$confirm(`是否要删除分类"${row.name}"`, "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      }).then(async () => {
        await this.$http.delete(`rest/heros/${row._id}`);
        this.$message({
          type: "success",
          message: "删除成功!"
        });
        this.fetch();
      });
    }
  }
};
</script>
