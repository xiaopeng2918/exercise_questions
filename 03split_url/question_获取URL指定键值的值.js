function getParamValue(surl, skey) {
  // 判断是否存在查询参数
  if (surl.indexOf('?') === -1) {
    return ''
  }
  // 获取每个形式为 key = value的键值对放到数组里
  let paramArr = surl.split('?')[1].split('#')[0].split('&');
  // 创建一个对象，放置指定键的值
  const obj = {};
  // 遍历数组
  paramArr.forEach((param) => {
    // 分别取出键和值  解构赋值
    const [key, value] = param.split('=');
    // void 0 与undefined相似 占得字节数更少
    if (obj[key] === void 0) {
      // 第一次遍历到，那么设置该键值对  赋值
      obj[key] = value;
    } else {
      // 将所有的匹配到的值存到有个数组当中
      obj[key] = [].concat(obj[key], value);
    }
  })
  // 返回指定键的值， 如果未定义 返回整个键值对对象
  // 指定键的值不存在 返回空
  return skey === void 0 ? obj : obj[skey] || '';
}
const result1 = getParamValue('http://www.nowcoder.com?key=1&key=2&key=3&key=4&test=4#hehe', 'key');
console.log(result1);
console.log(result1.join(''));
const result2 = getParamValue('https://www.nowcoder.com/', 'key');
console.log(result2);

