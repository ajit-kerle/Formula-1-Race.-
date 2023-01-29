const socket=io()

let nm;

let textarea=document.querySelector('#textarea')
let messageArea=document.querySelector('.message__area')
do{
   nm= prompt("Please enter name:")
}while(!nm)

textarea.addEventListener('keyup',(e)=>{
    if(e.key==='Enter'){
        sendMessage(e.target.value)
    }
})

function sendMessage(message){
    let msg={
        user:nm,
        message:message.trim()

    }

    appendMessage(msg,"outgoing")
    textarea.value=""
    scrollToBottom()

    //socket
    socket.emit("message",msg)
}

function appendMessage(msg,type){
    let mainDiv = document.createElement('div')
    let className = type
    mainDiv.classList.add(className, 'message')

    let markup = `
        <h4>${msg.user}</h4>
        <p>${msg.message}</p>
    `
    mainDiv.innerHTML = markup
    messageArea.appendChild(mainDiv)
}


// recieved msg

socket.on("message",(msg)=>{
    console.log(msg)
    appendMessage(msg,"incoming")
    scrollToBottom()
})

// scroll to bottom

function scrollToBottom(){
    messageArea.scrollTop=messageArea.scrollHeight
}