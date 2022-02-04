let display = document.querySelector('#display');
const c = document.querySelector('#c');
const equal = document.querySelector('#equal');
let numbers = document.querySelectorAll('.button');
let oper = '';
numbers.forEach(number => {
    if(number.innerText.codePointAt() >= 48 && number.innerText.codePointAt() <= 57 ) {
        number.addEventListener('click', event => { 
                if(error){
                    display.innerText = '';
                }
                display.innerText += number.innerText;
                num = display.innerText;
    }
)
    }

});
c.addEventListener('click', () => {
    display.innerText = '';
    result = '';
    isFirst = true;
    deletion.disabled = false;
})
const deletion = document.querySelector('.deletion');
deletion.addEventListener('click', (e) => {
    e.preventDefault();
    display.innerText = display.innerText.slice(0, -1);
})
const addition = (a, b) => {
    return parseInt(a)+parseInt(b);
}
const abstraction = (a, b) => {
    return parseInt(a)-parseInt(b);
}
const multiplication = (a, b) => {
    return parseInt(a)*parseInt(b);
}
const division = (a, b) => {
    return parseInt(a)/parseInt(b);
}
let result;
let num;

let isFirst = true;
const ops = document.querySelectorAll('.op');
ops.forEach(op => {
    op.addEventListener('click', () => {
        if (isFirst){
            result = parseInt(display.innerText);
            isFirst = false;
        }
        oper = op.innerText;
        display.innerText = '';
    })
})
error = false;
equal.addEventListener('click', () => {
    
    if(isFirst){
        display.innerText = 'Error! try a valid input';
        error = true;
    }
    else{
        deletion.disabled = true;
        switch(oper){
            case '+':
                result = addition(result, num);
                display.innerText = result.toString();
                oper = '';
                break;
            case '-':
                result = abstraction(result, num);
                display.innerText = result.toString();
                oper = '';
                break;
            case '÷':
                result = division(result, num);
                display.innerText = result.toString();
                oper = '';
                break;
            case 'x':
                result = multiplication(result, num);
                display.innerText = result.toString();
                oper = '';
                break;
            default:
                oper = '';
                break;
        }
    }
    
})


