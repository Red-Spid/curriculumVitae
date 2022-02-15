# css3 CSS3 被拆分为"模块"。旧规范已拆分成小块，还增加了新的。
> 一些重要的css3模块如何下
- 选择器
- 盒模型
- 背景和边框
- 文字特效
- 2d-3d转换
- 动画
- 多列布局
- 用户界面

## css3 border 边框

### border-radius 圆角
> 浏览器兼容 -webkit- -ms- -moz-
#### border-radius 
> 每个半径的四个值的顺序是：左上角，右上角，右下角，左下角。如果省略左下角，右上角是相同的。如果省略右下角，左上角是相同的。如果省略右上角，左上角是相同的
~~~css
border-radius: 2em 1em 4em / 0.5em 3em;
is equivalent to:
border-top-left-radius: 2em 0.5em;
border-top-right-radius: 1em 3em;
border-bottom-right-radius: 4em 0.5em;
border-bottom-left-radius: 1em 3em;
~~~

#### border-image
> border-image: (source/来源) (slice/片) (width) (outset/开始) (repeat|initial|inherit/重复|初始|继承；);
~~~css
 #borderimg1 { 
    border: 10px solid transparent;
    padding: 15px;
    -webkit-border-image: url(../../image/../../image/border.png) 30 round; /* Safari 3.1-5 */
    -o-border-image: url(../../image/border.png) 30 round; /* Opera 11-12.1 */
    border-image: url(../../image/border.png) 30 round;
}
    
#borderimg2 { 
    border: 10px solid transparent;
    padding: 15px;
    -webkit-border-image: url(../../image/border.png) 30 stretch; /* Safari 3.1-5 */
    -o-border-image: url(../../image/border.png) 30 stretch; /* Opera 11-12.1 */
    border-image: url(../../image/border.png) 30 stretch;
}
~~~

#### border-shadow
> box-shadow: h-shadow v-shadow blur spread color inset;
~~~css
    box-shadow: 10px 10px 5px #888888;
~~~

### background
- background-image
- background-size
- background-origin
- background-clip

#### background-image

##### 多个背景
~~~css
    background-image: url("../../image/img_flwr.gif"), url("../../image/paper.gif");
    background-position: right bottom, left top;
    background-repeat: no-repeat, repeat;
    or
    background: url("../../image/img_flwr.gif") right bottom no-repeat, url("../../image/paper.gif") left top repeat;
~~~

##### 渐变linear-gradient() 线性
> background-image: linear-gradient(direction, color-stop1, color-stop2, ...);
~~~css
    background-image: linear-gradient( red, yellow, blue);
    角度 45
    background-image: linear-gradient(45deg, red, yellow, blue);
    blue yellow red
    background-image: linear-gradient(to left top, red, yellow, blue);
    
    /* 从下到上，从red开始渐变、到高度40%位置是绿色渐变开始、最后以blue结束 */
    background-image: linear-gradient(0deg, blue, green 40%, red);
    /* left ~ right */
    background-image: linear-gradient(to right, red,orange,yellow,green,blue,indigo,violet);
    /* 以下实例演示了从左上角到右下角的线性渐变: */
    background-image: linear-gradient(to bottom right, red , yellow);
    background-image: linear-gradient(to right, rgba(255,0,0,0), rgba(255,0,0,1));

~~~

#### background-size
> background-size: length|percentage cover/contain;
~~~css
    background:url("../../image/img_flwr.gif");
    background-size:6.66rem 5rem;
    background-repeat:no-repeat;
    padding-top:6.66rem;
    background-size: cover/contain;
~~~

#### background-origin
> border-box content-box padding-box
~~~css
div{
    border:10px solid black;
    padding:35px;
    background-image:url('../../image/smiley.gif');
    background-repeat:no-repeat;
    background-position:left;
}
.div1{
    background-origin:border-box;
}
.div2{
    background-origin:content-box;
}
.div3{
    background-origin:padding-box;
}
~~~

#### background-clip
> padding-box content-box border-box
~~~css
.example1 {
            border: 10px dotted black;
            padding:35px;
            background: yellow;
        }
        
        .example2 {
            border: 10px dotted black;
            padding:35px;
            background: yellow;
            background-clip: padding-box;
        }
        
        .example3 {
            border: 10px dotted black;
            padding:35px;
            background: yellow;
            background-clip: content-box;
        }
~~~