class MaxBinaryHeap{
    constructor(){
        this.values=[41,39,33,18,27,12,55];  //all child elements are at 2n+1 and 2n+2
    }               // position from their parent

    insert(val){
        this.values.push(val);
        this.bubbleUp();
    }
    
    bubbleUp() {
        let idx=this.values.length-1;
        let element=this.values[idx];
        while(idx>0){
        let parentidx=Math.floor((idx-1)/2);
        let parent=this.values[parentidx];
        if(element<= parent) break;

         this.values[parentidx]=element;
         this.values[idx]=parent;
         idx=parentidx;
        
        } 
    }

    extractMax(){
        const max=this.values[0];
        const end=this.values.pop();
        if(this.values.length>0){
        this.values[0]=end;
        this.sinkDown();
        }
        
        return max;
    }

    sinkDown(){
        let idx=0;
        const length=this.values.length;
        const element=this.values[0];
        while(true){
            let leftChildidx=2 * idx + 1;
            let rightChildidx= 2 * idx +2;
            let leftChild,rightChild;
            let swap=null;

            if(leftChildidx < length){
                leftChild=this.values[leftChildidx];
                if(leftChild > element) swap=leftChildidx;
            }

            if(rightChildidx < length){
                rightChild=this.values[rightChildidx];
                if((swap ===null && rightChild > element)||
                 (swap !==null && rightChild > leftChild))
                 {
                     swap=rightChildidx;
                 }
            }
            if ( swap ===null) break;
            this.values[idx]=this.values[swap];
            this.values[swap]=element;
            idx=swap;
        }

    }
} 

let heap =new MaxBinaryHeap();
heap.insert(55)