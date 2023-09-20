//Quick Sort
function pivot(arr, start = 0, end = arr.length-1){
    let pivot = arr[start];
    let swapIndx = start
    for(let i=start+1;i<=end;i++){
        if(pivot>arr[i]){
            swapIndx++
            [arr[i], arr[swapIndx]] = [arr[swapIndx], arr[i]]
        }
    }
   [ arr[start], arr[swapIndx]] = [arr[swapIndx], arr[start]]
   return swapIndx
}

function quickSort(arr, left=0, right=arr.length-1){
    if(left<right){
        let pivotIndex=pivot(arr, left, right)
        quickSort(arr, left, pivotIndex-1)
        quickSort(arr, pivotIndex+1, right)
    }
    return arr
}

console.log(quickSort([23,45,1,679,42,190,8]))