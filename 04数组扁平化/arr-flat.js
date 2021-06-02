const arr = [1,[2,[3, [4, [5]]]]];

function flatArr(arr){
  let res = [];
  arr.forEach((item) => {
    // 判断是否为一个数组，如果不是数组那么把这个非数组子元素放进res数组里面
    // 如果是一个数组，那么将这个数组子元素继续放到res里面
    if(!Array.isArray(item)){
      res.push(item)
    }else{
      res.push(...flatArr(item));
    }
  })
  return res;
}

const result = flatArr(arr);
console.log(result);