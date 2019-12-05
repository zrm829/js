var oBtn=document.getElementsByClassName("btn")[0];
var oInput=document.getElementsByTagName("input")[0];
var oMain=document.getElementsByClassName("main")[0];
oBtn.onclick=function(){
    send();
}
oInput.onkeydown=function(e){
    if(e.keyCode==13){
        send();
    }

}
function send(){
    var val=oInput.value;
    var len=val.length;
    // test(val) 验证正则表达式是否和字符串相匹配
    if(len<0||/^\s+$/.test(val)){
        alert("输入的内容不能为空");
        oInput.value=null;
        return;
    }else if(len>20)
    {
        alert("输入的内容长度不能超过20");
        oInput.value=null;
        return;
    }
    createdom(val);
    oInput.value=null;
}
function createdom(str){
    var oSpan=document.createElement("span");
    oSpan.className="subtitle";
    oSpan.innerText=str;
    oMain.appendChild(oSpan);

    domStyle(oSpan,{
        color: 'rgb('+round(0,256)+','+round(0,256)+','+round(0,256)+')',
        fontSize: round(12,20),
        timing:round(0,3) ,
        top: round(0,100)

    })
}
function domStyle(dom, obj){
    console.log(obj);
    var domWidth=dom.offsetWidth;
   dom.style.color=obj.color;
   dom.style.top=obj.top+'px';
   dom.style.fontSize=obj.fontSize+'px';
//    $(document).ready(function(){
//       $("dom").animate({
//         left:'250px',
//         width:'150px'
//       });
//     },20);
   dom.timer=setInterval(function(){
       dom.speed=null;
       switch(obj.timing){
           case 0:
              dom.speed=-2;
              break;
           case 1:
              dom.speed=-4;
              break;
           case 2:
              dom.speed=-2;  
       }
       dom.style.left=dom.offsetLeft+dom.speed+'px';
       if(dom.offsetLeft<-domWidth){
           clearInterval(dom.timer);
           dom.remove();
       }
   },10);

}
function round(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}