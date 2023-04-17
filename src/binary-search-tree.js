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
    return {
      data: this._root,
    }
    //throw new NotImplementedError('Not implemented');
  }

  add(data) {
    //throw new NotImplementedError('Not implemented');
    function addNewElement(elem, data) {

      if (!elem) {
        return new Node(data)
      }
  
      if (elem.data === data) {
        return elem;
      }
  
      if (data < elem.data) {
        elem.left = addNewElement(elem.left, data);
      }

      if (data > elem.value) {
        elem.right = addNewElement(elem.right, data);
      } return elem;

    }

    this._root = addNewElement(this._root, data)
  }


  has(data) {
    //throw new NotImplementedError('Not implemented');
    function hasEmement(elem, data) {
      if (!elem) {
        return false;
      }

      if (elem.data === data) {
        return true;
      }
      if (data < elem.data) {
        return hasEmement(elem.left, data);
      } else {
        return hasEmement(elem.right, data);
      }
    }
    return hasEmement(this._root, data);

  }


  find(data) {
    //throw new NotImplementedError('Not implemented');
    function findElement(elem, data) {
      if (!elem) {
        return false;
      }
      if (elem.data == data) {
        return elem;
      }

      if (data < elem.data) {
        elem.left = findElement(elem.left, data); 
      } else  {
        elem.right = findElement(elem.right, data) 
      }
      
    } 

    this._root = findElement(this._root, data);
  }

  remove(data) {
    //throw new NotImplementedError('Not implemented');
    function removeElement(elem, data) {
      if (!elem) {
        return null;
      }

      if (data < elem.data) {
        elem.left = removeElement(elem.left, data);
        return elem;
      } else if (elem.data < data) {
        elem.right = removeElement(elem.right, data);
        return elem;
      } else {
        if (!elem.left && !elem.right) {
          return null;
        } 

        if (!elem.left) {
          elem = elem.right;
          return elem;
        }


        if (!elem.right) {
          elem = elem.left;
          return elem;
        }

        let minElementRight = elem.right;

          while (minElementRight.left) {
            minElementRight = minElementRight.left;
          }

          elem.data = minElementRight.value;

          elem.right = removeElement(elem.right, minElementRight.data);

          return elem;
        }
      }


      this._root = removeElement(this._root, data);

  }

  min() {
    //throw new NotImplementedError('Not implemented');
    if (!this._root) {

      return null;
     }
  
        let elem = this._root;
  
  
        while (elem.left) {
          elem = elem.left;
        }
  
      return elem.value;
    }
  
  

  max() {
    //throw new NotImplementedError('Not implemented');
    if (!this._root) {

      return null;

    }

    let elem = this._root;
    while (elem.right) {
      elem = elem.right;
    }

    return elem.value;
  }

  
}

module.exports = {
  BinarySearchTree
};