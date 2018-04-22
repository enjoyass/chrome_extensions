chrome.browserAction.onClicked.addListener(function(tab){
	var action_url="javascript:window.print();";
	chrome.tabs.update(tab.id,{url:action_url});
})
