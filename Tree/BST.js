class Node {
    constructor(value){
        this.left=null;
        this.val=value;
        this.right=null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }

    insert(value){
        var newNode=new Node(value);
        if(this.root==null){
            this.root=newNode;
            return this;
        }
        else{
            var current=this.root;
            while(true){
                if(value ==current.value) return undefined;
                if(value < current.val){
                    if(current.left==null){
                        current.left=newNode;
                        return this;
                    }
                    else{
                        current=current.left;
                    }
                }
                else if(value > current.val){
                    if(current.right==null){
                        current.right=newNode;
                        return this;
                    }
                    else{
                        current=current.right;
                    }
                }
            }
             
        }
    }

    contains(value){
        if(this.root===null) return false;
        var current=this.root; 
          var found= false;
        while(current && !found){
            if(value < current.value) current=current.left;
            else if(value > current.value) current = current.right;
            else found=true;
        }
        if(!found) return undefined;
        return current;
    }

    BFS() {
        var node=this.root;
        var data=[];
        var queue=[];
         queue.push(node);

        while(queue.length){
            node=queue.shift();
            data.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
        }
        return data;
    }

    DFS_Preorder(){ //visiting node and then adding it ,then visiting left and then right
        var data = []; //benefit: Storing the tree to flatten it, and later reconstruct the 
        function traverse(node){ //tree
            data.push(node.val);
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
        }
        traverse(this.root);
        return data;
    }

    DFS_Postorder(){ //first we visit the left , then right , then node itself.
        var data = [];
        function traverse(node){
            if(node.left) traverse(node.left);
            if(node.right) traverse(node.right);
            data.push(node.val);
        }
        traverse(this.root);
        return data;  
    }

    DFS_Inorder(){   //traverse entire left of a node , then node
       var data = [];  // then right of the node
        function traverse(node){ // ascending / same order of tree
        
            if(node.left) traverse(node.left);  //node.left && traverse(node.left)
             data.push(node.val);
            if(node.right) traverse(node.right);  //node.right && traverse(node.right);
        }
        traverse(this.root);
        return data;  
    }

}


var bst=new BinarySearchTree();
bst.root=new Node(50);

bst.insert(25);
bst.insert(12);
bst.insert(60);
bst.insert(65);
bst.insert(32);
bst.insert(10);
bst.insert(67);
bst.insert(55);
