const str = 'aavvcc';
const a = str.indexOf('d');
const result = str.split('d');
// 若split截取没有找到指定分割符 ， 返回以当前字符串为单元素的数组
console.log(result); // [ 'aavvcc' ]

const arr = [];
const result2 = arr.concat(2, 3);
console.log(result2);