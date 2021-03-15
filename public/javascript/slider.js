let js = document.querySelector(".no_js")
if (js == "no_js") {
    js.classList.remove("no_js")
    js.classList.add("js_on")
    alert("salve")
}

let btn_prox = document.getElementById("btn_prox")
let btn_ant = document.getElementById("btn_ant")

let comments = document.querySelectorAll(".card_comments")

let interval = setInterval(init, 8000)

btn_prox.addEventListener("click", function(){
    selectComments("+", comments)
    clearInterval(interval)
    interval = setInterval(init, 15000)
})

btn_ant.addEventListener("click", function(){
    selectComments("-", comments)
    clearInterval(interval)
    interval = setInterval(init, 15000)
})

function init(){
    selectComments("+", comments)
}

function selectComments(signal, cmm) {
    let currentComment = verifyClassShow(cmm)
    let nextComment
    if (signal == "+") {
        nextComment = currentComment + 1
        if (nextComment > 5) {
            nextComment = 0
            changeComment(currentComment, nextComment)
        } else {
            changeComment(currentComment, nextComment) 
        }
    } else if (signal == "-") {
        nextComment = currentComment - 1
        if (nextComment < 0) {
            nextComment = 5
            changeComment(currentComment, nextComment)
        } else {
            changeComment(currentComment, nextComment) 
        }
    }
    
}

function verifyClassShow(cmm) {
    let numCard
    for (let i = 0; i <= cmm.length - 1; i++) {
        if (cmm[i].classList.contains("show")) {
            numCard = i
        }
    }
    return numCard = numCard == undefined ? numCard = 0 : numCard
}

function changeComment(crrCmm, nxtCmm) {
    comments[crrCmm].classList.remove("show")
    comments[nxtCmm].classList.add("show")
}