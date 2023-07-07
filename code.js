function match(arr,targetsum){
    const pair=[]

    for(let i=0;i<arr.length;i++){
        for(let j=i+1;j<arr.length;j++){
           for(let k=1;k<targetsum;k++){
            if(arr[i]+arr[j]==targetsum||arr[i]+arr[j]==-targetsum){
                pair.push([arr[i],arr[j]])
            }
           }
            }
        }
return pair
}
let array=[1, 3, 2, 2, -4, -6, -2, 8]
target=4
let result=match(array,target)
function removeDuplicateArrays(arr) {
    const uniqueArrays = Array.from(new Set(arr.map(JSON.stringify)))
    return uniqueArrays.map(JSON.parse)
  }
  const finalArray = removeDuplicateArrays(result)
  console.log(finalArray)
function get1DArray(arr){
    return arr.join().split(",").sort((a,b)=>{return a-b})
}
console.log(get1DArray(finalArray));
