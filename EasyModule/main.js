var HashTable = require("./libs/HashTable");
var BinarySearchTree = require("./libs/BinarySearchTree");

var hashMap = new HashTable.HashTable();
var binarySearchTree = new BinarySearchTree.BinarySearchTree();

binarySearchTree.insert('kw');
binarySearchTree.insert('g');
binarySearchTree.insert('ga');
binarySearchTree.insert('ge');
binarySearchTree.insert('s');
binarySearchTree.insert('s');
binarySearchTree.insert('dd');
binarySearchTree.insert('jsdis');
binarySearchTree.insert('lc');
binarySearchTree.insert(12);
binarySearchTree.insert(14);
binarySearchTree.insert(20);
binarySearchTree.insert(18);
binarySearchTree.insert(25);

console.log(binarySearchTree.printTree());
console.log(binarySearchTree.printTree(2));
console.log(binarySearchTree.printTree(3));