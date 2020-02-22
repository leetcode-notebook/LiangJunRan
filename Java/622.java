class MyCircularQueue {
    private int[] queue;
	private int headIndex;
	private int count;
	private int capacity;

    /** Initialize your data structure here. Set the size of the queue to be k. */
    public MyCircularQueue(int k) {
        // 循环队列当前长度
    	this.capacity = k;
    	this.queue = new int[k];
    	// 一个整数，保存队首 head的索引
    	this.headIndex = 0;
    	// 循环队列当前长度
    	this.count = 0;
    }
    
    /** Insert an element into the circular queue. Return true if the operation is successful. */
    public boolean enQueue(int value) {
        if ( this.count  == this.capacity) {
    		return false;
    	} else {
    		this.queue[(this.headIndex + this.count) % this.capacity] = value;
    		this.count++;
    		return true;
    	}
    }
    
    /** Delete an element from the circular queue. Return true if the operation is successful. */
    public boolean deQueue() {
        if (this.count == 0) {
    		return false;
    	}
    	this.headIndex = (this.headIndex + 1) % this.capacity;
    	this.count--;
    	return true;
    }
    
    /** Get the front item from the queue. */
    public int Front() {
        if (this.count == 0) {
    		return -1;
    	} else {
    		return this.queue[this.headIndex];
    	}
    }
    
    /** Get the last item from the queue. */
    public int Rear() {
        if (this.count == 0) {
    		return -1;
    	} else {
    		return this.queue[(this.headIndex + this.count - 1) % this.capacity];
    	}
    }
    
    /** Checks whether the circular queue is empty or not. */
    public boolean isEmpty() {
        return (this.count == 0);
    }
    
    /** Checks whether the circular queue is full or not. */
    public boolean isFull() {
        return (this.count == this.capacity);
    }
    
    /** Show */
    public String show() {
        if (this.isEmpty()) {
            return "";
        }
        int[] res = new int[this.count];
        int index = 0;
        while (index < this.count) {
            res[index] = this.queue[ (this.headIndex + index) % this.capacity ];
            index++;
        }
        return Arrays.toString(res);
    }
}

/**
 * Your MyCircularQueue object will be instantiated and called as such:
 * MyCircularQueue obj = new MyCircularQueue(k);
 * boolean param_1 = obj.enQueue(value);
 * boolean param_2 = obj.deQueue();
 * int param_3 = obj.Front();
 * int param_4 = obj.Rear();
 * boolean param_5 = obj.isEmpty();
 * boolean param_6 = obj.isFull();
 */