    var currentNumberWraper = document.getElementById('currentNumber');
    var currentNumber = 0;


function increment(){
   if(currentNumber <= 9){ currentNumber = currentNumber +1;}
       
    currentNumberWraper.innerHTML = currentNumber;
   
}

function decrement() {  
    if(currentNumber >= -9){currentNumber = currentNumber -1;}
    currentNumberWraper.innerHTML = currentNumber;

}






