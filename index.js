let countEl = document.getElementById("counter")
let count = 0
function increament(){
    console.log(count)
    count = count+1
    countEl.innerText = count
}

function decreament(){
    console.log(count)
    if (count > 0) {
        count = count-1
        countEl.innerText = count
    }
}

function reset(){
    console.log(count)
    count = 0
    countEl.innerText = count
}