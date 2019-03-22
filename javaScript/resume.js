var parm;
var parmValue;
var query;
query=window.location.search.substring(1).split("?");
for (var i in query) {
  parm=query[i].split("=");
  parmValue=parseInt(parm[1]);
  console.log(parmValue);
}
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
  var dd=storeData.get(parmValue);
  dd.onsuccess=function(data){
    console.log(data.target.result);
    display(data.target.result);
  }
}
  var left=document.querySelector(".left");
  var right=document.querySelector(".right");
  var Parent =document.querySelector(".Parent");
  function display(data) {
    var img=document.createElement("img");
    img.src="images/logo.svg";
    img.alt=data.name;
    left.append(img);
    var x=document.createElement("h1");
    x.textContent=data.name;
    left.append(x);
    var x=document.createElement("h1");
    x.textContent=data.designation;
    left.append(x);
    var x=document.createElement("h1");
    x.textContent=data.email;
    left.append(x);
    var x=document.createElement("h1");
    x.textContent=data.career;
    left.append(x);
    var x=document.createElement("h1");
    x.textContent=data.ph_no;
    left.appendChild(x);
    var x=document.createElement("h1");
    x.textContent=data.adhar;
    right.appendChild(x);
    // education details
    var table=document.createElement("table");
    table.border=2;
    let row='';
    let field="<tr>"+"<th>"+"degree"+"</th>"
    +"<th>"+"college"+"</th>"
    +"<th>"+"branch"+"</th>"
    +"<th>"+"marks"+"</th>"
    +"</tr>";
    for (var i in data.education) {
      row+="<tr>"+"<td>"+data.education[i].degree+"</td>"
      +"<td>"+data.education[i].college+"</td>"
      +"<td>"+data.education[i].branch+"</td>"
      +"<td>"+data.education[i].marks+"</td>"
      +"</tr>";
    }
    table.innerHTML=field+row;
    right.appendChild(table);
    var x=document.createElement("h1");
    x.textContent=data.skills;
    right.appendChild(x);
    var x=document.createElement("h1");
    x.textContent=data.intrests;
    right.appendChild(x);
    Parent.appendChild(left);
    Parent.appendChild(right);
  }
