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
  //always insert at the last index
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
//insert at specific index
  insertAtIndex(key,index){
    
  }
  //print the list
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
  //return size of list
  getSize(){
    if( this.head == null){
      return 0
    }
    var temp = this.head
    var count = 0
    while(temp){
      count++
      temp = temp.next
    }
    return count
  }
}

var obj = new LinkedList()
obj.insert(10)
obj.insert(20)
obj.insert(30)
obj.printList()
obj.getSize()
