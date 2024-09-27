const calculate=()=>{
    let num1=parseFloat(document.querySelector("#num1").value);
    let num2=parseFloat(document.querySelector("#num2").value);
    let operator=document.querySelector("#operator").value;
    let answer="";

switch(operator){
    case "+":
        answer=num1+num2;
        break;
        case "-":
        answer=num1-num2;
            break;
            case "*":
               answer=num1*num2;
                break;
                case "/":
                    if(num2==0){
                       answer="indeterminate form:";
                    }
                    else{
                        answer=num1/num2;
                }
                    break;
                    case "%":
                          answer=num1%num2 ;
                        break;
                        default:
                            answer="enter the correct operator:";
                        
     
}
document.querySelector("#result").textContent=`Result:${answer}`;
};