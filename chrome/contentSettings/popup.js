var incognito;
var url;

function settingChanged(){
	var type=this.id;
	var setting=this.value;
	var pattern=/^file:/.test(url)?url:url.replace(/\/[^\/]*?$/,'/*');
	console.log(type+' setting for '+pattern+': '+setting);

	chrome.contentSettings[type].set({
		'primaryPattern':pattern,
		'setting':setting,
		'scope':(incognito ? 'incognito_session_only':'regular')
	});
}

document.addEventListener('DOMContentLoaded',function(){
	chrome.tabs.query({active:true,currentWindow:true},function(tabs){
		var current=tabs[0];
		incognito=current.incognito;
		url=current.url;
		//types 数组内容可以在浏览器输入chrome://settings/content，选择你需要的类型
		var types = ['cookies', 'images', 'javascript', 'plugins', 'popups',
	                 'notifications'];
	    types.forEach(function(type){
	    	chrome.contentSettings[type].get({
	    		'primaryUrl':url,
	    		'incognito':incognito
	    	},function(detail){
	    		document.getElementById(type).value=detail.setting;
	    	})
	    })
	})

	var selects=document.querySelectorAll('select');
	for (var i = selects.length - 1; i >= 0; i--) {
		selects[i].addEventListener('change',settingChanged)
	}
})