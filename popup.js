var bgPage = chrome.extension.getBackgroundPage();

var button = document.getElementById("hurp")
button.onclick=function(){
  bgPage.auth();
}
