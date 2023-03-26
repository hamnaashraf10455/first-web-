let errorMsg = 'Something went wrong, please try again';

let pError = document.getElementById("error");
window.onload = function (){
    let btn = document.getElementById("p-btn");
    btn.onclick = displayError;
}

function displayError() {
    pError.textContent = errorMsg;
}