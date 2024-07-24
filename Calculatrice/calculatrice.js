// Write JavaScript code here
function appendToDisplay(content){
    const display=document.getElementById('display');
    display.value += content;
}

function clearDisplay(){
    document.getElementById('display').value = '';
}

function deleteLast(){
    let display=document.getElementById('display').value;
    document.getElementById('display').value = display.substring(0, display.length-1);
}

function calculateResult(){
    let content=document.getElementById('display').value;
    document.getElementById('display').value=eval(content)
}