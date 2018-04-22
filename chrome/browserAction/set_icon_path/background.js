var min = 1;
var max = 2;
var current = min;

function updateIcon() {
  chrome.browserAction.setIcon({path:"./icon1.jpg"},function(){
	  	 if (chrome.runtime.lastError) {
	        console.log(chrome.runtime.lastError.message);
	    } 
  });
  current++;
  if (current > max)
    current = min;
}

chrome.browserAction.onClicked.addListener(updateIcon);
updateIcon();