<template>
  <div class="indexHeader">
    <div class="search" @click="goSeach" ><i class="icon-search" ></i> <input type="text" @blur="" @focus="" :style="{width: seachWt}" v-model="searchName" placeholder="青果公益在线"></div>
    <mt-swipe :auto="3000">
      <mt-swipe-item v-for="(item, index) in bannerDat" :key="index"><img :src="imgBaseUrl + item" width="100%" alt=""></mt-swipe-item>
    </mt-swipe>
  </div>
</template>

<script>
  import IndexApi from '../api/learingInd.js'
  import cfg from './../utils/config'

  export default {
    name: 'indexHeader',
    data () {
      return {
        bannerDat: [],
        searchName: '',
        seachWt: '',
        imgBaseUrl: cfg.imgBaseUrl,
      }
    },
    methods: {
      init:function (){
        
            this.bannerDat = ['static/upload/avatar/1804041932398d5690e2-d063-4750-ba78-b3225435850a.jpg/',
            'static/upload/avatar/1804132206257f1b8e19-54a2-4fdc-8168-f39608a169e4.jpg',
            'static/upload/avatar/1804132215566B23B65E87FEA4B5C7A9426345807769.jpg']
         
      },
      // 首页搜索
      goSeach: function() {
        this.$router.push({path:'/search/'})
      },
      // 搜索处理
      onblurEvent: function() {
        if (this.searchName === '') {
          this.seachWt = '65px'
        } else {
          this.seachWt = '90%'
        }
      },
      focusEvent: function() {
          this.seachWt = '90%'
      }
    },
    mounted:function(){
      this.init()
    }
  }
</script>

<style lang="scss">
  @import "../assets/baseScss";
  .indexHeader{
  margin-top:15px;
    height: 200px;
    position: relative;
  }
  .indexHeader{
    .search{
      position: absolute;
      z-index: 99;
      width: 90%;
      left: 5%;
      top:10px;
      background: rgba(255, 255, 255, 0.9);
      color:$cl4;
      line-height: 35px;
      input{
        height: 35px;
        width: 65px;
        line-height: 35px;
        background: transparent;
        border: none;
        font-size: 16px;
        padding:0 1px;
      }
      input:focus{
        outline:medium;
        width: 85%;
      }
      i:before{
        position: relative;
        font-size: 16px;
        top:1px;
        left: 3px;
      }
    }
  }
</style>
