function combinations(arr){
  let results =[],i=arr[0]+1,j=arr[0]+1
  for(i in arr){
    for(j in arr){
      results.push([i,j])
    }
  }
  return results
}
console.log(combinations([1,2,3]))//forgot the console.log
