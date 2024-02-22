let barrageSpeed_count = 0;
function initPkg_LiveTool_BarrageSpeed() {
    // LiveTool_BarrageSpeed_Dom();
    setInterval(() => {
        let barrageSpeed = Number((barrageSpeed_count / 5) * 60).toFixed(0);
        barrageSpeed_count = 0;
        document.getElementsByClassName("ChatSend-txt")[0].placeholder = "弹幕时速：" + barrageSpeed + "条/分";
        // document.getElementsByClassName("barrageSpeed__value")[0].innerText = barrageSpeed;
    }, 5000)
}

function LiveTool_BarrageSpeed_Dom() {
    let a = document.createElement("div");
    a.className = "barrageSpeed";
    let html = `
        弹幕时速：<span class='barrageSpeed__value'>**</span>条/分 按↑或↓查看历史弹幕 视频区按←或→可回退快进 按ctrl+滚轮可放大缩小
    `
    a.innerHTML = html;
    
    let b = document.getElementsByClassName("Chat")[0];
    b.insertBefore(a, b.childNodes[0]);
}

function initPkg_LiveTool_BarrageSpeed_Handle(text) {
    if (getType(text) == "chatmsg") {
        barrageSpeed_count++;
    }
}