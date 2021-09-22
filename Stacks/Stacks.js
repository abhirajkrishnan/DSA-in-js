class Node{
    constructor(value){
        this.val=value;
        this.next=null;
    }
}

class Stack{
      constructor(){
          this.first=null;
          this.last=null;
          this.size=0;
      }

      push(val){
          var newitem=new Node(val);        //growing the stack towards left
          if(!this.first){                  //     1  <-  2 <- 3 <- 4 <- 5
              this.first=newitem;          //     first                last
              this.last=newitem;
          }
          else{
              var tmp=this.first;
              this.first=newitem;
              this.first.next=tmp;
          }
          return ++this.size;    
      }

      pop(){
          if(this.size==0) return null;
          var tmp=this.first;
            if(this.first==this.last){
                this.last=null
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

var list=new Stack();

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