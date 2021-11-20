var readinput=require("readline-sync");
const chalk = require("chalk");

var score=0;
var userName=readinput.question("enter you name: ")
console.log("Welcome",userName, "to Cricket Quiz !!!!! \ntest your knowledge about Indian Cricket Team")
console.log("-----------------------------------------------------")

questions=['Who is known as Captain Cool?', "How many times did India win the Cricket World Cup?", "Which Year India won the first Cricket World Cup?", " 1. Who is the India women's national cricket team, T20I captain in the 2020 World Cup? "]

Answers=[3,3,2,4]

Options=[['Sachin Tendulkar', 'Rohit Sharma', 'Mahendra Singh Dhoni', 'Virat Kohli'], ['1','3','2','4'],['2011','1983','2015','1988'],['Harleen Deol','Harmanpreet Kaur','Smriti Mandhana','Mithali Raj']]

var quiz_Text=function(questions,Answers,Options){
        var i=0;
        var count=1
        while(i<questions.length){
            console.log(count, questions[i])
            var j=0;
            var c=1
            while(j<Options.length){
                console.log(chalk.white(c, Options[i][j]))
                j++
                c++
            }var userAns=readinput.questionInt("enter your Answer:- ");
            if(userAns===Answers[i]) {
                console.log(chalk.green("Right !!!!"))
                score++
                console.log("you scored", score)
                console.log("*********------------*********-------------**********")
                
            }else{
                console.log(chalk.red(" Oppps........Wrong !"))
                
            }i++
            count++
            console.log("                                                                               ")
        }
}
quiz_Text(questions,Answers,Options)
if(score>0){
    console.log(chalk.green("Congratulations !!! your Total score is", score));
}
else{
    console.log(chalk.red("Game over\n Your total score is", score))
}
console.log("-----------------------------------------------------")