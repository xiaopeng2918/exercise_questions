function getUrlParam(sUrl, sKey) {
  // 判断url是否存在查询参数
  if(sUrl.indexOf('?') === -1){
    return ''
  }
  var paramArr = sUrl.split('?')[1].split('#')[0].split('&'); // 取出每个参数的键值对放入数组
  const obj = {};
  paramArr.forEach(element => {
    const [key, value] = element.split('=');  // 取出数组中每一项的键与值
    if (obj[key] === void 0) {   // 表示第一次遍历这个元素，直接添加到对象上面
      obj[key] = value
    } else {
      obj[key] = [].concat(obj[key], value); // 表示不是第一次遍历说明这个键已有，通过数组存起来。
    }
  });
  return sKey === void 0 ? obj : obj[sKey] || ''   // 如果该方法为一个参数，则返回对象。
  //如果为两个参数，sKey存在，则返回值或数组，否则返回空字符。
}

const result = getUrlParam('https://www.nowcoder.com/', 'bb' )
console.log(result);
