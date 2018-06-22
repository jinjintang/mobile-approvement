<template>
  <div class="personalData">
    <mt-header title="个人资料">
      <router-link to="/my" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="itemBox">
      
     
    </div>
    <div class="itemBox">
      <mt-cell title="姓名">
        <span class="myInfo">{{myInfoData.NAME}}</span>
      
      </mt-cell>
     
       <mt-cell title="手机">
        <span class="myInfo">{{myInfoData.PHONENUMBER}}</span>
      
      </mt-cell>
      <mt-cell title="邮箱">
        <span class="myInfo"  v-if="myInfoData.EMAIL">{{myInfoData.EMAIL}}</span>
      
      </mt-cell>
     
    <div class="subBut" @click="registerSub">修改个人资料</div>
    </div>
    
  </div>
</template>
<script>
  import Users from '../api/users.js'
  import cfg from './../utils/config'

  export default {
    name: 'personalData',
    data () {
      return {
        imgBaseUrl:cfg.imgBaseUrl,
        myInfoData: []
      }
    },
    methods:{
      registerSub:function(){
         this.$router.push('/register')
      },
      init: function() {
        Users.myMessage((ret, err) => {
          if (err) {
            console.log(err)
          } else {
            console.log(ret.data)
            this.myInfoData = ret.data
          }
        })
      },
      getCourseItem: function(obj){

      }
    },
    mounted:function(){
      this.init()
    },
   
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .personalData{
    margin-top:20px;
    .itemBox{
      margin: 10px 0;
      img{
        width: 40px;
        height: 40px;
        border-radius: 50%;
      }
    }
    .myInfo{
      margin-right: 10px;
    }
     .subBut{
        background: $cl0;
        color:$cl1;
        text-align: center;
        line-height: 40px;
        margin: 20px 0;
      }
  }
</style>
