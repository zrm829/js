const circleParent=document.querySelector('#circleHandle .circleParent');
const circleChild=document.querySelector('#circleHandle .circleParent .circleChild');
circleParent.addEventListener('click',function(event){
    if(event.target.getAttribute('class')=='circleChild'){
        return false;
    }
    alert('我是父亲');
})
circleChild.addEventListener('click',function(event){
    console.log(event);
    alert('我是儿子');
    // event.stopPropagation(); 
})