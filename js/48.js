let is_weixin_qq = (function() {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        //如果是微信则打开此链接   ！！按照书写标准写入到"内！！
        window.location.href = "http://weixin.qq.com"
    }else
    if (ua.match(/QQ/i) == 'qq') {
        //如果是QQ则打开此链接   ！！按照书写标准写入到"内！！
<<<<<<< Updated upstream
        window.location.href = "http://qq.com"
=======
<<<<<<< HEAD:js/48.js
        window.location.href = "http://qq.com"
=======
        window.location.href = "http://www.xiyuhh678.cn/ewmdy/"
>>>>>>> fe3aa0ac8c9bddf5a95e8fb0161f6944b15e6dc0:js/43.js
>>>>>>> Stashed changes
    } else {
        //如果不是微信也不是QQ则打开此链接   ！！按照书写标准写入到"内！！
        window.location.href = "http://www.gov.cn"
    }
})();