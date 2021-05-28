
// bind
function bindThis(fun, obj) {
  // 兼容IE
  if (fun.bind) {
    return fun.bind(obj)
  }else{
    return function (){
      const args = [].slice.call(arguments);
      return fun.apply(obj, args)
    }
  }
}

// arguments
function sum(a, b){
  console.log(typeof arguments);
  console.log(arguments);
  console.log([].slice.call(arguments));
}

sum(2, 3)

// apply
function applyThis(f, targetObj){
  return function (){
    const args = [].slice.call(arguments);
    return  f.apply(targetObj, args)
  }
}
// call
function callThis(f, targetObj){
  return function (){
    const args = [].slice.call(arguments);
    return  f.call(targetObj, ...args)
  }
}

// 测试
function sum(c, d){
  return this.a + this.b + c + d;
}

const targetObj = {
  a: 1,
  b: 2,
}
const resultBind = bindThis(sum, targetObj, 3, 4);
console.log(resultBind(3, 4));

const resultApply = applyThis(sum, targetObj);
console.log(resultApply(3, 4));

const resultCall = callThis(sum, targetObj);
console.log(resultCall(3, 4));