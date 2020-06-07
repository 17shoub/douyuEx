var isGetTreasure = false;
function initPkg_ExpandTool_Treasure() {
    ExpandTool_Treasure_insertDom();
    ExpandTool_Treasure_insertFunc();
    ExpandTool_Treasure_Set();
}


function ExpandTool_Treasure_insertDom() {
    let html = "";
    html += '<label><input style="margin-top:5px" id="extool__treasure_start" type="checkbox">自动抢宝箱</label>';
    
    let a = document.createElement("div");
    a.className = "extool__treasure";
    a.innerHTML = html;
    let b = document.getElementsByClassName("extool")[0];
    b.insertBefore(a, b.childNodes[0]);

}
function ExpandTool_Treasure_insertFunc() {
    document.getElementById("extool__treasure_start").addEventListener("click", function() {
        verifyFans("5189167", 13).then(r => { // 请尊重作者劳动成果，在此感谢
            if (r == true) {
                let ischecked = document.getElementById("extool__treasure_start").checked;
                if (ischecked == true) {
                    // 开始
                    isGetTreasure = true;
                } else{
                    // 停止
                    isGetTreasure = false;
                }
                saveData_Treasure();
            } else {
                document.getElementById("extool__treasure_start").checked = false;
                showMessage("本功能需拥有13级歆崽粉丝牌(5189167)才可使用", "error");
            }
        })
	});

}


function saveData_Treasure() {
	isGetTreasure = document.getElementById("extool__treasure_start").checked;
	let data = {
		isGetTreasure: isGetTreasure
	}
	localStorage.setItem("ExSave_Treasure", JSON.stringify(data)); // 存储弹幕列表
}

function ExpandTool_Treasure_Set() {
	// 设置初始化
    let ret = localStorage.getItem("ExSave_Treasure");
	if (ret != null) {
        let retJson = JSON.parse(ret);
        if (retJson.isGetTreasure == true) {
            verifyFans("5189167", 13).then(r => {
                if (r == true) {
                    document.getElementById("extool__treasure_start").click();
                } else {
                    let data = {
                        isGetTreasure: false
                    }
                    localStorage.setItem("ExSave_Treasure", JSON.stringify(data)); // 存储弹幕列表
                    showMessage("本功能需拥有13级歆崽粉丝牌(5189167)才可使用", "error");
                }
            })
        }
	}
}