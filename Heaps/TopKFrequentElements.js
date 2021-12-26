/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
 var topKFrequent = function(nums, k) {
    let heap=new MaxHeap();
    function constructobject(arr) {
    let countobj= arr.reduce((acc,val)=>{
        acc[val]=(acc[val] || 0)+1;
        return acc;
    }, {})
   return constructKeyPair(countobj)
}

function constructKeyPair(obj){
    let vector=[]
    for (key in obj){
        heap.insert({count:obj[key] , element:key})
    }
}
constructobject(nums)

let result=[]
for(i=0;i<k;i++){
    let el=heap.extractMax();
    result.push(el.element)
}
return result;
};

class MaxHeap{
    constructor(){
        this.values=[];
    }
    insert(val){
        this.values.push(val);
        this.bubbleup();
        
    }

    bubbleup(){
        let idx=this.values.length-1;
        let element=this.values[idx];
        let parent,parentidx;
        while(idx > 0){
            parentidx=Math.floor((idx-1)/2);
            parent=this.values[parentidx]
            if(element.count <= parent.count) break;
            this.values[idx]=parent;
            this.values[parentidx]=element;
            idx=parentidx;
        }
    }
    extractMax(){
        let max=this.values[0];
        let end=this.values.pop();
        if(this.values.length >=1){
            this.values[0]=end;
            this.sinkDown();
        }
        return max;
    }

    sinkDown(){
        let idx=0;
        let element=this.values[idx];
        let leftchild,rightchild;
        while(true){
            let leftchildidx=Math.floor(2*idx+1);
            let rightchildidx=Math.floor(2*idx+2);
            let swap=null;
            if(leftchildidx < this.values.length){
                leftchild=this.values[leftchildidx];
                if(leftchild.count > element.count) swap=leftchildidx;
            }
            if(rightchildidx < this.values.length){
                rightchild=this.values[rightchildidx]
                if((swap===null && rightchild.count > element.count)||
                (swap !== null && rightchild.count > leftchild.count)){
                    swap=rightchildidx;
                }
            }
            if(swap ===null) break;
            this.values[idx]=this.values[swap];
            this.values[swap]=element;
            idx=swap;
        }
    }
}


topKFrequent([1,1,1,2,2,3],2)