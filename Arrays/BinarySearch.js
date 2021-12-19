var search = function(nums, target) {
    let index=-1;
    let start=0;
    let end=nums.length-1;
    let mid;
    
    while(start<=end){
        mid= Math.floor(start + (end-start)/2);
        if(nums[mid] == target) return mid;          
        
        else if(nums[mid] > target) end=mid-1;
        
        else start=mid+1;
    }
    
    return index;
};

search([2,5,7,8,9,11,12,13,15,17],12)