
function talktoServer(url) {
    var req = newXMLHTTPRequst();
    var callbackHandler = getReadyStateHandler(req);
    req.onreadystatechange = callbackHandler;
    req.open("POST", url, true);
    req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    var testmsg = document.getElementById("testmsg");
    var msg_value = testmsg.value;
    req.send("msg=" + msg_value);
}

//创建XMLHTTP对象
function newXMLHTTPRequst() {
    var xmlreq = false;
    if (window.XMLHttpRequest) {
        xmlreq = new XMLHttpRequest();

    } else if (window.ActiveXobject) {
        try {
            xmlreq = new ActiveXObject("Msxm12.XMLHTTP");
        } catch (e1) {
            try {
                xmlreq = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (e2) {
            }
        }
    }
    return xmlreq;
}

//服务器回调函数
function getReadyStateHandler(req) {
    return function () {
        if (req.readyState == 4) {
            if (req.status == 200) {
                var msg_display = document.getElementById("msg_display");
                msg_display.innerHTML = req.responseText;
            } else {
                var hellomsg = document.getElementById("hellomsg");
                hellomsg.innerHTML = "ERROR" + req.status;
            }
        }
    }
}