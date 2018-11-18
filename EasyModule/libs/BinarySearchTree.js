function BinarySearchTree() {
    function Node(key) {
        this.key = key;
        this.left = null;
        this.right = null;
    }

    this.root = null;

    BinarySearchTree.prototype.insert = function (key) {
        var newNode = new Node(key);
        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    BinarySearchTree.prototype.insertNode = function (node, newNode) {
        if (newNode.key < node.key) {
            if (node.left === null) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (node.right === null) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }

    BinarySearchTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTraversalNode(this.root, handler);
    }

    BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            handler(node.key);
            this.preOrderTraversalNode(node.left, handler);
            this.preOrderTraversalNode(node.right, handler);
        }
    }

    BinarySearchTree.prototype.inOrderTraversal = function (handler) {
        this.inOrderTraversalNode(this.root, handler);
    }

    BinarySearchTree.prototype.inOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            this.inOrderTraversalNode(node.left, handler);
            handler(node.key);
            this.inOrderTraversalNode(node.right, handler);
        }
    }

    BinarySearchTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTraversalNode(this.root, handler);
    }

    BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            handler(node.key);
            this.preOrderTraversalNode(node.left, handler);
            this.preOrderTraversalNode(node.right, handler);
        }
    }

    BinarySearchTree.prototype.postOrderTraversal = function (handler) {
        this.postOrderTraversalNode(this.root, handler);
    }

    BinarySearchTree.prototype.postOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            this.postOrderTraversalNode(node.left, handler);
            this.postOrderTraversalNode(node.right, handler);
            handler(node.key);
        }
    }

    BinarySearchTree.prototype.printTree = function () {
        var args = arguments[0];
        console.log(args);
        var resultString = "";
        if (args === 2) {
            this.inOrderTraversal(function (key) {
                resultString += key + " ";
            })
        } else if (args === 3) {
            this.postOrderTraversal(function (key) {
                resultString += key + " ";
            })
        } else {
            this.preOrderTraversal(function (key) {
                resultString += key + " ";
            })
        }
        return resultString;
    }
}

exports.BinarySearchTree = BinarySearchTree;