var abgm = `
    <div class="install">

        <div title="下载PDF简历" class="pfd" v-if=" $route.fullPath == '/personal/resume' ">
            <svg viewBox="64 64 892 892" focusable="false" data-icon="download" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path
                    d="M505.7 661a8 8 0 0 0 12.6 0l112-141.7c4.1-5.2.4-12.9-6.3-12.9h-74.1V168c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v338.3H400c-6.7 0-10.4 7.7-6.3 12.9l112 141.8zM878 626h-60c-4.4 0-8 3.6-8 8v154H214V634c0-4.4-3.6-8-8-8h-60c-4.4 0-8 3.6-8 8v198c0 17.7 14.3 32 32 32h684c17.7 0 32-14.3 32-32V634c0-4.4-3.6-8-8-8z">
                </path>
            </svg>
        </div>
        <div class="audio" id="audio" v-else-if=" $route.fullPath == '/personal/comments' ">
            <img src="./img/ins.png" />
            <audio src="./music/bgm.mp3" autoplay="autoplay" loop="" hidden="" ref="music" id="music"></audio>
        </div>
        <div id="topReurn">
            <a href="#" onclick="eventStop()" title="返回顶部">
                <svg t="1565238236954" fill="currentColor" viewBox="0 0 1024 1024" version="1.1"
                    xmlns="http://www.w3.org/2000/svg" p-id="3644" width="200" height="200">
                    <path d="M483.875 230.75a28.125 28.125 0 0 1 56.25 0v590.625a28.125 28.125 0 0 1-56.25 0z" p-id="3645"></path>
                    <path
                        d="M512 242.28125l-205.03125 205.3125a28.125 28.125 0 1 1-39.9375-39.9375l225-225a28.125 28.125 0 0 1 39.9375 0l225 225a28.125 28.125 0 0 1-39.9375 39.9375z"
                        p-id="3646"></path>
                </svg>
            </a>
        </div>
    </div>`

var a = {
    name: "abgm",
    template: abgm,
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
                //     console.log("没有播放")
                //     music.play(); //audio.play();// 这个就是播放
                //     clearInterval(interval)
                //     interval = setInterval(func, 10);
                // } else {
                //     console.log("暂停")
                //     clearInterval(interval)
                //     music.pause();// 这个就是暂停
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
export default a;