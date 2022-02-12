
import general from "../../global/index.js";

// console.log( general,11111 );

var cApi = [
    {
        name: "github", 
        lc:{
            props: ["my", "list"],
            directives:{
                trigger:{
                 inserted(el, binging){
                    console.log(el,binging)
                    el.id == 'nav0' ? el.click() : null // 只点击第一个，id是在循环中手动添加的
                   // $(el).trigger('click')  // 所有都触发一次,然后就是最后一个
                  }
                }
            },
        }
    },
    {
        name: "curriculumvitae",
        lc:{
            props: ["infor"],
        },
        function: (_self) => {
            // console.log( _self.$refs.add, 1111 )
        }

    },
    {
        name: "dropBYdrop",
        lc:{
            props: ["data"], 
        },
    },
    {
        name: "comments",
        lc:{
            props: ["data", "list", "isdom"],
        }
    },
    {
        name: "signin",
        lc:{
            props: ["data", "list"],
        }
    },
    {
        name:"abgm",
        lc:{
            props:[],
            data(){
                return {
                    music:false,
                }
            },
            beforeRouteLeave(to, from, next) {
                // 导航离开该组件的对应路由时调用
                // 可以访问组件实例 `this`
                console.log( this )
            },
            mounted() {
                console.log( this.$route );
                this.trans();
                // console.log( this.$router.options.history.location,this.$route )  
            },
            methods: {
                trans(){
                    const music = this.$refs.music;
                    console.log( music );
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
            },
        }
    }
]
const assembly = function( _this = "" ){

    cApi.forEach( value => {
        general.tempDom(
            _this, value.name, value.lc
        )
    })

}

export default assembly;
