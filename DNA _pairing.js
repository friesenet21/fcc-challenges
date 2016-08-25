//jshint esversion:6,asi:true
function pairElement(str) {
  const arr = {
    'A':"AT",
    'T':"TA",
    'C':"CG",
    'G':"GC"
  }
  return str.split('').map(x=>arr[x].split(''))
}

console.log(pairElement('ATCGA'),
pairElement('TTGAG'),
pairElement('CTCTA'))
