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
    document.getElementById("results").innerText = result;
}

 document.getElementById("add").addEventListener("click", function() {
        performcalculation("add");
    });
document.getElementById("sub").addEventListener("click", function() {
        performcalculation("sub");
    });
document.getElementById("mul").addEventListener("click", function() {
        performcalculation("mul");
    });
document.getElementById("div").addEventListener("click", function() {
        performcalculation("div");
    });
 

  
 /*const sub = document.getElementById('sub');
    add.addEventListener("click",performcalculation(sub));
    const mul = document.getElementById('mul');
    add.addEventListener("click",performcalculation(mul));
    const div = document.getElementById('div');
    add.addEventListener("click",performcalculation(div));*/

    
    //const msg = confirm("Are you sure want to display the result");
    //if (msg){
      //  setTimeout (() => {
        
   // },3000);
    //}   
    //else{
      //  setInterval (()=> {
        //document.getElementById("results"). innerText = "result was not displayed" ;
        //alert("Message was not displayed");
  //  },2000)
    //}

    

