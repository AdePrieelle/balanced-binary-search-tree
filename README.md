# Binary Search Tree

[![made with javascript](https://img.shields.io/badge/made_with-javascript-f0db4f.svg?logo=javascript)](https://www.javascript.com)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg?logo=jest)](https://github.com/facebook/jest)

An implementation of a binary search tree data structure written as a factory function in JavaScript.

## Getting started

These instructions will give you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

To install npm:

```sh
npm install npm@latest -g
```

### Installation

To clone the repository:

```sh
git clone https://github.com/AdePrieelle/balanced-binary-search-tree.git
```

To install npm packages:

```sh
npm install
```

## Usage

_A driver script is included to demonstrate the functionality of the factory function BinarySearchTree._

##### BinarySearchTree includes the following methods:

- `buildTree(array)` - builds a balanced binary search tree from a given array of data values and returns the root node from the balanced binary search tree. Return null if no array or an empty array is given.
- `prettyPrint(node)` - logs a visual representation of a given node in a structured format to the console. If the method is called without a node as an argument, use the root node as the default argument.
- `getRootNode()` - returns the root node.
- `insertNode(value)` - inserts a new node with a given data value into the binary search tree. Returns the root node of the binary search tree. Return the root node of the binary search tree if the method is called without an argument.
- `deleteNode(value)` - deletes the node with the given data value from the binary search tree. Returns the root node of the binary search tree. Return the root node of the binary search tree if there doesn't exist any node with the given data value in the binary search tree, if the method is called without an argument or if the root node is equal to null.
- `find(value)` - returns the node with the given data value. Return null if there is no data value given, if the root node is equal to null or if there doesn't exist any node with the given data value in the binary search tree.
- `levelOrder(callback)` - traverses each node of the binary search tree in levelorder. Returns an array in the order of each visited node's data values if no callback argument is given. If a callback is given and the callback is a function, call the callback function with each node as an argument while traversing the binary search tree and return null. Return null if the root node is null and the callback is a function. Return an empty array if the root node is null and a callback is given but the callback isn't a function. If the root node isn't null and a callback is given but the given callback isn't a function, return an array in the order of each visited node's data values.
- `preOrder(callback)` - traverses each node of the binary search tree in preorder. Returns an array in the order of each visited node's data values if no callback argument is given. If a callback is given and the callback is a function, call the callback function with each node as an argument while traversing the binary search tree and return null. Return null if the root node is null and the callback is a function. Return an empty array if the root node is null and a callback is given but the callback isn't a function. If the root node isn't null and a callback is given but the given callback isn't a function, return an array in the order of each visited node's data values.
- `inOrder(callback)` - traverses each node of the binary search tree in inorder. Returns an array in the order of each visited node's data values if no callback argument is given. If a callback is given and the callback is a function, call the callback function with each node as an argument while traversing the binary search tree and return null. Return null if the root node is null and the callback is a function. Return an empty array if the root node is null and a callback is given but the callback isn't a function. If the root node isn't null and a callback is given but the given callback isn't a function, return an array in the order of each visited node's data values.
- `postOrder(callback)` - traverses each node of the binary search tree in postorder. Returns an array in the order of each visited node's data values if no callback argument is given. If a callback is given and the callback is a function, call the callback function with each node as an argument while traversing the binary search tree and return null. Return null if the root node is null and the callback is a function. Return an empty array if the root node is null and a callback is given but the callback isn't a function. If the root node isn't null and a callback is given but the given callback isn't a function, return an array in the order of each visited node's data values.
- `height(node)` - returns the height of a node. The height of a node is the largest number of edges in a path from a node to the deepest leaf node. Return null if the given node isn't an object. Return 0 if the root node is equal to null. If the method is called without a node as an argument, use the root node as a default argument and return the height of the root node of the binary search tree.
- `depth(node)` - returns the depth of a node. The depth of a node is the number of edges in a path from a given node to the root node. Return null if the given node argument isn't an object. Return 0 if the root node is equal to null or if the given node argument is equal to the root node. Return null if the given node from the argument doesn't exist in the binary search tree. If the method is called without a node as an argument, use the root node as a default argument and return the depth of the root node of the binary search tree.
- `isBalanced()` - returns true/false based on whether or not the binary search tree is balanced. A binary search tree is balanced if the difference between heights of left subtree and right subtree of every node is not more than 1. Return true if the root node is equal to null.
- `rebalance()` - rebalances the tree and returns the root node. Calls the inOrder method without and argument to get an array of all the node's data values in the binary search tree. Calls the buildTree method with the array of all the node's data values to build a new balanced binary search tree and updates the root node with the newly constructed balanced binary search tree. Returns null if the root node is equal to null.

## Testing

Jest tests are included for factory functions BinarySearchTree, BinarySearchTreeNode and for the utils functions.

To run the Jest tests:

```sh
npm run test
```
