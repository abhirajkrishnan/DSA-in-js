class Node{
    constructor(val){
        this.prev=null;
        this.val=val;
        this.next=null;
    }
}

class DoublyLinkedList{
    constructor(){
        this.head=null;
        this.tail=null;
        this.length=0;
    }
    push(val){
        var newitem =new Node(val);
        if(!this.head) {
            this.head=newitem;
            this.tail=newitem;
        }
        else{
             this.tail.next=newitem;
             newitem.prev=this.tail;
             this.tail=newitem;
        }
        this.length++;
        return this;
    }
    pop(){
        if(!this.head) return undefined;
        var prevtail=this.tail;
        if(this.length==1) {
            this.head=null;
            this.tail=null;
        }
        else{
            this.tail=prevtail.prev;
            this.tail.next=null;
            prevtail.prev=null;
        }
        this.length--;
        return prevtail;
    }

    shift(){
         if(!this.head) return undefined;
         var oldhead=this.head;
          if(this.length==1) {
            this.head=null;
            this.tail=null;
        }
        else{
            this.head=oldhead.next;
            this.head.prev=null;
            oldhead.next=null;
        }
        this.length--;
        return oldhead;
    }
    
   unshift(val){
        var newNode=new Node(val);
        if(!this.head){
            this.head=newNode;
            this.tail=this.head;
        }
        else{
            this.head.prev=newNode;
            newNode.next=this.head;         
            this.head=newNode;
        }
        this.length++;
        return this;
    }
      
      get(index){
          if(index<0||index>=this.length) return null;        
        var mid=Math.round(this.length/2);
        if(index<mid){
            console.log("before mid")
            var count=0;
            var current=this.head;
            while(count!==index){
            current=current.next;
            count++;
             }
        }
        else{
            console.log("after mid")
            var count=this.length-1;
            var current=this.tail;
            while(count!==index){
                current=current.prev;
                count--;
            }
        }
        
        return current;
      }
    
    set(index,val){
        var found=this.get(index);
        if(found!=null){
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
        var before=this.get(index-1);
        newitem.next=before.next;
        newitem.prev=before;
        before.next.prev=newitem;
        before.next=newitem;
        this.length++;
        return true;
    }  
    
    remove(index){
        if(index<0 || index>this.length) return false;
        if(index ===0 ) return this.shift();
        if(index === this.length-1) return this.pop();
        
        var removed=this.get(index);
        var before=removed.prev;
        var after=removed.next;
        before.next=removed.next;
        after.prev=removed.prev;
        removed.next=null;
        removed.prev=null;
        this.length--;
        return removed;
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

var list=new DoublyLinkedList();
// list.push(50);
// list.push("paise");
// list.push("me");
// list.push("dega");
// list.push("?");
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
