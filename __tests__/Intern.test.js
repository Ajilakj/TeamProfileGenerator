const Intern=require("../lib/Intern");

describe('Intern class', () => {
     const intn = new Intern('intn001','intern1','intern1@test.com','schoolintern1');
     
       it('Check Intern initialization', () => {

          expect(intn.getId()).toEqual('intn001');
         
          expect(intn.getName()).toEqual('intern1');
     
     
          expect(intn.getEmail()).toEqual('intern1@test.com');
     });

     it("Check Intern's School", () => {
     
          expect(intn.getSchool()).toEqual('schoolintern1');
     });
     
          it("Check Intern's role", () => {
     
               expect(intn.getRole()).toEqual('Intern');
          });
     })