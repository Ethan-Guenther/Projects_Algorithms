class Node //Singly Linked List Node Class
{
    constructor(val) {
        this.val = val; //Holds value for this node
        this.next = null // Pointer to the next node
    }
}

class List { // The Singly Linked List class itself
    constructor() { //List Starts with no nodes
        this.head = null; //Head will point to the first node
    }
    //All Methods for Problems go Here
    addFront(value) {
        let newNode = new Node(value);
        if(!this.head)
        {
            this.head = newNode;
            return this.head;
        }

        newNode.next = this.head;
        this.head = newNode;
        return this.head;
    }

    front()
    {
        let Head = this.head;
        if(this.head === null)
        {
            return null;
        }
        return Head.val;
    }

    removeFront() {
        if(this.head === null)
        {
            return this.head;
        }
        let removeFrontNode = this.head;
        this.head = removeFrontNode.next;
        removeFrontNode = null;
        return this.head;
    }


    display() {
        let ListToString = "";

        if(this.head == null)
        {
            return ListToString;
        }

        ListToString+= this.head.val;
        let runner = this.head.next;
        while(runner != null)
        {
            ListToString += ", "
            ListToString+= runner.val;
            runner = runner.next;
        }
        return ListToString;
    }
}

var myList = new List();
console.log(myList.display());
myList.addFront(10);
myList.addFront(60);
console.log(myList.display());
myList.addFront(27);
myList.addFront(36);
myList.addFront(82);
console.log(myList);

console.log(myList.display());

