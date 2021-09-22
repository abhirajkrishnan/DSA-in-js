class Node {
    constructor(val){
        this.val=val;
        this.next=null;
    }
}

class Linkedlist{

    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }

    push(val){
        var newitem=new Node(val);
        if(!this.head){
            this.head=newitem;
            this.tail=this.head;
        }
        else
        {
            this.tail.next=newitem;
            this.tail=newitem;
        }
        this.length++;
        return this;
    }

    pop(){
        if(!this.head) return undefined;
        var current=this.head;
        var newTail=current;
        while(current.next){
            newTail=current;
            current=current.next;
        }
        this.tail=newTail;
        this.tail.next=null;
        this.length--;
        if(this.length===0){
            this.head=null;
            this.tail=null;
        }
        return current;
    }
    
    shift(){
        if(!this.head) return undefined;
        var currentHead=this.head;
        this.head=currentHead.next;
        this.length--;
        if(this.length===0){
           this.tail=null;
        }
        return currentHead;
    }
    unshift(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            newNode.next=this.head;
            this.head=newNode;
        }
        this.length++;
        return this;
    }

    get(index){
        if(index<0||index>=this.length) return null;
        var count=0;
        var current=this.head;
        while(count!==index){
            current=current.next;
            count++;
        }
        return current;
    }
    set(index,val){
        var found=this.get(index);
        if(found){
            found.val=val;
            return true;
        }
        return false;
    }
    insert(index,val){
        if(index<0 || index>this.length) return false;
        if(index === this.length) return !!this.push(val);
        if(index === 0) return !!this.unshift(val);
        var newitem=new Node(val);
        var prev=this.get(index-1);
        newitem.next=prev.next;
        prev.next=newitem;
        this.length++;
        return true;
    }  
    remove(index){
        if(index<0 || index>this.length) return false;
        if(index ===0 ) return this.shift();
        if(index === this.length-1) return this.pop();
    
        var prev=this.get(index-1);
        var removed=prev.next;
        prev.next=removed.next;
        this.length--;
        return removed;
    } 
    
    reverse(){
        var node=this.head;
        this.head=this.tail;
        this.tail=node;

        var next;
        var prev=null;
        for(var i=0;i<this.length;i++){
            next=node.next;
            node.next=prev;
            prev=node;
            node=next;
        }
        return this;
    }

    print(){
        var arr=[];
        var current=this.head;
        while(current){
            arr.push(current.val);
            current=current.next;
           }
           console.log(arr)
    }
}  


    

var list= new Linkedlist();

list.push("1");
list.push("2");
list.push("3");
list.push("4");
list.push("5");
list.push("6");
list.push("7");
list.push("8");
list.push("9");
list.push("10");

var node1=new Node("1");
var node2=new Node("2");
var node3=new Node("3");
var node4=new Node("4");
var node5=new Node("5");
var node6=new Node("6");
node1.next=node2;
node2.next=node3;
node3.next=node4;
node4.next=node5;
node5.next=node6;

