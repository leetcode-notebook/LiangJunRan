/**
 * Initialize your data structure here. Set the size of the queue to be k.
 * @param {number} k
 */
var MyCircularQueue = function(k) {
    // Maximum length
    this.maxLength = k;
    // Current length
    this.length = 0;
    // Queue data
    this.arr = [];
};

/**
 * Insert an element into the circular queue. Return true if the operation is successful. 
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    if (this.length === this.maxLength) {
        return false
    } else {
        this.arr.push(value)
        this.length++
        return true
    }
};

/**
 * Delete an element from the circular queue. Return true if the operation is successful.
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    if (this.length === 0) {
        return false
    } else {
        // delete first
        this.arr.shift()
        this.length--
        return true
    }
};

/**
 * Get the front item from the queue.
 * If the Queue is empty, return -1
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    if (this.length == 0) {
        return -1
    } else{
        return this.arr[0]
    }
};

/**
 * Get the last item from the queue.
 * If the Queue is empty, return -1
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    if (this.length == 0) {
        return -1
    } else {
        return this.arr[this.length - 1]
    }
};

/**
 * Checks whether the circular queue is empty or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    return this.length === 0
};

/**
 * Checks whether the circular queue is full or not.
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    return this.length >= this.maxLength
};

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * var obj = new MyCircularQueue(k)
 * var param_1 = obj.enQueue(value)
 * var param_2 = obj.deQueue()
 * var param_3 = obj.Front()
 * var param_4 = obj.Rear()
 * var param_5 = obj.isEmpty()
 * var param_6 = obj.isFull()
 */