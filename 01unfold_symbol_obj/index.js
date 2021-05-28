const obj = {
  name: 'yxp',
  age: 20,
}
// copyObj为一个新的对象
let copyObj = {...obj};
console.log(copyObj === obj); // false
// 修改原对象不会更改新对象
obj.name = 'yyxxpp';
console.log(copyObj, obj); // { name: 'yxp', age: 20 } { name: 'yyxxpp', age: 20 }