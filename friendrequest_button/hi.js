var a = document.querySelector("h5")
var b = document.querySelector("button")
var count = 0

b.addEventListener("click",function(){
    if (count==0){
    
    a.style.color="green"
    b.innerHTML="remove"
    a.innerHTML = "Requet Send"
    count=1
    }
    else{
        a.innerHTML = "remove"
        a.style.color="red"
        b.innerHTML="Add Friend"
        
        count=0
    }
})