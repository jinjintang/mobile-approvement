<template>
  <div class="myOrder">
    <mt-header title="课程审批">
     
    </mt-header>

    <mt-navbar v-model="selected1">
      <mt-tab-item id="0">待审批</mt-tab-item>
      <mt-tab-item id="1">已通过</mt-tab-item> 
      <mt-tab-item id="2">未通过</mt-tab-item>
    
    </mt-navbar>
    <!-- tab-container -->
    <!--<mt-tab-container v-model="selected">-->
      <!--<mt-tab-container-item id="1">-->
    <div style="margin-top: 10px;">
      
        <div class="item" v-for="(item, index) in myOrderData" :key="index">

          
          <div class="cont">
            <div class="ico"><img src="../assets/cs1.png" alt=""></div>
            <div class="info">
              <p class="name">{{item.COURSE_NAME}}</p>
              <p class="pic"> ￥{{item.COURSE_PRICE}}</p>

             

            </div>
          </div>
          <div class="active">
            <p>地区: <i class="pic">{{item.AREA_NAME}}</i></p>
            <p class="act">
              <span v-if="selected1 == 0"><router-link :to="'/approvedetail/'+item.COURSE_ID+'?Aid='+item.ID">去审批</router-link></span>
              <span v-else-if="selected1 == 1"><router-link :to="'/coursedetail/'+item.COURSE_ID">已通过</router-link></span>
              <span v-else-if="selected1== 2"><router-link :to="'/coursedetail/'+item.COURSE_ID">不通过</router-link></span>
            </p>
          </div>
        </div>
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
  import httpCt from '../api/httpClient'
  import LearingHeader from './../components/index-header.vue'


 


  import IndexApi from '../api/learingInd.js'
  import cfg from './../utils/config'
 import Users from '../api/users.js'

  export default {
    name: 'learingIndex',
    data () {
      return {
        rcomData: [],       // 推荐课程
        courseData: [],     // 全部（首页数据分析）课程
        swipeable: 'false',
        selected: 'index',
        imgBaseUrl:cfg.imgBaseUrl,
        param:{},
        selected1: '0',
        myOrderData: '',
        prompt:true
      }
    },
        methods:{
      init: function() {
        this.getMyCourses()
      },
      //提示关闭
      promptClose:function(){
        this.prompt = false;
      },
      //订单获取
      getMyCourses: function(){
        
       
        Users.approveItem({key:this.selected1}, (ret, err) => {
          if (err) {
            console.log(err)
          }else{
            console.log(ret.data)
            this.myOrderData = ret.data
          }
        })
      
     }
    },
    watch:{
        selected1(newVal, oldVal){
        this.selected1 = newVal
        this.getMyCourses()
      },
      selected(val, oldVal){
        
        this.selected=val
        console.log(this.selected)
        this.$router.push('/'+val)
      }
    },
    mounted:function(){
      this.init()
    },
    components: {
      LearingHeader,
     
    },

  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
.learingIndex{
  text-align: center;
}
.learingFooter{
  color:$cl7;
  margin-top: 51px;
.icon{
  display: block;
  font-size: 22px;
  margin-bottom: 3px;
}
}
 .myOrder{
     margin-top:20px;
    .mint-navbar{
      a:first-child{
        .mint-tab-item-label{
          border-right: solid 1px $cl9;
        }
      }
      .mint-tab-item-label{
        font-size: 14px;
      }
    }
    .is-selected{
      margin-bottom: 0px !important;
    }
    .prompt{
      background: $cl12;
      color:$cl1;
      line-height: 40px;
      padding:0 15px;
      margin-bottom: 3px;
      position: relative;
      top:-10px;
      i{
        position: relative;
        margin-right: 5px;
        top:1px;
      }
      span{
        position: absolute;
        right: 15px;
        top:11px;
      }
    }
    .item{
      margin: 0 15px;
      margin-bottom: 10px;
      color: $cl9;
      background: $cl1;
      .tit{
        border-bottom: solid 1px $cl5;
        line-height: 40px;
        padding:0 15px;
      }
      .cont{
        display: flex;
        padding:15px 0;
        margin:0 15px;
        border-bottom: solid 1px $cl5;
        .ico{flex: 1;margin-right: 10px;}
        .info{
          flex: 3;
          font-size: 14px;
          line-height: 33px;
          .pic{
            font-size: 18px;
            color:$cl13;
          }
        }
      }
      .active{
        display: flex;
        padding:15px;
        p{
          flex: 1;
          .pic{
            font-size: 18px;
            color:$cl13;
          }
        }
        .act{
          text-align: right;
          a{
            color: $cl0;
          }
        }
      }
    }
    .mint-tab-container{
      margin-top: 10px;
    }
  }
</style>
