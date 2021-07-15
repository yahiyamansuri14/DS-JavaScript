class Node{
  constructor(key){
    this.key = key
    this.next = null
  }
}
class Stack{
  constructor(){
    this.top = null
  }
  isEmpty(){
    if( this.top == null )
      return true
    else
      return false
  }
  push(key){
    var node = new Node(key)
    if( node == null ){
      console.log("Stack Overflow")
      return
    }
    node.next = this.top
    this.top = node
  }
  pop(){
    if( this.isEmpty() ){
      console.log("Stack is Empty")
      return
    }
    var key = this.top.key
    var temp = this.top
    console.log("deleted key is ", key)
    this.top = this.top.next
  }
  print(){
    if( this.top == null ){
      console.log("Stack is Underflow")
      return
    }
    var temp = this.top
    while( temp ){
      console.log(temp.key)
      temp = temp.next
    }
  }
}
var obj = new Stack()
obj.push(10)
obj.push(20)
obj.push(30)
obj.push(40)
obj.push(50)
obj.print()
obj.pop()
obj.pop()
obj.print()
