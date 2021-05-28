function sum(num2, num3) {
  return this.num1 + num2 + num3 + this.num4;
}


// call
const obj = {
  num1: 1,
  num4: 4,
}
// sum函数的this指向了obj
const result = sum.call(obj, 2, 3);
console.log(result);  // 10
/* 
当call方法执行的时候，内部处理了一些事情
1.首先把要操作的函数中的this关键字变为call方法第一个传递的实参
2.把call方法第二个及之后的实参获取到
3.把要操作的函数执行，并且把第二个以后传递进来的实参传递给函数
*/


// apply
const obj2 = {
  num1: 0,
  num4: 4,
}

// sum函数的this指向了obj
const result2 = sum.apply(obj2, [2, 3]);
console.log(result2); // 9
/* 
apply：和call基本上一致，唯一区别在于传参方式
apply把需要传递给fn的参数放到一个数组（或者类数组）中传递进去，虽然写的是一个数组，但是也相当于给fn一个个的传递
*/

// bind
const obj3 = {
  num1: 1,
  num4: 4,
}
const result3 = sum.bind(obj3, 2, 3, 4)();
console.log(result3); // 10
/* 
bind会把fn中的this预处理为obj，此时fn没有执行，当再次调用的时候才会把fn执行
*/