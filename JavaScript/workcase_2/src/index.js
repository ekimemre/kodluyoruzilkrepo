const todos = [];
const nodeList = document.querySelectorAll("ul li");

nodeList.forEach((element,index) => {
    todos[index] = element.innerHTML;
});

for(let i=0 ; i < todos.length ; i++) {
    let span = document.createElement("SPAN");
    let text = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(text);
    nodeList[i].appendChild(span);
}

let list = document.querySelector('ul');
list.addEventListener('click', function(event) {
  if(event.target.tagName === "LI") {
    event.target.classList.toggle("checked");
  }
}, false);

let close = document.getElementsByClassName("close");
for(let i = 0; i < close.length; i++) {
  close[i].onclick = function () {
    var div = this.parentElement;
    div.style.display = "none";
  }
}

function newToDo() {
    let inputValue = document.querySelector("input").value;
    if(inputValue == "") {
        alert("Bir şeyler yazmalısınız!")
    }else {
        let li = document.createElement("LI");
        let liText = document.createTextNode(inputValue);
        li.appendChild(liText);
        list.appendChild(li);
        //close button
        let span = document.createElement("SPAN");
        let txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.appendChild(txt);
        li.appendChild(span);
    }
    document.querySelector("input").value = ""; //Sıfırlama islemi.
    for(let i=0 ; i < close.length; i++) {
        close[i].onclick = function() {
            let div = this.parentElement;
            div.style.display = "none";
        }
    }

}