function click(e){
	chrome.tabs.executeScript(null,{
		code:"document.body.style.backgroundColor='"+e.target.id+"'"
	});
	// window.close();
}
document.addEventListener("DOMContentLoaded",function(){
	var divs=document.querySelectorAll('div');
	for (var i = divs.length - 1; i >= 0; i--) {
		divs[i].addEventListener('click',click)
	}
})