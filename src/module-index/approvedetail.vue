<template>
  <div class="learingIndexDetail">
    <div class="top"><span class="icon-back" @click="goBack">  </span> 课程详情  <!-- <span class="icon-search"></span>--></div>
    <!--<mt-header title="数据分析">-->
      <!--<router-link :to="{ go: '-1'}" slot="left">-->
        <!--<mt-button icon="back"></mt-button>-->
      <!--</router-link>-->
    <!--</mt-header>-->
    <div class="banner">
      <img src="../assets/banner.png" alt="">
      <span>{{form.COURSENAME}}</span>
    </div>
    <div class="contentInfo">
      <!--课程描述相关信息-->
      <div class="desInfo">
        <div class="des">
          {{form.COURSEABSTRACT}}
        </div>
        <ul>
          <li>等级： {{form.RANKNAME}}</li>
          <li>分类：{{form.CATEGORYNAME}}</li>
          <li>开班人数：{{form.OPENNUMBER}}</li>
          
        </ul>
      </div>
    
    
      <!--课程大纲-->
      <div class="courseItem">
        <div class="tit">课程内容</div>
         <p v-html="form.COURSECONTENT"></p>
      </div>
    </div>
    <mt-button type="primary" @click="pass(1)">通过</mt-button>

    <mt-button @click="pass(2)">拒绝</mt-button>
  </div>
</template>
<script>
 
  import IndexApi from '../api/learingInd.js'
  import cfg from './../utils/config'
  import Base from '../api/base'
import Users from '../api/users.js'
  export default {
    name: 'learingIndexDetail',
    mixins: [Base],
    data () {
      return {
        form :{},
   Aid:0,
   Pid:0,
                    // 课程大纲
      }
    },
    methods:{ 
   
    pass2(index){
      var scope=this
        IndexApi.areas({id:localStorage.getItem('area')},(ret, err) => {
          if (err) {
            console.log(err)
          }else{
                   scope.Pid=ret.data.PARENTID;
                   console.log(scope.Pid)
                   console.log(index)
if(scope.Pid!=0&&index==1){
  scope.form.STATE=2
   IndexApi.courseapprove(
    { COURSEID:scope.form.Id+'',APAREAID:scope.Pid+'',STATE:0},(ret, err) => {
          if (err) {
            console.log(err)
          }else{
           
            
           // this.getCourseItem(ret.data.id)
          }
        })
  


}
 else if (index==1)
   IndexApi.course2(scope.form,(ret, err) => {
          if (err) {
            console.log(err)
          }else{
             scope.$router.push({path:"/index/"});
            
           // this.getCourseItem(ret.data.id)
          }
        })


          }
        })
  


    },

      pass(index) {
        var scope=this;
           IndexApi.courseapprove2({id:scope.Aid, data:{
               STATE:index,
              COURSEID:scope.form.Id+'', 
              APAREAID:localStorage.getItem('area'),
              
            },},(ret, err) => {
          if (err) {
            console.log(err)
          }else{
             if(index==1||index==2){scope.pass2(index);}

this.$router.push({path:"/index/"});

            
           // this.getCourseItem(ret.data.id)
          }
        })
         
 

      }
       
    
  ,
    
      // 初始化数据
      init: function() {
        var scope=this;
        IndexApi.getcourse({id:scope.$route.params.classId},(ret, err) => {
          if (err) {
            console.log(err)
          }else{
            this.form = ret.data
            
           // this.getCourseItem(ret.data.id)
          }
        })
        
      },

      //返回上一页
      goBack: function() {
         this.$router.push({path:"/index/"});
      }
    },
     
    mounted:function(){
    
     this.Aid=this.$route.query.Aid;
       this.init()
    },
   
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
.learingIndexDetail{
  margin-top: 20px;
  text-align: center;
  .banner{
    position: relative;
    z-index: 99;
    color:$cl1;
    font-size: 24px;
    span{
      font-weight: bold;
      position: absolute;
      top:50%;
      left:50%;
      transform:translate(-50%, -50%);
    }
  }
  .top{
    background: $cl1;
    position: relative;
    line-height: 40px;
    color:$cl7;
    font-size: 14px;
    span:before{font-size: 15px;}
    span:nth-child(1){
      position: absolute;
      top:10px;
      left:10px;
    }
    span:nth-child(2){
      position: absolute;
      top:10px;
      right:15px;
    }
  }
  .contentInfo{
    padding:10px;
    margin-bottom: 60px;
    .desInfo{
      background: $cl1;
      font-size: 12px;
      .des{
        color: $cl6;
        line-height: 28px;
        text-align: left;
        padding:10px;
        border-bottom: solid 1px $cl5;
      }
      ul{
        color:$cl3;
        width: 100%;
        display: flex;
        padding:5px 0px;
        li{
          flex: 1;
          text-align: center;
          border-right: solid 1px $cl5;
          em{
            color:$cl15;
          }
        }
        li:last-child{
          border:none;
        }
      }
    }
  }
  .teachInfo{
    display: flex;
    padding:10px 0;
    background: $cl1;
    margin: 10px 0;
    .teach{
      flex: 1;
      text-align: center;
      img{
        width: 50px;
        border-right: 50px;
        display: inline-block;
      }
    }
    .info{
      flex: 3;
      text-align: left;
      color:$cl6;
      font-size: 14px;
      p{
        height: 25px;
        line-height: 25px;
        overflow: hidden;
      }
      .name{
        color: $cl3;
        font-size: 16px;
      }
    }
    .goAbout{
      flex: 1;
      color:$cl9;
      i{
        position: relative;
        top:20px;
      }
    }
  }
  .fitPeop{
    padding:10px;
    background: $cl1;
    margin: 10px 0;
    font-size: 12px;
    line-height: 28px;
    color:$cl6;
    text-align: left;
    .tit{
      font-size: 14px;
      color: $cl3;
    }
  }
  .courseItem{
    padding:10px;
    background: $cl1;
    margin: 10px 0;
    font-size: 12px;
    line-height: 28px;
    color:$cl6;
    text-align: left;
    .tit{
      font-size: 14px;
      color: $cl3;
    }
    ul{
      color:$cl3;
      padding-left: 10px;
      li{
        color:$cl6;
        font-size: 12px;
        padding-left: 20px;
       span{
         font-size: 10px;
         padding:2px 4px 0px 4px;
         margin-right: 3px;
         border:solid 1px $cl9
       }
        a{
          position: absolute;
          right: 20px;
          color:$cl0;
        }
      }
    }
    ul:before{
      content: ' ● ';
      font-size: 20px;
      color:$cl5;
      position: relative;
      top:2px;
    }
    li:before{
      content: ' ';
      display: inline-block;
      position: absolute;
      left: 35px;
      color:$cl7;
      width: 18px;
      height: 30px;
      border-left: solid 1px $cl5;
    }
  }
  .payCourse{
    position: fixed;
    bottom:0px;
    left:0px;
    width: 100%;
    text-align: left;
    background: $cl1;
    /*padding-left: 30px;*/
    font-size: 18px;
    line-height: 50px;
    color:$cl13;
    a{
      position: absolute;
      right: 0px;
      width: 50%;
      background: $cl0;
      color:$cl1;
      text-align: center;
    }
  }
  .startLearing{
    font-size: 18px;
    background: $cl0;
    color:$cl1;
    text-align: center;
    line-height: 50px;
    position: fixed;
    bottom:0px;
    left:0px;
    width: 100%;
    a{
      color:$cl1;
      display: inline-block;
      width: 100%;
      height: 50px;
    }
  }
}
</style>
