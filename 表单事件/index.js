var userName=document.getElementsByClassName("userName")[0];
var userPassword=document.getElementsByClassName("userPassword")[0];
var F=document.getElementById("f");
var sign=document.getElementById("sign");
var t=document.getElementById("t");
console.log(sign);
F.onsubmit=function(e){
    ev=window.event||e;
    // 阻止浏览器默认行为：
    // IE事件对象.returnValue=false;
    // 其他.preventDefault();
    if(userName.value.length>6){
        alert("大于六");
        if(document.all){
            ev.returnValue=false;
           
        }
        else{
            ev.preventDefault();
        } 
        userName.value="";
    }
    else
      alert("你好");
}
userName.onfocus=function(){
    sign.style.display="none";
}
userName.onblur=function(){
    sign.style.display="block";
}
t.onchange=function(){
    console.log("onchange事件");
}