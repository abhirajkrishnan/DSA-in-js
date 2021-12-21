/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
 var findKthLargest = function(nums, k) {
    let heap =new MaxBinaryHeap();
    for(let i=0;i <nums.length;i++){
        heap.insert(nums[i]);
    }
    let j=0;
    let largest;
    while(j < k){
        largest=heap.extractMax();
        j++;
    }
    return largest;
};

class MaxBinaryHeap{
    constructor(){
        this.values=[];  
    }              

    insert(val){
      this.values.push(val);
      this.bubbleUp();
      return this.values;
    }
    bubbleUp(){
      let idx=this.values.length-1;
      let element=this.values[idx];
      
      while(idx > 0){
      let parentidx= Math.floor((idx-1)/2);
      let Parent=this.values[parentidx];
          if(element <= Parent) break;

           this.values[parentidx]=element;
           this.values[idx]=Parent; 
           idx=parentidx;  
      }
    }

    extractMax(){
      let element=this.values[0];
      let end=this.values.pop();
      if(this.values.length > 0){
        this.values[0]=end
        this.sinkDown()
      }
      return element;
    }

    sinkDown(){
      let idx=0;
      let element=this.values[0];
      let leftchild,rightchild;
     
      
      while(true){
      let leftidx=2*idx +1;
      let rightidx=2*idx +2;
      let swap=null;
      
      if(leftidx < this.values.length){
        leftchild=this.values[leftidx];
        if(element < leftchild) swap=leftidx;
      }
      if(rightidx < this.values.length){
        rightchild=this.values[rightidx];
        if((swap===null && element < rightchild)||
         (swap !== null && leftchild < rightchild)){
           swap=rightidx;
         }
          }
        if(swap ===null) break;
        this.values[idx]=this.values[swap];
        this.values[swap]=element;
        idx=swap;
      }
    }
} 