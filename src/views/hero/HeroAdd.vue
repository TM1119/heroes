<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
    <h2 class="sub-header">添加英雄</h2>
    <form>
      <div class="form-group">
        <label for="txtName">姓名</label>
        <input type="text" class="form-control" id="txtName" placeholder="姓名" v-model="formData.name">
      </div>
      <div class="form-group">
        <label for="gender">性别</label>
        <!-- <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"> -->
        <select class="form-control" id="gender" v-model="formData.gender">
          <option value="男">男</option>
          <option value="女">女</option>
        </select>
      </div>
      <!-- button 就是提交按钮 -->
      <!-- <input type="button" value=""> -->
      <!-- prevent 事件修饰符，阻止默认行为 -->
      <button  @click.prevent="add" class="btn btn-success">提交</button>
    </form>
  </div>
</template>

<script>
 
export default {
  data() {
    return {
      formData : {
        name :'',
        gender:'男'
      }
    }
  },
  methods:{
      add () {
        this.axios
            .post('heroes',this.formData)
            .then((res) => {
              if(res.status ===201){
                this.$router.push('/hero')
              }else {
                alert( )
              }
            })
            .catch((err) => {
              console.log(err)
            })
      }   
  }
}
</script>

<style>

</style>
