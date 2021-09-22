var rotateRight = function(head, k) {
    if(head===null) return null;
    let h=head;
    let length=0;
    while(h){
        length=length+1;
        h=h.next;
    }
    var diff=k;

    if(length==k ) return head;
    if( (k%length)==0) return head;

    if(length < k){
         diff=k%length;
    }
    
    newtailpos=length-diff-1;
    newheadpos=length-diff;
    var newtail;
    var newhead;
    var pos=head;
    
    for(var i=0;i<length;i++){
        if(i==newtailpos) {
            newtail=pos;
        }
        if(i==newheadpos) {
            newhead=pos;
        }
        pos=pos.next;
    }
    
    var newheadlist=newhead;
    var join;
    while(newheadlist){
        if(newheadlist.next==null) join=newheadlist;
        newheadlist=newheadlist.next;
    }
    
    newtail.next=null;
    join.next=head;
    head=newhead
    return head;
    
};

rotateRight(node1,12);