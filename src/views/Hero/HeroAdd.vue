<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control" v-model="formData.name" id="txtName" placeholder="姓名">
      </div>
      <div class="form-group">
        <label for="sex">性别</label>
        <select class="form-control" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- prevent 阻止默认行为的执行 -->
      <button @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
import { all } from 'q';
export default {
    data() {
        return {
            formData:{
                name:'',
                gender:'男'
            }
        }
    },
    methods:{
        add(){
            this.axios
                .post('heroes', this.formData)
                .then((res) => {
                    const {data,status} = res;
                    if(status === 201) {
                        this.$router.push({name:'HeroList'})
                    }else {
                        alert('添加失败')
                    }
                })
                .catch((err) => {
                    alert('服务器错误' + err)
                })
        }
        
    }
}
</script>

<style>

</style>
