class Node {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(root = null) {
    this.root = root;
  }

  /** insert(val): insert a new node into the BST with value val.
   * Returns the tree. Uses iteration. */

  insert(val) {
    const node = new Node(val);
    if (!this.root) {
      this.root = node;
      return this;
    }

    let curr = this.root;
    while (true) {
      if (val === curr.val) return undefined;

      if (val < curr.val) {
        if (!curr.left) {
          curr.left = node;
          return this;
        }
        curr = curr.left;
      } else {
        if (!curr.right) {
          curr.right = node;
          return this;
        }
        curr = curr.right;
      }
    }
  }

  /** insertRecursively(val): insert a new node into the BST with value val.
   * Returns the tree. Uses recursion. */

  insertRecursively(val, node = this.root) {
    if (!this.root) {
      this.root = new Node(val);
      return this;
    }

    if (val === node.val) return undefined;

    if (val < node.val) {
      if (!node.left) {
        node.left = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.left);
    } else {
      if (!node.right) {
        node.right = new Node(val);
        return this;
      }
      return this.insertRecursively(val, node.right);
    }
  }

  /** find(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses iteration. */

  find(val) {
    let curr = this.root;
    while (curr) {
      if (val === curr.val) return curr;
      if (val < curr.val) {
        curr = curr.left;
      } else {
        curr = curr.right;
      }
    }
    return undefined;
  }

  /** findRecursively(val): search the tree for a node with value val.
   * return the node, if found; else undefined. Uses recursion. */

  findRecursively(val, node = this.root) {
    if (!node) return undefined;
    if (val === node.val) return node;
    if (val < node.val) {
      return this.findRecursively(val, node.left);
    } else {
      return this.findRecursively(val, node.right);
    }
  }

  /** dfsPreOrder(): Traverse the array using pre-order DFS.
   * Return an array of visited nodes. */

  dfsPreOrder(node = this.root, res = []) {
    if (node) {
      res.push(node.val);
      this.dfsPreOrder(node.left, res);
      this.dfsPreOrder(node.right, res);
    }
    return res;
  }

  /** dfsInOrder(): Traverse the array using in-order DFS.
   * Return an array of visited nodes. */

  dfsInOrder(node = this.root, res = []) {
    if (node) {
      this.dfsInOrder(node.left, res);
      res.push(node.val);
      this.dfsInOrder(node.right, res);
    }
    return res;
  }


  /** dfsPostOrder(): Traverse the array using post-order DFS.
   * Return an array of visited nodes. */

  dfsPostOrder(node = this.root, res = []) {
    if (node) {
      this.dfsPostOrder(node.left, res);
      this.dfsPostOrder(node.right, res);
      res.push(node.val);
    }
    return res;
  }

  /** bfs(): Traverse the array using BFS.
   * Return an array of visited nodes. */

  bfs() {
    const res = [];

    let current = this.root;
    const q = [current];

    while (q.length) {
      current = q.shift();
      res.push(current.val);

      if (current.left) q.push(current.left);
      if (current.right) q.push(current.right);
    }

    return res;
  }

  /** Further Study!
   * remove(val): Removes a node in the BST with the value val.
   * Returns the removed node. */

  remove(val) {

  }

  /** Further Study!
   * isBalanced(): Returns true if the BST is balanced, false otherwise. */

  isBalanced() {

  }

  /** Further Study!
   * findSecondHighest(): Find the second highest value in the BST, if it exists.
   * Otherwise return undefined. */

  findSecondHighest() {

  }
}

module.exports = BinarySearchTree;
