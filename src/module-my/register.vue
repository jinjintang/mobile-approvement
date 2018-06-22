<template>
  <div class="register">
    <mt-header title="修改个人资料" style="background:#26a2ff;color:#fff;">
      <router-link to="/personalData" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
    </mt-header>
    <div class="formItem">

    <mt-field label="姓名" :value=myInfoData.USERNAME placeholder="请输入姓名" v-model="myInfoData.NAME" 
   ></mt-field>

      <mt-field label="手机号"  v-model="myInfoData.PHONENUMBER" :state="phonStat" disableClear placeholder="请输入手机号"type="tel"></mt-field>
      <!-- <p><mt-field label="" placeholder="验证码" :state="telCodeStat" disableClear type="telCode"></mt-field>
        <span class="sendCode" @click="sendPhoCode" >发送验证码</span>
      </p> -->
       <mt-field label="邮箱" placeholder="请输入邮箱"type="email"  v-model="myInfoData.EMAIL"></mt-field>
       
      <div class="subBut" @click="registerSub">完成</div>
     
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
        phoneNum: '',
        telCode: '',
        mail: '',
        password: '',
        phonStat: '',
        telCodeStat: '',
        pasStat:'',
        myInfoData: []
      }
    },
    methods:{
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
      // 提交注册
      registerSub: function() {
        // if (this.phonStat == 'success' ) {
          
          Users.register(this.myInfoData,(ret, err) => {
            if (err) {
              alert('注册失败！请稍后重试！')
            }else{
              this.$router.push('/personalData')
            }
          })
        // } else {
        //   MessageBox('提示', '请输入正确的信息后重试！');
        // }
      },
      // 发送验证码
      sendPhoCode: function(){
        if(this.phoneNum === '' || this.phonStat != 'success'){
          MessageBox('提示', '请输入正确的手机号后重试！');
          return false
        }
        logApi.sendCode({mobile:this.phoneNum},(ret, err) => {
          if (err) {
            //alert('用户名或密码错误！请稍后重试！')
          }else{
            this.telCode = ret.headers.debug
          }
        })
      }
    },
    watch:{
      phoneNum(val, oldval){
        if(/^1[34578]\d{9}$/.test(val)){
          this.phonStat = 'success'
         
        }else{
         
          this.phonStat = 'warning'
        }
      },
      telCode(val, oldval){
          if(/^[A-Za-z0-9]{6}$/.test(val)){
            this.telCodeStat = 'success'
          }else{
            this.telCodeStat = 'warning'
          }
        },
      password(val, oldval){
        if(/^[A-Za-z0-9]{6,18}$/.test(val)){
          this.pasStat = 'success'
        }else{
          this.pasStat = 'warning'
        }
      }
    },
    mounted:function(){
this.init()
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
      margin: 0 30px;
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
