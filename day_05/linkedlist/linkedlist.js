// linked list
class Node {
    constructor(value){
         this.next=null
         this.value=value
    }
}

class LinkedList{
    constructor(){
        this.head=null
        this.size=0
    }

    add(ele){
      let node=new Node(ele)
    //   let current;
      if(this.head===null){
        this.head=node
      }else{
        let current=this.head

        while(current.next){
            current=current.next
        }
        current.next=node
      }
     this.size++
    }
    show(){
        let current=this.head
        let str=''
        while(current){
            str+=current.value+' '
            current=current.next
        }
        console.log(str)
        // console.log()
    }
}

let list=new LinkedList()

list.add(100)
list.add(200)
list.show()
// console.log(list)