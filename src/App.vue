<template>
  <div id="app">
    <el-row :gutter="20">
         <el-col :span="24"><div class="grid-content bg-purple-dark"></div></el-col>
    </el-row>
    <el-row :gutter="20">
      <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
      <el-col :span="12"><div class="grid-content bg-purple-light"></div></el-col>
    </el-row>
    <el-row :gutter="20" type="flex" justify="space-around" tag="span">
      <el-col :span="8" :xs="{'span':1,'offset':4}"><div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4" :xs="4" tag="span"><div class="grid-content bg-purple-light"></div></el-col>
      <el-col :span="4" :sm="6"><div class="grid-content bg-purple"></div></el-col>
    </el-row>
  </div>
</template>

<script>

// import ElRow from '@element/Row/src/row';
// import ElCol from '@element/Col/src/col';

export default {
  name: 'app',
  components: {
    // ElRow,
    // ElCol,
  },
};
</script>

<style lang="scss">

.el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
