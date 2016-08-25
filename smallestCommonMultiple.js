//jshint esversion:6,asi:true
function smallestCommons(arr){
  let args = [],
        a = Math.min(...arr)
  const b = Math.max(...arr)
  while(a<=b){
    args.push(a)
    a++
  }
  const test = (array) => {//argument must be an array
        let first = array[0]
        return array.every(t=>t===first)
      }
  let num = args[0],
      arrToTest = args
//original array, indexed array, lowest value of indexed array
  while(test(add(args,arrToTest,num))==false) {
    arrToTest = add(args,arrToTest,num)
    num+=args[0]
  }
  return num
}
function add(arr,newArr,num){
  let testArr = []
  for(let i in arr){
    if(arr[i]+newArr[i]<= num){
      testArr.push(arr[i]+newArr[i])
    }else testArr.push(newArr[i])
  }
  return testArr
}

console.log(smallestCommons([23,18]))
