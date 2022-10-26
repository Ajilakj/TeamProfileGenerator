const inquirer=require('inquirer');
const fs = require('fs');

const Mgr=require('./lib/Manager');
const Engr=require('./lib/Engineer');
const Intr=require('./lib/Intern');

var employeeArray = [];

let github = "";
let school = "";

inquirer.prompt([
     {
          type: 'input',
          message: "Please enter team manager's name",
          name: 'empName',
     },
     {
          type:'input',
          message:'What is your employee id?',
          name:'empId',
     },
     {
          type:'input',
          message:'Enter your email?',
          name:'email'
     },
     {
          type:'input',
          message:'Enter your office number?',
          name:'officeno'
     },
     
   ])

   .then((input)=>{
          employeeArray.push(new Mgr(input.empId, input.empName, input.email, input.officeno));
          selectEmpType();
     }
   );

function selectEmpType(){
     inquirer.prompt([
          {
               type: 'list',
               name: 'TypeEmp',
               message: 'Select Employee type',
               choices: ['Engineer','Intern']
          }
     ])

    .then((input)=>{
          if(input.TypeEmp==="Engineer"){
               inquirer.prompt([
               {
                    type:'input',
                    message:'Enter Github user name?',
                    name:'github'
               }
               ])   .then((input)=>{
                  
                   github =input.github;
                   createEmpProfile();
               }
             );
          }
          else{
               inquirer.prompt([
                    {
                         type:'input',
                         message:'Enter School name?',
                         name:'school'
                    }
               ]) 
               .then((input)=>{
               
                    school = input.school;
                    createEmpProfile();
                }
              );
          }
         
     });
     

}
function createEmpProfile(){
     inquirer.prompt([
     {
          type: 'input',
          message: "Please enter Employee name",
          name: 'empName',
     },
     {
          type:'input',
          message:'Please enter Employee id?',
          name:'empId',
     },
     {
          type:'input',
          message:'Enter Employee email?',
          name:'email'
     },
     {
          type:'confirm',
          message:'Do you want to continue?',
          name:'confirm'
     },
   ])


   .then((input)=>{
     if(github != ""){
          employeeArray.push(new Engr(input.empId, input.empName, input.email, github));
     }
     else{
          employeeArray.push(new Intr(input.empId, input.empName, input.email, school));
     }
     if(input.confirm===true){
          selectEmpType();
      }
      else{
          fs.writeFile('./dist/index.html','<!DOCTYPE html><html lang="en"><head><meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><title>Employee Profile Generator</title><link rel="stylesheet" href="style.css"></head><body><header><h1>My Team</h1></header><main id="empDetails">', (err) =>
          err ? console.error(err) : console.log('Start to create HTML'));
           
          for(let i=0;i<employeeArray.length;i++){

               let htmlContent =  '<div class="card"><h2>'+
               employeeArray[i].getName()
               + '</h2><h3>'+
               employeeArray[i].getRole()
               + '</h3><div><p> Id:'+employeeArray[i].getId()+
               '<p> email: <a href="mailto:'+employeeArray[i].getEmail()+'" target="_blank">'+employeeArray[i].getEmail()+'</a>';

               if(employeeArray[i].getRole()==="Manager"){
                    htmlContent += '<p> Office Number:'+employeeArray[i].getOfficeNumber();
               }
               else if(employeeArray[i].getRole()==="Engineer"){
                    htmlContent +='<p> GitHub: <a href="https://github.com/'+employeeArray[i].getGithub()+'" target="_blank">'+employeeArray[i].getGithub()+'</a>';
               }
               else{
                    htmlContent +='<p> School:'+employeeArray[i].getSchool();
               }
               htmlContent += '</div></div>';
          
               fs.appendFile('./dist/index.html',
               htmlContent, 
                (err) =>
               err ? console.error(err) : console.log('Created Cards!'));
          }   

           fs.appendFile('./dist/index.html',
               '</main></body></html>', 
                (err) =>
               err ? console.error(err) : console.log('Created HTML!'));
      }
      
      
 });
}
     