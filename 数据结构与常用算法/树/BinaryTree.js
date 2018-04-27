/**
 * @file
 * @date 2018/04/26
 * @author houzhiqiang@gmail.com
 */

 // 二叉查找树  特点，左节点的值比右节点的值小


class BinaryTree {
    constructor(data, left, right) {
        this.data = data;
        this.left = left;
        this.left = right;
    }

    show () {
        return this.data;
    }
}


class BST {
    constructor() {
        this.root = null;
    }

    insert (data) {
        const n = new BinaryTree(data, null, null);

        if(this.root === null) {
            this.root = n;
        } else {
            let current = this.root;
            let parent = null;

            while (true) {
                parent = current;

                if(data < parent.data) {
                    current = current.left;

                    if(current === null) {
                        parent.left = n;
                        break;
                    }
                } else {
                    current = current.right

                    if(current === null) {
                        parent.right = n;
                        break;
                    }
                }
            }
        }
    }

    inOrder (node) {
        if(!(node === null)) {
            this.inOrder(node.left);

            console.log(node.show() + ' ');
            this.inOrder(node.right);
        }
    }
}



const tree = new BST();

tree.insert(8);
tree.insert(3);
tree.insert(2);
tree.insert(4);
// tree.insert(7);
// tree.insert(9);
// tree.insert(1);
// tree.insert(0);


console.log(tree.root);
// tree.inOrder(tree.root);
