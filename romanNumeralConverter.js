function convertToRoman(num){
  const spl =(i)=>i.split(','),
        romanArr={
    0:spl("I,II,III,IV,V,VI,VII,VIII,IX"),
    1:spl("X,XX,XXX,XL,L,LX,LXX,LXXX,XC"),
    2:spl("C,CC,CCC,CD,D,DC,DCC,DCCC,CM"),
    3:spl("M,MM,MMM")
  }
return [0,1,2,3].map(x=>{
  return romanArr[x][num.toString(10).split("").reverse()[x]-1]
}).reverse().filter(x=>{
  return x!==undefined
}).join('')
}
console.log(convertToRoman(89))
