function performcalculation(operation) {
    const num1 = Number(document.getElementById("num1").value);
    const num2  = Number(document.getElementById("num2").value);

    //const num1 = Number(prompt("Enter the Value of Number1:"));
   // const num2 = Number(prompt("Enter the Value of Number2:"));
   let result ;
    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
            case "sub":
            result = num1 - num2;
            break;
            case "mul":
            result = num1 * num2;
            break;
            case "div":
            result = num1 / num2;
            break;
            default:
            result = "Invalid operation" ;
    }

    
    const msg = confirm("Are you sure want to display the result");
    if (msg){
        setTimeout (() => {
        document.getElementById("results").innerText =result;
    },3000);
    }   
    else{
        setInterval (()=> {
        //document.getElementById("results"). innerText = "result was not displayed" ;
        alert("Message was not displayed");
    },2000)
    }

    
}
