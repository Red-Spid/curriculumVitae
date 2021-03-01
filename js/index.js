

var styleClass = [['body-list bodyHtml clo-w'], ["bodyHtml bodyList"], ['MessageBoard']];
var htmlTarget = [
  [
    `<div class="head-sass head-left">
        <h1 class="btn">个人信息</h1>
        <div class="content pa">
          <div class="clo-w">
            <div class="clo-12">马兆国 | 男 | 1998</div>
            <div class="clo-12">专科 | 国家开放大学 | 计算机专业</div>
            <div class="clo-12">前端开发 | 2年开发经验</div>
            <div class="clo-6">期望职位：Web前端开发</div>
            <div class="clo-6">期望城市：北京</div>
            <div class="box bg-gray-lightest">
              Github：
              <a href="https://github.com/Red-Spid" target="_blank"
                >https://github.com/Red-Spid</a
              >
            </div>
          </div>
        </div>
      </div>
      <div class="head-sass head-left">
        <h1 class="btn">开源项目</h1>
        <div class="content pa">
          <div class="clo-w"></div>
        </div>
      </div>
      <div class="head-sass head-left">
        <h1 class="btn">联系方式</h1>
        <div class="content pa">
          <div class="clo-w">
            <div class="clo-12">电话： 17610199318</div>
            <div class="clo-12 Website">邮箱： <a>mainc@foxmail.com</a></div>
            <div class="clo-12 Website">
              网站： <a>red-spid.github.io//curriculumVitae/</a>
            </div>
          </div>
        </div>
      </div>
      <div class="head-sass head-left">
        <h1 class="btn">掌握技能</h1>
        <div class="content pa">
          <div class="clo-w">
            <div class="bg-gray-lightest">
              HTML/CSS能与UI对接，100%重构网站静态页面。
            </div>
            <div class="bg-gray-lightest">
              合理布局，JavaScript操作DOM框架与服务器，数据库操作，前后端分离技术，前后台协作开发。
            </div>
            <div class="bg-gray-lightest">
              熟悉NPM(Yarn)，Node模块fs，http，路由，处理请求，express4（koa）。
            </div>
            <div class="bg-gray-lightest">
              掌握Vue2.x/Vue3基础，Vue-router，Vuex等等。
            </div>
          </div>
        </div>
      </div>
      <div class="head-sass head-left">
        <h1 class="btn">项目经验</h1>
        <div class="content pa">
          <div class="clo-w"></div>
        </div>
      </div>
      <div class="head-sass head-left margin">
        <h1 class="btn">自我评价</h1>
        <div class="content pa">
          <div class="clo-w">
            <div class="bg-gray-lightest">
              团队配合能力:善于沟通,有一定团队协作经验,具备一定的活动策划和组织协调能力。
            </div>
            <div class="bg-gray-lightest">
              工作态度评价:良好的心态和责任感,吃苦耐劳,擅于管理时间,勇于面对变化和挑战。
            </div>
            <div class="bg-gray-lightest">
              自主学习能力:习惯制定切实可行的学习计划,上岗后能积极主动学习岗位所需知识技能
            </div>
          </div>
        </div>
      </div>`
  ],
  [`
    <div class="artical">
        <div class="dotts"></div>
        <a class="date" href="/detail?id=5e9efd26601bd82819211a1e">
            <span class="trig"></span>
            <span class="dates">2019.03.20</span>
        </a>
        <div class="art-container">
          <div class="line"></div>
          <div class="art-content">
            <p class="art-title">
              <a href="/detail?id=5e9efd26601bd82819211a1e"
                >ubuntu 从零搭建环境，部署项目</a>
            </p>
            <div class="art-img">
              <img src="./img/uploads1.jpg" alt="文章配图" />
            </div>
            <div class="art-detail">
              <p>从零开始搭建服务器环境的步骤</p>
            </div>
          </div>
        </div>
      </div >
      <div class="artical">
        <div class="dotts"></div>
          <a class="date" href="/detail?id=5e9ef5c6601bd82819211a1d">
            <span class="trig"></span>
            <span class="dates">2017.07.25</span>
          </a>
        <div class="art-container">
          <div class="line"></div>
          <div class="art-content">
            <p class="art-title">
              <a href="/detail?id=5e9ef5c6601bd82819211a1d">express+mongoDB建立与前端通信的数据库</a>
            </p>
            <div class="art-img">
              <img src="./img/uploads2.jpg" alt="文章配图" />
            </div>
            <div class="art-detail">
              <p>
                        学习过程中所记录的笔记，按着步骤来可以自己搭建一个能通信的服务器，遇到不懂的地方问度娘。
                        在 我的码云和github上有搭建完成后的代码，前端用的Vue框架。
                        不完善的地方还在修改ing~
              </p>
            </div>
          </div>
          </div>
      </div>
        <div class="artical">
          <div class="dotts"></div>
          <a class="date" href="/detail?id=5e9ef570601bd82819211a1c"><span class="trig"></span><span class="dates">2017.02.19</span></a>
          <div class="art-container">
            <div class="line"></div>
            <div class="art-content">
              <p class="art-title">
                <a href="/detail?id=5e9ef570601bd82819211a1c">神奇的Cordova -- 利用H5进行APP开发</a>
              </p>
              <div class="art-img">
                <img src="./img/uploads3.jpg" alt="文章配图" />
              </div>
              <div class="art-detail">
                <p>
                        一直以来app的开发都分为android版本和ios版本,同一款app需要写两种版本，版本有差异不说，耗费的成本加成。
                        cordova的出现就是一股清流，它能实现将h5页面打包成android或ios版本，实现了android、ios、pc端页面的统一。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="artical">
          <div class="dotts"></div>
          <a class="date" href="/detail?id=5e9ef52d601bd82819211a1b"><span class="trig"></span><span class="dates">2016.12.12</span></a>
          <div class="art-container">
            <div class="line"></div>
            <div class="art-content">
              <p class="art-title">
                <a href="/detail?id=5e9ef52d601bd82819211a1b">谷歌地图初触电</a>
              </p>
              <div class="art-img">
                <img src="./img/uploads4.jpg" alt="文章配图" />
              </div>
              <div class="art-detail">
                <p>
                        最近的项目里面用到了谷歌地图，以前开发过百度地图，但是都涉足很浅很浅，虽然这次也只用到了drawingManager
                        下面几个画图组件。
                        氮素！写几百行的代码实现出功能，这样充实的学习过程很令人满足讷。
                </p>
              </div>
            </div>
          </div>
        </div>
        <div class="artical">
          <div class="dotts"></div>
          <a class="date" href="/detail?id=5e9ef4d7601bd82819211a1a"><span class="trig"></span><span class="dates">2016.11.12</span></a>
          <div class="art-container">
            <div class="line"></div>
            <div class="art-content">
              <p class="art-title">
                <a href="/detail?id=5e9ef4d7601bd82819211a1a">快一个月没写文章总结了</a>
              </p>
              <div class="art-img">
                <img src="./img/uploads5.jpg" alt="文章配图" />
              </div>
              <div class="art-detail">
                <p>
                        最近换工作，忙着找房子+搬家+努力生活，忙得已经近一个月没写总结了，虽然没写，但是我对前端滴热情一如以往。
                        最近在学习微信小程序，微信小程序是个坑啊，才推出一两个月，api已经废除了好多了。
                </p>
              </div>
            </div>
          </div>
        </div>`
  ],
  [
    `<h1>留言板</h1>
      <div class="Bjq">
        <div class="editor_toolbar">
            <i class="iconfont icon-moon"></i>
            <span>先登录吧！</span> 
            <span class="fr">登录</span>
        </div>
        <div class="editor_textarea">
          <textarea class="ant-input"></textarea>
        </div>
      </div>
      <div class="CommentList">
        <div>
          <div><small>71楼</small></div>
          <div class="ant-comment">
            <div class="ant-comment-inner">
              <div>
                <div class="redius">
                  <div>新</div>
                </div>
                <div class="right">
                  <span>新</span> 
                  <span>3 天前</span>
                  <div>真棒 优秀的前端工程师</div>
                  <div><a href="">回复</a></div>
                </div>
              </div>
              <div class="ceng">
                <div class="redius">
                  <div>新</div>
                </div>
                <div class="right">
                  <span>新</span>
                  <span>3 天前</span>
                  <div>真棒 优秀的前端工程师</div>
                  <div><a href="">回复</a></div>
                </div>
              </div>  
            </div>
            <div class="ant-comment-content"></div>
            <div class="ant-comment-nested"></div>
          </div>
          <div class="ant-divider ant-divider-horizontal"></div>
          </div>
          <div class="ant-divider"> 
            <div class="b1">
              <button type="button" class="ant-btn">
                <span>加载更多</span>
              </button>
            </div>
          </div>
        </div>`
  ]
]
var list, tar, url_, htmlName, audio, interTrans, a = 1;;
window.onload = function () {
  list = document.getElementsByClassName("list");
  tar = list[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
  fun(tar);
  htmlTag(htmlTarget[2], styleClass[2])
  listStyle(2);
  pdfImg(2);
  trans();
}
function trans() {
  audio = document.getElementsByClassName("audio");
  audio[0].addEventListener('click', function () {
    var music = document.getElementById("music");
    if (music !== null) {
      //检测播放是否已暂停.audio.paused 在播放器播放时返回false.
      if (music.paused) {
        music.play();//audio.play();// 这个就是播放
        setInterval(func, 10)
      }else {
        clearInterval(interval)
        music.pause();// 这个就是暂停
      }
    }
    // console.log(music)
  })
  var interval = setInterval(func, 10); //启动,func不能使用括号

  function func() {
    a++;
    if (a >= 360) {
      a = 1;
      clearInterval(interval)
      interval = setInterval(func, 10);
    }
    audio[0].setAttribute("style", "transform: rotate(" + a + "deg);")
    // console.log(audio)
    console.log('aaa')
  }

}

// function clearInterval(a){
//   console.log(a);
// }

function listStyle(index_) {
  for (let i = 0; i < tar.length; i++) {
    tar[i].className = '';
  }
  tar[index_].setAttribute("class", 'active');
}
function htmlTag(html_, class_) {
  var div = document.createElement("div");
  div.setAttribute("class", class_);
  div.innerHTML = html_;
  document.body.appendChild(div);
}
function fun(dom) {
  for (let i = 0; i < dom.length; i++) {
    dom[i].index_ = i;
    dom[i].addEventListener("click", function () {
      replace(this.index_);
    })
  }
}
function replace(a) {
  pdfImg(a)
  remove();
  listStyle(a);
  htmlTag(htmlTarget[a], styleClass[a])
}
function pdfImg(a) {
  var pdf = document.getElementsByClassName("pfd")[0];
  if (a == 0) {
    pdf.setAttribute("style", 'display:block')
  } else {
    pdf.setAttribute("style", 'display:none')
  }
}
function remove() {
  var list = document.body.childNodes;
  list[list.length - 1].remove();
  // console.log(list);
}
function eventStop(event) {
  var e = event || window.event
  e.preventDefault()
  document.body.scrollIntoView()
  document.body.scrollTop = document.documentElement.scrollTop = 0
}
function updateNav() {
  console.log(
    document.body.scrollHeight, '--------1'
  )
  console.log(
    window.screen.height, '-----------2222222'
  )
  console.log(
    document.body.scrollTop
  )
  // if (document.body.scrollHeight <= window.screen.height + document.body.scrollTop) {
  //     console.log('小于')
  // } else {
  //     console.log('大于')
  // }
}


window.addEventListener('scroll', updateNav);

/*
    白屏时间first paint 和可交互时间dom ready的关系
    白屏时间 = 开始渲染时间(首字节时间 + HTML下载完成时间) + 头部资源加载时间
    window.chrome.loadTimes().firstPaintTime
*/
function to() {
  //  document.getElementById("body").src
  // var frame1 = document.getElementById("rFrame")
  // console.log("执行", frame1)

  // .src = "./html/AlittleBit.html"
}