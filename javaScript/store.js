function addData(){
  var career=document.querySelector("#career").value;
  var name=document.querySelector("#name").value;
  var email=document.querySelector("#email").value;
  var designation=document.querySelector("#designation").value;
  var ph_no=document.querySelector("#ph_no").value;
  var adhar=document.querySelector("#adhar").value;
  var degree=document.querySelector("#degree").value;
  var college1=document.querySelector("#college1").value;
  var branch=document.querySelector("#branch").value;
  var marks1=document.querySelector("#marks1").value;
  var type=document.querySelector("#type").value;
  var college2=document.querySelector("#college2").value;
  var branch2=document.querySelector("#branch2").value;
  var marks2=document.querySelector("#marks2").value;
  var type2=document.querySelector("#type2").value;
  var school=document.querySelector("#school").value;
  var medium=document.querySelector("#medium").value;
  var marks3=document.querySelector("#marks3").value;
  var skills=document.querySelector("#skills").value;
  var intrests=document.querySelector("#intrests").value;
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
    storeData.put({
      career:career,
      name:name,
      email:email,
      designation:designation,
      ph_no:ph_no,
      adhar:adhar,
      education:[
        {
          degree:degree,
          college:college1,
          branch:branch,
          marks:marks1
        },
        {
          degree:type,
          college:college2,
          branch:branch2,
          marks:marks2
        },
        {
          degree:type2,
          college:school,
          branch:medium,
          marks:marks3,
        }
      ],
      skills:skills,
      intrests:intrests
    });
    window.open("create index.html");
  }
}
