
function ListNode(key, value) {
    this.key = key;
    this.value = value;
    this.prev = null;
    this.next = null;
}

var LRUCache = function(capacity) {
    this.capacity = capacity;
    this.map = new Map();
    this.head = null;
    this.tail = null;
};

// Remove a node from its current position
LRUCache.prototype.removeNode = function(node) {
    if (node.prev) {
        node.prev.next = node.next;
    } else {
        this.head = node.next;
    }

    if (node.next) {
        node.next.prev = node.prev;
    } else {
        this.tail = node.prev;
    }

    node.prev = null;
    node.next = null;
};

// Append node to the tail (most recently used)
LRUCache.prototype.addToTail = function(node) {
    if (!this.tail) {
        this.head = node;
        this.tail = node;
        return;
    }

    this.tail.next = node;
    node.prev = this.tail;
    this.tail = node;
};

// Move existing node to most recently used
LRUCache.prototype.moveToTail = function(node) {
    if (node === this.tail) return;

    this.removeNode(node);
    this.addToTail(node);
};

/**
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    const node = this.map.get(key);

    if (!node) return -1;

    this.moveToTail(node);

    return node.value;
};

/**
 * @param {number} key
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    let node = this.map.get(key);

    if (node) {
        node.value = value;
        this.moveToTail(node);
        return;
    }

    if (this.map.size === this.capacity) {
        const lru = this.head;

        this.removeNode(lru);
        this.map.delete(lru.key);
    }

    const newNode = new ListNode(key, value);

    this.addToTail(newNode);
    this.map.set(key, newNode);
};
