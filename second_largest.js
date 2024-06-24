
var array = [22,16,3,7,14,26,5,16];
function secondLargest(){
    
    var sorted;
    sorted=array.sort((a,b)=>a-b);
    sorted = Array.from(new Set(sorted))
    console.log(sorted)
    let secondLargestNumber = sorted[sorted.length - 2];
    console.log(secondLargestNumber)
}

secondLargest()