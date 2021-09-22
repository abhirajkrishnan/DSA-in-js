class Node{
    constructor(value){
       this.val=value;
       this.next=null;
    }
}

class Queue{
    constructor() {
     this.first=null;
     this.last=null;
     this.size=0;   
         }                   
    
    enqueue(val){
        var newNode=new Node(val);       //the NewNodes are added/queued to right end
        if(!this.first){                 //and are removed/dequeued from left end
            this.first=newNode;
            this.last=newNode;
        }
        else{
            this.last.next=newNode;
            this.last=newNode;
        }
        return this.size++;
    }

    dequeue(){
        if(!this.first) return null;
        var tmp=this.first;
        if(this.first==this.last){
            this.last=null;
        }
        this.first=this.first.next;
        this.size--;
        return tmp.val;
    }

    print(){
        var arr=[];
        var current=this.first;
        while(current){
            arr.push(current.val);
            current=current.next;
           }
           console.log(arr)
    }
}

var list=new Queue();

list.enqueue("1");
list.enqueue("2");
list.enqueue("3");
list.enqueue("4");
list.enqueue("5");
list.enqueue("6");
list.enqueue("7");
list.enqueue("8");
list.enqueue("9");
list.enqueue("10");