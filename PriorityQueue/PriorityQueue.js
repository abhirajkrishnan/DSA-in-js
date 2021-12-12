class Node{
    constructor(val,priority){
        this.val=val;
        this.priority=priority;
    }
}

class PriorityQueue {
    constructor(){
        this.values=[];
    }

    enqueue(val,priority){
        let newNode=new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }

    bubbleUp(){
        let idx=this.values.length-1;
        let element=this.values[idx];
        while(idx > 0){
            let parentIdx=Math.floor((idx - 1)/2);
            let parent=this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx]=element;
            this.values[idx]=parent;
            idx=parentIdx;
        }   
    }

    dequeue(){
        let minPriority=this.values[0];
        let end=this.values.pop();
        if(this.values.length > 0){
            this.values[0]=end;
            this.sinkDown();
        }
        return minPriority;
    }

    sinkDown(){
        let idx=0;
        let length=this.values.length;
        let element=this.values[idx];
        while(true){
            let swapId=null;   //to hold swapping elements index
            let leftChildIdx=2*idx + 1;  //Calculate Both Child to check if they 
            let rightChildIdx=2*idx + 2; //are not out of length in next step.
            let leftChild,rightChild;

            if(leftChildIdx < length){ //check if not out of length
                leftChild=this.values[leftChildIdx]; //assigning as not out of length
                if(element.priority > leftChild.priority) swapId=leftChildIdx;
            }

            if(rightChildIdx < length){
                rightChild=this.values[rightChildIdx];
                if((swapId ===null && element.priority > rightChild.priority)||
                   (swapId !==null && rightChild.priority < leftChild.priority)){
                       swapId=rightChildIdx;
                   }
            }
            if(swapId === null) break;
            this.values[idx]=this.values[swapId];
            this.values[swapId]=element;
            idx=swapId;
        }
    }
}

let Mp=new PriorityQueue();



Mp.enqueue("Accident",1);
Mp.enqueue("Covid",2);
Mp.enqueue("Shot",0);
Mp.enqueue("headache",4);
Mp.enqueue("Cold",5);
Mp.enqueue("Scratch",4);
Mp.enqueue("Backchodi",6);
console.log(Mp.values)
Mp.dequeue();


console.log(Mp.values)