//WIP
class Node {
    constructor(value, next=null){
        this.value = value
        this.next = next
    }
}

class SlinglyLinkedList{
    constructor (){
        this.head = null
        this.tail = null
        this.size = null
    }

    insertFirst(){
        this.head = new Node(data, this.head)
        this.size++
    }

    insertLast(){
        let node = new Node()
        let curr
        if(!this.head){
            this.head = node
        }else{
            curr = this.head
            while(!this.head){

            }
        }
    }
}

