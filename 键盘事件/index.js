// var oBtn=document.getElementById("btn");
// oBtn.onclick=function(){
//     window.location="xhtml.html";
// }
// document.onkeydown=function(e){
//     if (e.keyCode==13) {
//         window.location="xhtml.html";
//     }
// }
var hd=document.getElementById('hd');
window.onkeydown=function(e){
    var str="QWERTYUIOPASDFGHJKLZXCVBNM";
    var ev=window.event||e;
    var key=String.fromCharCode(ev.keyCode);
    var ls=hd.getElementsByTagName("li");
    for(let i=0;i<ls.length;i++){
        if(ls[i].innerHTML==key){
           hd.removeChild(ls[i]);
           var num=Math.floor(Math.random()*(str.length-1+1-0)+0);
           var newli=document.createElement('li');
           newli.innerHTML=str[num];
           hd.appendChild(newli);
           break;
        }
    }

}