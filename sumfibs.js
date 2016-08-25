function sumFibs(num) {
  let arr = [1],
  i=1,x=0,y=0
  while(num>=i){
    arr.push(i)
    x=y
    y=i
    i=x+y//i is 2
  }
  return arr.filter(x=>{
    return x%2 == 0
  }).reduce((a,b)=>{
    return a+b
  })
}

console.log(sumFibs(50))
