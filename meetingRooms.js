//leetcode 252

//accepts array of arrays with a start time and end time [[0,10],[10,15]]

function meetingRooms(arr){
    //sort the start times of the array
    arr.sort((a,b)=> (a[0]-b[0]))
    //loop through the sorted array
    for(let i=1;i<arr.length;i++){
        //compare the end times of the previous meeting with the start time of the current meeting
        if(arr[i-1][1]>arr[i][0]){
            return false
        }
    }
    return true
}