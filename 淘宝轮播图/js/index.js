var aleft=document.getElementById("lunboaleft");
var  aright=document.getElementById("lunboaright");
var oMain=(document.getElementsByClassName("lunbomain"))[0];
console.log( oMain.style.left);
var oList=(document.getElementsByClassName("lunboList"))[0];
var oli=oList.getElementsByTagName('li');
var olilength=oli.length;
var oContainer=document.getElementsByClassName("lunbocontainer")[0];
console.log(oContainer);
var timer,timer2;
var index=0;
var flag=true;
function movimg(dis){
    flag=false;
    var time=400;
    var eachtime=20;
    var eachdis=dis/(time/eachtime);
    var nowleft=oMain.offsetLeft+dis;
    function eachMove(){
        if((dis>0&&oMain.offsetLeft<nowleft)||(dis<0&&oMain.offsetLeft>nowleft)){
            oMain.style.left=oMain.offsetLeft+eachdis+"px";
        }
        else{
            clearInterval(timer);
            oMain.style.left=nowleft+'px';
            if(nowleft==-2080){
                oMain.style.left=-520+'px';
            }
            if(nowleft==0){
                oMain.style.left=-1560+'px';
            }
            flag=true;
        }
        
    }
    timer=setInterval(eachMove,eachtime);
}

aleft.onclick=function(){
        if(flag==false) return;
        movimg(520);
        if(index==0)
        {
            index=2;
        }
        else{
            index--;
        }
        olstyle();
}

 aright.onclick=function(){
    if(flag==false) return;
    movimg(-520);
   
    if(index==2){
        index=0;
    }
    else
    {
         index++;
    }
    olstyle();
}
function olstyle(){
    oList.getElementsByClassName("lunboactive")[0].className="";
    oli[index].className="lunboactive";
}
for(var i=0;i<olilength;i++){
    (function(j){
        oli[j].onclick=function(){
            // if(flag==false) return;
            var offset=(j-index)*-520;
            index=j;
            olstyle()
            movimg(offset);
			console.log(j);
        }
    })(i)
}
// for(var i=0;i<olilength;i++){
        // oli[i].onclick=function(){
			// console.log(i);
            // // if(flag==false) return;
            // var offset=(i-index)*-520;
            // index=i;
            // olstyle()
            // movimg(offset);
        // }
    
// }
timer2=setInterval(aright.onclick,2000);
oContainer.onmouseover=function(){
    clearInterval(timer2);
}
oContainer.onmouseout=function(){
    timer2=setInterval(aright.onclick,2000);
}
// 前面说了click是一个方法，onclick是一个事件。

// 而最根本的问题是，方法和事件的区别是什么呢？

// 其区别在于：

// 1.事件名前一般都以on开头；

// 2.方法是程序员写语句直接调用，即显示调用；【可以触发onclick事件】

// 3.事件不需程序员调用，但是，必须由程序员写一个函数且将该函数赋值给相应的事件，
// 其调用是在相应的事件触发时。【告诉浏览器在鼠标点击时候要做什么】所以调用顺序是：首先方法其次事件。