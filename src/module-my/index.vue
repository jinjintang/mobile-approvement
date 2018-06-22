<template>
  <div class="learingMy">
    <div class="head"><img :src="IMGURL" alt="">我</div>
    <div class="item">
      <mt-cell title="个人资料" to="/personalData">
        <span class="icon-go"></span>
        <i slot="icon" class="icon icon-my"></i>
      </mt-cell>
    
       <span @click="logOut">
        <mt-cell title="退出">
            <span class="icon-go"></span>
            <i slot="icon" class="icon icon-out"></i>
        </mt-cell>
      </span>
    </div>

    <div class="learingFooter">
      <mt-tabbar v-model="selected" :fixed="true">
        <mt-tab-item id="index" >
          <i class="icon icon-ind"></i>
          首页
        </mt-tab-item>
        
        <mt-tab-item id="my">
          <i class="icon icon-my"></i>
          我的
        </mt-tab-item>
      </mt-tabbar>
    </div>
  </div>
</template>
<script>
  import logApi from '../api/users'
var token = localStorage.getItem('token')
 import cfg from './../utils/config'
  export default {
    name: 'learingMy',
    data () {
      return {
        IMGURL:'',
        name:'',
       selected: 'my',
      }
    },
    methods:{

      logOut: function() {
     this.$router.push('/')
      },
      scan: function() {
      location.href='../plus/barcode.html'
      }
    },
       watch:{
        
      selected(val, oldVal){
        
        this.selected=val
        console.log(this.selected)
        this.$router.push('/'+val)
      }
    },
    mounted:function(){
     this.name=localStorage.getItem('name')
      this.IMGURL=cfg.imgBaseUrl+localStorage.getItem('IMG')
       //this.$msgbox('提示',this.IMGURL)

    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .learingMy{
    margin-top:15px;
    text-align: left;
    .head{
      background: $cl1;
      padding:30px 20px;
      line-height: 50px;
      color:$cl3;
      font-size: 20px;
      margin-bottom: 15px;
      img{
        width: 50px;
        height: 50px;
        border-radius: 50%;
        margin-right: 10px;
        float: left;
      }
    }
    .item{
      background: $cl1;
      padding:0 15px;
      li {
        line-height: 40px;
        border-bottom:solid 1px $cl5;
        position: relative;
        i{
          position: absolute;
          right: 0px;
        }
      }
      .icon{
        position: absolute;
        left: 0px;
        top:15px;
        font-size: 18px;
      }
      .mint-cell-wrapper{
        position: relative;
        padding: 0px 0px 0px 25px ;
      }
    }
  }
</style>
