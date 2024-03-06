
let User_Choice=prompt("CALCULATOR" + "\n\n1:Addition" + "\n2:Subtraction" + "\n3:Multiplication" + "\n4:Division" + "\n5:Reminder" + "\n\nEnter your choice:");


if(User_Choice>5){
    swal("Please enter correct choice!!!");
}

if(User_Choice==1){
    let Add_num1=+prompt("Enter 1st number:");
    let Add_num2=+prompt("Enter 2st number:");
    let Sum=Add_num1 + Add_num2;
    alert("Sum of " + Add_num1 + " and " + Add_num2 + " is " + Sum )
    document.write("Sum of ",Add_num1," and ",Add_num2," is ",Sum);
}

if(User_Choice==2){
    let Sub_num1=+prompt("Enter 1st number:");
    let Sub_num2=+prompt("Enter 2st number:");
    let Sub=Sub_num1 - Sub_num2;
    alert("Subtraction of " + Sub_num1 + " and " + Sub_num2 + " is " + Sub )
    document.write("Subtraction of ",Sub_num1," and ",Sub_num2," is ",Sub);
}

if(User_Choice==3){
    let Mul_num1=+prompt("Enter 1st number:");
    let Mul_num2=+prompt("Enter 2st number:");
    let Mul=Mul_num1 * Mul_num2;
    alert("Multiplication of " + Mul_num1 + " and " + Mul_num2 + " is " + Mul )
    document.write("Multiplication of ",Mul_num1," and ",Mul_num2," is ",Mul);
}

if(User_Choice==4){
    let Div_num1=+prompt("Enter 1st number:");
    let Div_num2=+prompt("Enter 2st number:");
    let Div=Div_num1 / Div_num2;
    alert("Division of " + Div_num1 + " and " + Div_num2 + " is " + Div)
    document.write("Division of ",Div_num1," and ",Div_num2," is ",Div);
}

if(User_Choice==5){
    let Rem_num1=+prompt("Enter 1st number:");
    let Rem_num2=+prompt("Enter 2st number:");
    let Rem=Rem_num1 % Rem_num2;
    alert("Reminder of " + Rem_num1 + " and " + Rem_num2 + " is " + Rem)
    document.write("Reminder of ",Rem_num1," and ",Rem_num2," is ",Rem);
}

