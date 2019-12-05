// ①函数声明：函数声明会被提升到当前作用域的顶部，函数表达式则不会。
// ②函数声明一定会有函数名，而函数表达式一般不会有函数名。
// ③函数声明不是一个完整的语句，所以不能出现在if-else,for循环，finally，try catch语句以及with语句中,
console.log(typeof(sayHey)); //=>function    
console.log(typeof(sayHo)); //=>undefined
sayHey();
sayHello();//TypeError: sayHello is not a function (sayHello 只是变量的提升，)
function sayHey() {
    console.log("sayHey");
}
var sayHello = function sayHo() {
    console.log("sayHello1");
}
 
//如果函数表达式声明的函数有函数名,那么这个函数名就相当于这个函数的一个局部变量,只能在函数内部调用
var f = function fact(x) { 
	if (x <= 1) 
	     return 1;
	 else 
	     return x*fact(x-1);
	 };
 alert(fact());   // Uncaught ReferenceError: fact is not defined
