const Manager = require("../lib/Manager");


describe('Get managers office number', () => {
    it("should display data from entries", () => {
        
      const text = 50;

      const obj = new Manager("Grayson", 1, "test@test.com", 50);

      expect(obj.getOfficeNum()).toEqual(text);
    })
       
});

describe('Get Role', () => {
    it("should display the role of the employee", () => {
        
      const obj = new Manager("Grayson", 1, "test@test.com", 50);

      expect(obj.getRole()).toEqual("Manager");
    })
       
});