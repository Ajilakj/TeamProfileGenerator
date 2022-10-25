const Engr=require("../lib/Engineer");

describe('Engineer class', () => {
     const engr = new Engr('engr001','engineeer1','engineeer1@test.com','gitengineeer1');
     
       it('Check Engineer initialization', () => {

          expect(engr.getId()).toEqual('engr001');
         
          expect(engr.getName()).toEqual('engineeer1');
     
     
          expect(engr.getEmail()).toEqual('engineeer1@test.com');
     });

     it("Check Engineer's Github user name", () => {
     
          expect(engr.getGithub()).toEqual('gitengineeer1');
     });
     
          it("Check Engineer's role", () => {
     
               expect(engr.getRole()).toEqual('Engineer');
          });
     })