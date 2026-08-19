let countEl = document.getElementById("count-el")
let saveEl = document.getElementById("save-el")
let count = 0

function increment() {
    count += 1
    countEl.textContent = count
}
function resetCount(){
    count = 0
    countEl.textContent = 0
}

function save(){
    let savedCount = count + " - "
    saveEl.textContent += savedCount
    resetCount()
}


