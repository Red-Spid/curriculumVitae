var list, tar, url_, htmlName;
window.onload = function () {
    list = document.getElementsByClassName("list");
    tar = list[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
    // console.log(tar)
    // console.log(
    //     window.location.pathname
    // )
    // url_ = window.location.pathname.split("?")
    // if (url_.length == 1) {
    tar[1].setAttribute("class", 'active');
    // }
    htmlName = document.getElementsByClassName("bodyHtml");
    console.log(htmlName)
    moduleTarget(1)
}
function moduleTarget(index_) {
    for (let i = 0; i < htmlName.length; i++) {
        if (i == index_) {
            htmlName[i].setAttribute("style", 'display:block')
        } else {
            htmlName[i].setAttribute("style", 'display:none')
        }
    }
}
function replace() {
    console.log('执行')
}
/*
    白屏时间first paint 和可交互时间dom ready的关系
    白屏时间 = 开始渲染时间(首字节时间 + HTML下载完成时间) + 头部资源加载时间
    window.chrome.loadTimes().firstPaintTime
*/