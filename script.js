const digits = document.querySelectorAll('.digit')
const digit = [...digits] //convert digits, a node list, to an array
const input = document.querySelector('input')
const clearButton = document.querySelector('.clearButton')
const operators = document.querySelectorAll('.operators button')
const operator = [...operators] //converting operators which is a nodelist to operator which is an array
const equal = document.querySelector('.equal-sign')




let operand1 = null; 
let operand2 = null;
let sign = null;

// Events
digit.forEach((button) => {
    button.addEventListener('click', showValue)
})

clearButton.addEventListener('click', clearDisplay)

operator.forEach((data) => {
    data.addEventListener('click', operate)
})

equal.addEventListener('click', showResult)





// CallBacks
function showResult(){

    console.log('you clicked for result')
    if (operand1 === null){
        operand1 = +input.value;
        input.value = operand1.toString();
    }else{
        operand2 = +input.value

        if(sign === '+'){
            operand1 += operand2  
        } else if(sign === '-'){
            operand1 -= operand2  
        }else if(sign === '*'){
            operand1 *= operand2  
        }else if(sign === '/'){
            operand1 /= operand2  
        }

        operand2 = null;
        input.value = operand1.toString()
        sign = '='
        console.log('you clicked for result 2')
    }

   
   
    
}

function clearDisplay(){
    console.log('you cleared your screen')
    input.value = ''
    operand1 = null
    operand2 = null
}

function showValue (){
    console.log('you clicked me')
    input.value = input.value + this.value
}

function operate(){
    console.log('i execute the arithmetic')
    if (operand1 === null || sign === '='){
        operand1 = +input.value;
        sign = this.value  
        input.value = ''
        console.log('i executed 2')
        
    } else{
        operand2 = +input.value
        
        if(sign === '+'){
           operand1 += operand2  
        } else if(sign === '-'){
           operand1 -= operand2  
        }else if(sign === '*'){
           operand1 *= operand2  
        }else if(sign === '/'){
           operand1 /= operand2  
        }
        sign = this.value;

        input.value = ''
        
    }
    
    
    
}

