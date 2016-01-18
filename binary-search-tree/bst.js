/**
 * Created by jhines on 1/14/16.
 */
var Node = require('./bst');

class BST {
    constructor() {
        "use strict";
        this.root = null;
    }

    insert(data) {
        "use strict";
        let n = new Node(data, null, null);

        if(this.root == null) {
            this.root = n;
        }else{
            let current = this.root, parent;

            while(true) {
                parent = current;

                if(data < current.data) {
                    current = current.left;
                    if(current == null) {
                        parent.left = n;
                        break;
                    }
                }else{
                    current = current.right;

                    if(current == null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    inOrder(node) {
        "use strict";
        if(!(node == null)) {
            inOrder(node.left);

            console.log(`${node.show()} `);

            inOrder(node.right);
        }
    }
}

module.exports = BST;
