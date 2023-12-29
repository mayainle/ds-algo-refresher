//Stacks can be build with Arrays or Linked Lists
class Node {
    constructor(value) {
        this.value = value;
        this.next = null
    }
}

class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        const newNode = new Node(value);
        if (this.length === 0) {
            this.top = newNode;
            this.bottom = newNode;
        } else {
            const nextNode = this.top;
            this.top = newNode;
            this.top.next = nextNode;
        }
        this.length++;
        return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        this.top = this.top.next;
        this.length--;
        return this;
    }

    isEmpty() {
        return this.length === 0;
    }
}

const myStack = new Stack();
myStack.push('google');
myStack.push('udemy');
myStack.push('discord');
myStack.isEmpty();
myStack.peek();
myStack.pop();
myStack.pop();
myStack.pop();
myStack.isEmpty();