const Mgr=require("../lib/Manager");

describe('Manager class', () => {
     const mgr = new Mgr('mgr001','manager1','manager1@test.com','office001');
     
       it('Check Manager initialization', () => {
         
          expect(mgr.getName()).toEqual('manager1');
     
          expect(mgr.getId()).toEqual('mgr001');
     
          expect(mgr.getEmail()).toEqual('manager1@test.com');
     });

     it("Check Manager's office Number", () => {
     
          expect(mgr.getOfficeNumber()).toEqual('office001');
     });
     
          it("Check Manager's role", () => {
     
               expect(mgr.getRole()).toEqual('Manager');
          });
     })