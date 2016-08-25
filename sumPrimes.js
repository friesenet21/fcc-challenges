function sumPrimes(num) {
  var isPrime = [];
  for(var x=0; x<=num;x++){//starting at 2 moves all the true integers up 2
	 isPrime.push(x);
  }
  for(var i=2; i<=num; i++){
    if(isPrime[i]){
	  for(var j=Math.pow(i,2); j<=num; j+=i){
	    isPrime[j]=false;
	  }
	}
  }
  return isPrime.reduce(function(a,b){
    return a+b;
  })-1;//Since isPrime starts at 0 and 1 is not prime
  }
console.log(sumPrimes(10004565));
