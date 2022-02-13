var signin = `<main class="signIn" v-if="data.is" @click="data.is = !data.is">

<div class="ant-modal-mask">

  <div class="ant-modal-content">
    
    <div class="ant-modal-header">登录</div>
    
    <div class="ant-modal-body">
      
      <div>
        <span class="ant-input-group-addon">昵称(必填)</span>
        <input placeholder="xx" type="text" id="dynamic_rule_user" data-__meta="[object Object]" data-__field="[object Object]" class="ant-input" value="">
        <!-- 昵称已存在，请验证邮箱号登陆 -->
      </div>

      <div>
        <span class="ant-input-group-addon">邮箱(必填)</span>
        <input placeholder="xx@xx.xx" type="text" id="dynamic_rule_email" data-__meta="[object Object]" data-__field="[object Object]" class="ant-input" value="">
        <!-- 昵称已存在，请验证邮箱号登陆 -->
      </div>

      <div>
        <span class="ant-input-group-addon">网址(选填)</span>
        <input placeholder="http://xx.xx" type="text" id="dynamic_rule_weburl" data-__meta="[object Object]" data-__field="[object Object]" class="ant-input" value="">
      </div>

    </div>
    
  </div>

</div>

</main>`
export default {
  name: "signin",
  template: signin,
  props: [],
  data() {
    return {
      music: false,
    }
  },
  beforeRouteLeave(to, from, next) {
    // 导航离开该组件的对应路由时调用
    // 可以访问组件实例 `this`
    console.log(this)
  },
  mounted() {
    console.log(this.$route);
    this.trans();
    // console.log( this.$router.options.history.location,this.$route )  
  },
  methods: {
    trans() {
      const music = this.$refs.music;
      console.log(music);
      if (music !== null) {
        //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
        // if (music.paused) {
        // console.log( "没有播放" )
        // music.play(); //audio.play();// 这个就是播放
        // clearInterval(interval)
        // interval = setInterval(func, 10);
        // }else {
        // console.log( "暂停" )
        // clearInterval(interval)
        // music.pause();// 这个就是暂停
        // }
      }
      // console.log(music)

      // var interval = setInterval(func, 10); //启动,func不能使用括号
      // // setTimeout(()=>{
      // //   audio.onclick()
      // // },200)
      // function func() {
      //     a++;
      //     if (a >= 360) {
      //     a = 1;
      //     clearInterval(interval)
      //     interval = setInterval(func, 10);
      //     }
      //     audio.setAttribute("style", "transform: rotate(" + a + "deg);")
      //     // console.log(audio)
      //     // console.log('aaa')
      // }

    }
  }
}