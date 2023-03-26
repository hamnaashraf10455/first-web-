let count = 0;

let counterEl = document.getElementById("counter");
function increment(){
    count += 1;
    counterEl.textContent = count;
    
}   

let saveEl = document.getElementById("save-el");
function save(){
    let sCount = count + " - ";
    saveEl.textContent += sCount; 
    console.log(count);
    count = 0;
    counterEl.textContent = count;
}
