var maxSlidingWindow = function(nums, k) {
    let i=0,j=0;
    let list=[];
    let maxarr=[];
    while(j<nums.length){
        
        while(list.length > 0 && list[list.length-1] < nums[j]){
            list.pop();
        }
        list.push(nums[j]); 
        
        if(j-i+1 <k){
//                 
            j++;
        }
       else if(j-i+1 ==k){
            maxarr.push(list[0]);
            if(nums[i] == list[0]){
                list.shift();
            }
            i++;
            j++;
        }
        
}
return maxarr;
}


maxSlidingWindow([1,3,-1,-3,5,3,6,7]
,3);

