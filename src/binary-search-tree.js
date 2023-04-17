const { NotImplementedError } = require('../extensions/index.js');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(data) {
    this.value = data;
    this.left = null;
    this.right = null;
  }
}
class BinarySearchTree {

  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(data) {


    this._root = addElem(this._root, data);
   
          function addElem(node, value) {

            if (!node) {
              if (BinarySearchTree._root == null) {
                BinarySearchTree._root = value;
              }
              return new Node(value);

            }


            if (node.value === value) {
              return node;
            }

            if (value < node.value) {
              node.left = addElem(node.left, value);
            } else {
              node.right = addElem(node.right, value);
            }

        return node;
      }
                
  }


  has(value) {
    return searchElem(this._root, value);

          function searchElem(node, value) {

            if (!node) {

              return false;
            }

            if (node.value === value) {
              return true;
            }

            return value < node.value ? 
            searchElem(node.left, value) : 
            searchElem(node.right, value);
          }

  }


  find(value) {
        return findElem(this._root, value);

        function findElem(node, value) {

          if (!node) {
            return false;
          }


          if (node.value === value) {
            return node.value;
          }

        return value < node.value ? 
        findElem(node.left, value) : 
        findElem(node.right, value);
        }
  }

  remove(value) {
    this.root = removeElem(this._root, value);

      function removeElem(node, value) {
        if (!node) {
          return null;
        }

        if (value < node.value) {
          node.left = removeElem(node.left, value);
          return node;
        } else if (node.value < value) {
          node.right = removeElem(node.right, value);
          return node;
        } else {
          // equal
          if (!node.left && !node.right) {
            return null;
          }

          if (!node.left) {
            node = node.right;
            return node;
          }

          if (!node.right) {
            node = node.left;
            return node;
          }

          let minFromRight = node.right;
          while (minFromRight.left) {
            minFromRight = minFromRight.left;
          }
          node.value = minFromRight.value;

          node.right = removeElem(node.right, minFromRight.value);

          return node;
        }
      }

  }

  min() {

    if (!this._root) {
      return null;
    }


      let node = this._root;
      while (node.left) {
        node = node.left;
      }

    return node.value;
    }
  
  


  max() {

    if (!this._root) {
      return null;
    }


    let node = this._root;
    while (node.right) {
      node = node.right;
    }

    return node.value;
  }

  
}

module.exports = {
  BinarySearchTree
};