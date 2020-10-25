module.exports = function check(str, bracketsConfig) {
  let modifyStr = str.split('');
  let stack = [];
  let arr =  bracketsConfig.flat();
  let flag = true;

  for (let i = 0; i < modifyStr.length; ++i) {
    let bracketIndex = arr.indexOf(modifyStr[i]);

    if(arr[bracketIndex] == arr[bracketIndex + 1]) {
      if(flag){
        flag = false;
      }
      else {
        bracketIndex += 1;
        flag = true;
      }
    }

    if(bracketIndex %2 == 0) {
      stack.push(bracketIndex + 1);
    }
    else {
        if(stack.pop() != bracketIndex) {
          return false;
        }
    }
  }
  return stack.length == 0;
}