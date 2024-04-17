import inquirer from "inquirer";
let answers = await inquirer.prompt([
    {message: 'Enter first Number',type:'number',name:'firstNumber'},
{messsage: 'Enter Second Number',type:'number',name:'secondNumber'},                                                 
{
 message:'select one operator to perform operations',   
type:"list",
name:'operators',
choices :['ADDITION' , 'SUBTRACTION' , 'MULTIPLICATION' , 'DEVISION', ],
},


])
if (answers.operators === "ADDITION"){
    console.log(answers.firstNumber + answers.secondNumber)
}
else if (answers.operators === "SUBTRACTION"){
    console.log(answers.firstNumber - answers.secondNumber)
}
else if (answers.operators === "DEVISION"){
    console.log(answers.firstNumber / answers.secondNumber)
}
else if (answers.operators === "MULTIPLICATION"){
    console.log(answers.firstNumber * answers.secondNumber)
} 
else{
    console.log("invalid operators")
}
