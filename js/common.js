function getFormatDate() {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const day = now.getDate()
    const hours = now.getHours()
    const minutes = now.getMinutes()
    const seconds = now.getSeconds()
    const date = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`
    return date
}
let timer = setInterval(() => {
    const dom = document.getElementById('message') || {}
    const time = getFormatDate()
    dom.innerText = time
    if (time.split(' ')[1] === '18:0:0') {
        desktop_notification();
    }
}, 1000)

function desktop_notification() {
    chrome.notifications.create("id", {
        type: 'basic',
        title: '下班时间到！',  // 这里我故意使显示这个为空，显得没那么拥挤
        message: '请打卡！',
        iconUrl: 'img/logo.png'
    });
    // clearTimeout(timer)
    // timer = null
    // 通知定时2秒进行清理
    setTimeout(function (e) {
        // 这里的id只要和创建的时候设置id值一样就行了，就可以清理对应id的通知了
        chrome.notifications.clear("id");
    }, 10000);
}