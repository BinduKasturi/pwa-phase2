var idb=window.indexedDB||window.mozIndexedDB||window.msIndexedDB||
window.webkitIndexedDB||window.safariIndexedDB;
var open=idb.open("storeData",1);
if (!idb in navigator) {
  alert("Browser is not supporting");
}
console.log("indexedDB is created");
open.onupgradeneeded=function(event){
  var request=event.target.result;
  var storeData=request.createObjectStore("FormData",{keyPath:"id",autoIncrement:true});
}
open.onerror=function(error){
  console.log("Object store is not created",+error);
}
open.onsuccess=function(event){
  var request=event.target.result;
  var transaction=request.transaction("FormData","readwrite");
  var storeData=transaction.objectStore("FormData");
  var finalData=storeData.getAll();
  finalData.onsuccess=function(event){
    var result=event.target.result;
    console.log(result);
    display(event.target.result);
    function display(data){
      var main=document.querySelector(".main");
      for (var i = 0; i < data.length; i++) {
        var child=document.createElement("div")
        child.classList.add("child");
        var img=document.createElement("img");
        img.src="images/logo.svg";
        img.alt=data[i].name;
        child.append(img);
        var x=document.createElement("h1");
        x.textContent=data[i].name;
        child.append(x);
        var x=document.createElement("h3");
        x.textContent=data[i].designation;
        child.append(x);
        var x=document.createElement("h3");
        x.textContent=data[i].email;
        child.append(x);
        var x=document.createElement("a");
        x.textContent="view profile";
        // x.setAttribute("href","resume.html");
        x.href="resume.html?id="+data[i].id;
        child.append(x);
        main.append(child);
        }
    }
  }
}
