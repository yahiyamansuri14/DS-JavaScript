class Node{
  constructor(key){
    this.key = key
    this.next = null
  }
}
class LinkedList{
   constructor(head){
     this.head = null
   }
  insert(key){
    var node = new Node(key)
    var temp
    if( this.head == null)
      this.head = node
    else{
      temp = this.head
      while( temp.next )
        temp = temp.next
      temp.next = node
    }    
  }
  printList(){
    if( this.head == null){
     console.log("Linked List is empty")
      return
    }
    var temp = this.head
    while(temp){
      console.log(temp.key)
      temp = temp.next
    }
  }
}

var obj = new LinkedList()
obj.insert(10)
obj.insert(20)
obj.insert(30)
obj.printList()
