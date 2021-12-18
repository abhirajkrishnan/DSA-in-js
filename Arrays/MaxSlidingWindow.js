/*This one is a bit slower with 1024ms time*/
// var maxSlidingWindow = function(nums, k) {
//     let i=0,j=0;
//     let list=[];
//     let maxarr=[];
//     while(j<nums.length){
        
//         while(list.length > 0 && list[list.length-1] < nums[j]){
//             list.pop();
//         }
//         list.push(nums[j]); 
        
//         if(j-i+1 <k){
                 
//             j++;
//         }
//        else if(j-i+1 ==k){
//             maxarr.push(list[0]);
//             if(nums[i] == list[0]){
//                 list.shift();
//             }
//             i++;
//             j++;
//         }
        
// }
// return maxarr;
// }

/*This one is faster with 328ms time*/
var maxSlidingWindow = function(nums, k) {
    let deque=[];
    let maxarr=[];
for(let i=0;i< nums.length;i++){
    if(deque.length > 0 && deque[0] ==i - k) deque.shift();
    
    while(deque.length > 0 && nums[deque[deque.length-1]] <= nums[i]){
        deque.pop();
    }
    
    deque.push(i)
    if(i >= k-1) maxarr.push(nums[deque[0]])
}
return maxarr;
};



maxSlidingWindow([1,3,-1,-3,5,3,6,7]
,3);

