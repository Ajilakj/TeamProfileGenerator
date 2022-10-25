const inquirer=require('inquirer');
//const newFile = require('fs');
inquirer.prompt([
          {
            type: 'input',
            message: 'Please enter your name',
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
          }
     ])

     // .then((input) =>
     // {
     //      JSON.stringify(input);
     //      newFile.appendFile('fronUser.txt', `${input.userName}\n${input.language}\n${input.preferred}\n`, (err) =>
     //      err ? console.error(err) : console.log('added to file!')
     //      )
     // }
     // );
class Employee{
     
}
class Manager extends Employee{

}
class Engineer extends Employee{

}
class Intern extends Employee{
     
}