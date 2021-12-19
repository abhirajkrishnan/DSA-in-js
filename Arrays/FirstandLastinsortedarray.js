var searchRange = function(nums, target) {
    let first=searchfirst(nums,target);
    let last=searchlast(nums,target,first)
     return [first,last]
  };
  
  var searchfirst=function(nums, target) {
      let start=0;
      let end=nums.length-1;
      let mid;
      let firstoccurence=-1,lastoccurence=-1;
      
      while(start<=end){
          
          mid =  Math.floor(start+(end-start)/2);
          
          if(nums[mid]==target) {
              firstoccurence=mid;
              end=mid-1;
          }
          else if(nums[mid] > target){
              end=mid-1;
          }
          else {
              start=mid+1;
          }
          
      }
      return firstoccurence;
  };
  
  
  var searchlast = function(nums, target,startindex) {
      let start=startindex;
      let end=nums.length-1;
      let mid;
      let lastoccurence=-1;
      
      while(start<=end){
          
          mid =  Math.floor(start+(end-start)/2);
          
          if(nums[mid]==target) {
              lastoccurence=mid;
              start=mid+1;
          }
          else if(nums[mid] > target){
              end=mid-1;
          }
          else {
              start=mid+1;
          }
          
      }
      return lastoccurence;
  }
  