class Node {
    constructor(value) {
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class Tree {
    constructor() {
        this.root = null;
    }

    insert(value) {
        const newNode = new Node(value);

        if(!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root, newNode) {
        if(root.value === newNode.value) return
        if(root.value > newNode.value) {
            if(!root.left) {
                root.left = newNode;
            } else {
                this.insertNode(root.left, newNode);
            }
        } else {
            if(!root.right) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode);
            }
        }
        
    }

    delete(value) {
        this.root = this.deleteNode(this.root, value);
         
    }

    deleteNode(root, value) {
        if(!root) {
            return root;
        }
        if(value < root.value) {
            root.left = this.deleteNode(root.left, value);

        } else if (value > root.value) {
            root.right = this.deleteNode(root.right, value);
        } else { 
            if(!root.left && !root.right) {
             return null;
            }
            
            if(!root.left) {
                return root.right; 
            } else if (!root.right) {
                return root.left;
            }
            root.value = this.min(root.right)
            root.right = this.deleteNode(root.right, root.value);
            
        }
        return root;     
    }
    min(root) {
        if(root.left == null) {
            return root.value;
        } else {
            return this.min(root.left);
        }
    }

    find(value) {
        if(!root) {
            return null;
        }
        this.findValue(this.root, value);
    }

    findValue(root, value) {
        if(root.value == value) {
            return root.value;
        } else {
            if(root.value > value) {
                this.findValue(root.left, value)
            } else if(root.value < value) {
                this.findValue(root.right, value);
            }
        }
        return null;
    }
    
    levelOrder() {
        let queue = [];
        
    }
    preOrder(root) {
        if(root) {
            console.log(root.value);
            this.preOrder(root.left);
            this.preOrder(root.right);
        } 
    }
    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.value);
            this.inOrder(root.right);
        } 
    }

    postOrder(root) {
        if(root) {
            this.inOrder(root.left);
            this.inOrder(root.right);
            console.log(root.value);      
        } 
    }
    prettyPrint() {
        const prettyPrintRecursive = (node, prefix = "", isLeft = true) => {
            if (node === null) return;

            if (node.right !== null) {
                prettyPrintRecursive(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
            }

            console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.value}`);

            if (node.left !== null) {
                prettyPrintRecursive(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
            }
        };

        prettyPrintRecursive(this.root);
    }
}


const tree = new Tree();


tree.insert(10);
tree.insert(5);
tree.insert(15);
tree.insert(2);
tree.insert(7);
tree.insert(12);
tree.insert(20);
tree.preOrder(tree.root);
tree.inOrder(tree.root);

tree.prettyPrint();