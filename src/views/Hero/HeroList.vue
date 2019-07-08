<template>
      <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄管理</h2>
        <router-link  class="btn btn-success" to="/heroes/heroadd">添加</router-link>
        <div class="table-responsive">
          <table class="table table-striped">
            <thead>
              <tr>
                <th>#</th>
                <th>姓名</th>
                <th>性别</th>
                <th>操作</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(item, index) in List" :key="item.id">
                <td>{{index + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>
                  <router-link to="">编辑</router-link>
                  &nbsp;&nbsp;
                  <a href="javascript:" @click="del(item.id)">删除</a>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
</template>

<script>

export default {
  data() {
    return {
      List:[]
    }
  },
   mounted(){
    this.loadData()
  },
  methods: {
    // 显示List中的数据
    loadData() {
      this.axios
        .get('heroes')
        .then((res) => {
          const {data, status} = res;
          if(status === 200) {
            this.List = data
          } else {
            alert('获取数据失败')
          }
        })
        .catch((err) => {
          alert('服务器异常' + err)
        })
    },
    // 删除数据
    del(id) {
      if(!confirm('确认删除？')) {
        return false
      } 
      this.axios
        .delete(`heroes/${id}`)
        .then((res) => {
          const {status} = res
          if(status == 200) {
            this.loadData()
          }else {
            alert('删除失败')
          }
        })
        .catch((err) => {
          alert('服务器异常' + err)
        })
    },
    // 添加数据

  },
 
}
</script>

<style>

</style>
