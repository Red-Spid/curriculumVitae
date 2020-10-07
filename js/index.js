var list, tar, url_;
window.onload = function () {
    list = document.getElementsByClassName("list");
    tar = list[0].getElementsByTagName("ul")[0].getElementsByTagName("li");
    console.log(tar)
    console.log(
        window.location.pathname
    )
    url_ = window.location.pathname.split("?")
    if (url_.length == 1) {
        tar[url_.length - 1].setAttribute("class", 'active');
    }

}
function replace() {
    console.log('执行')
}