<template>
  <div class="register">
    <mt-header title="登录" style="background:#26a2ff;color:#fff;">
      
    </mt-header>
    <div class="formItem">

    <mt-field label="用户名" :value=myInfoData.USERNAME v-model="myInfoData.USERNAME" 
   ></mt-field>

      <mt-field label="密码"  v-model="myInfoData.PASSWORD"  type="password" ></mt-field>

      <div class="subBut" @click="registerSub">确定</div>
     
    </div>
  </div>
</template>
<script>
  import logApi from '../api/users'
  import { MessageBox } from 'mint-ui';
import Users from '../api/users.js'
  export default {
    name: 'register',
    data () {
      return {
    
        myInfoData: []
      }
    },
    methods:{
      //提交注册
      registerSub: function() {
        // if (this.phonStat == 'success' ) {
          if(this.myInfoData.USERNAME==null){alert('请输入用户名和密码！')} 
            else if(this.myInfoData.PASSWORD==null){alert('请输入密码！')}
              else{
          Users.validate(this.myInfoData,(ret, err) => {
            if (err) {
              alert('登录失败！请稍后重试！')
            }else{
              if(ret.data=='null'){
                   this.$msgbox('提示','用户名错误')
              }
                else{
                  if(ret.data.PASSWORD==this.myInfoData.PASSWORD){
                    localStorage.setItem("token",ret.data.Id)
                    localStorage.setItem("area",ret.data.AREAID)
                      this.$router.push('/index')
                  }
             else   this.$msgbox('提示','密码错误')
            }}
          })}
        // } else {
        //   MessageBox('提示', '请输入正确的信息后重试！');
        // }
      },
      // 发送验证码
     
    },
   
    mounted:function(){

    },
    components: {
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .register{
    margin-top:20px;
    .formItem{
      font-size: 18px;
      margin: 100px 30px;
      p{position: relative}
      .mint-cell{
        background: transparent;
      }
      .mint-cell-wrapper{
        background: transparent;
        padding: 0;
        border-bottom: solid 1px $cl14;
      }
      .subBut{
        background: $cl0;
        color:$cl1;
        text-align: center;
        line-height: 40px;
        margin: 20px 0;
      }
      .more{
        position: relative;
        width: 100%;
        left: 0px;
        top: 40px;
        text-align: center;
        i{
          color: $cl0;
        }
        .forgetPass{
          color:$cl9;
        }
      }
      .sendCode{position: absolute;right: 0px;top:6px;display: inline-block;font-size: 14px;color:$cl0;border:solid 1px $cl0;padding: 5px;}
    }
  }
</style>
