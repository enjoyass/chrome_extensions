chrome.browserAction.onClicked.addListener(function(tab){
	console.log('Truning '+tab.url+' red!')
	chrome.tabs.executeScript({
		code: 'document.body.style.backgroundColor="red"'
	})
})
