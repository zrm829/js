// 即时函数是函数表达式的一种,
// IIFE(Immediately Invoked Function Expression,即时调用的函数表达式)，它一旦定义就运行。
function f() { console.log('I am outside!'); }
(function () {
    // 重复声明一次函数f
    f();
    function f() { console.log('I am inside!'); }
    f();
}());