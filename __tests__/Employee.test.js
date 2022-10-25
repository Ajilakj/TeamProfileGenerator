const Emp = require('../lib/Employee');

describe('Employee class', () => {
const emp = new Emp('emp001','employee1','employee1@test.com');

  it('Check Employee initialization', () => {

     expect(emp.getId()).toEqual('emp001');
    
     expect(emp.getName()).toEqual('employee1');


     expect(emp.getEmail()).toEqual('employee1@test.com');
});


     it("Check Employee's role", () => {

          expect(emp.getRole()).toEqual('Employee');
     });
})