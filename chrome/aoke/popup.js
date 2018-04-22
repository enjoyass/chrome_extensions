
var btn=document.getElementById("calc")
btn.addEventListener('click',function(e){
	var precision1=document.getElementById("precision1").value
	var precision2=document.getElementById("precision2").value
	var odds1=document.getElementById("odds1").value
	var odds2=document.getElementById("odds2").value
	calcAndProce(precision1,precision1,odds1,odds2)
})


function setChildTextNode(elementId, text) {
	  document.getElementById(elementId).innerText = text;
}

function calcAndProce(precision1,precision1,odds1,odds2){
	// chrome.tabs.query可以通过回调函数获得当前页面的信息tabs

        chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
        // 发送一个copy消息出去
            chrome.tabs.sendMessage(tabs[0].id, { action: "copy" }, function (response) {
      // 这里的回调函数接收到了要抓取的值，获取值得操作在下方content-script.js
      // 将值存在background.js的data属性里面。
      			console.log(response);
      			alert(response)
                var win = chrome.extension.getBackgroundPage();
                console.log(win.data)
                
            });  
        }); 
}

