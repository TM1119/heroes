<template>
    <div class="col-sm-9 col-sm-offset-3 col-md-10 col-md-offset-2 main">
        <h2 class="sub-header">英雄列表</h2>
        <!-- <a class="btn btn-success" href="add.html">添加</a> -->
        <router-link class="btn btn-success" :to="{name:'heroadd'}">添加</router-link>
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
              <tr v-for="(item,index) in list" v-bind:key="item.id">
                <td>{{index  + 1}}</td>
                <td>{{item.name}}</td>
                <td>{{item.gender}}</td>
                <td>

                  <!-- <a href="edit.html">编辑</a> -->
                  <router-link :to="{name:'heroedit',params:{id:item.id}}">编辑</router-link>
                  &nbsp;&nbsp;
                  <a href="javascript:;" @click='del(item.id)'>删除</a>
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
        list:[]
      }
    },
  mounted() {
this.loadData()
  },
  methods: {
    loadData() {
      this.axios
          .get('heroes')
          .then((res) => {
            const {status,data} = res
           
            if(status === 200 ){
              this.list= data
            } else{
              alert('获取失败')
            }
          })
          .catch((err) => {
            alert('服务器异常' + err)
          })
    },
    // 发送删除请求
    del(id) {
         if(!confirm('您确认删除吗')){
                return false
            }
      this.axios
          .delete(`heroes/${id}`)
          .then((res) => {
         
            if (res.status ===200){
              this.loadData()
            }

          }).catch(err=>{
            alert('删除失败'+err)
          })
    }
  },
}
</script>

<style scoped>

</style>
