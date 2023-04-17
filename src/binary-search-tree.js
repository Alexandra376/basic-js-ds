const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/


class BinarySearchTree {
  constructor() {
    this._root = null;
  }

  root() {
    return this._root;
  }

  add(value) {
    const node = new Node(value);
    if (!this._root) {
      this._root = node;
      return;
    }
    let current = this._root;
    while (current) {
      if (node.data < current.data) {
        if (!current.left) {
          current.left = node;
          break;
        }
        current = current.left;
      } else {
        if (!current.right) {
          current.right = node;
          break;
        }
        current = current.right;
      }
    }
  }

  find(value) {
    let current = this._root;
    while (current) {
      if (value === current.data) {
        return current;
      }
      current = value < current.data ? current.left : current.right;
    }
    return null;
  }

  has(value) {
    return !!this.find(value);
  }

  remove(value) {
    let current = this._root;
    let parent = null;
    while (current) {
      if (value === current.data) {
        if (!current.left && !current.right) {
          if (!parent) {
            this._root = null;
          } else if (current === parent.left) {
            parent.left = null;
          } else {
            parent.right = null;
          }
        } else if (current.left && !current.right) {
          if (!parent) {
            this._root = current.left;
          } else if (current === parent.left) {
            parent.left = current.left;
          } else {
            parent.right = current.left;
          }
        } else if (!current.left && current.right) {
          if (!parent) {
            this._root = current.right;
          } else if (current === parent.left) {
            parent.left = current.right;
          } else {
            parent.right = current.right;
          }
        } else {
          let temp = current.right;
          while (temp.left) {
            temp = temp.left;
          }
        }
        return true;
      }
      parent = current;
      current = value < current.data ? current.left : current.right;
    }
    return false;
  }

  min() {
    let current = this._root;
    while (current && current.left) {
      current = current.left;
    }
    return current ? current.data : null;
  }

  max() {
    let current = this._root;
    while (current && current.right) {
      current = current.right;
    }
    return current ? current.data : null;
  }
}

module.exports = {
  BinarySearchTree
};