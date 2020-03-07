function handleInput() {
    let userInput = document.getElementById('input1').value;
    if(userInput != "" || null){
        var res = palindrome(userInput);
        drawAnswer(res);
    }else{
        document.getElementById('answer-text').style.display = "block";
        document.getElementById('answer').innerHTML = "Needs input to render response!";
    }
    
}

function palindrome(str){
  let reverse = str.split('').reverse().join('');
  return reverse === str;
}

function drawAnswer (res){
    document.getElementById('answer-text').style.display = "block";
    if(res){
        document.getElementById('answer').innerHTML = "Yes, Palindrome";
    } else {
        document.getElementById('answer').innerHTML = "No, Not a Palindrome :(";
    }
}

function hideAnswer() {
    let userInput = document.getElementById('input1').value;
    if(userInput == ""){
        document.getElementById('answer-text').style.display = "none";
    }
}