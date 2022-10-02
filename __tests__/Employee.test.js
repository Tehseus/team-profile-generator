const Employee = require("../lib/Employee");

describe('Get Name', () => {
    it("should display data from entries", () => {

      const text = 'Korbyn';

      const obj = new Employee(text);

      expect(obj.name).toEqual(text);
    })
       
});

describe('Get ID', () => {
    it("should display data from entries", () => {

      const text = 5;

      const obj = new Employee(text, 5);

      expect(obj.id).toEqual(text);
    })
       
});

describe('Get email', () => {
    it("should display data from entries", () => {

      const text = "test@test.com";

      const obj = new Employee(text, 5, "test@test.com");

      expect(obj.email).toEqual(text);
    })
       
});
describe('Get ID', () => {
    it("should display data from entries", () => {

      const text = "title";

      const obj = new Employee(text, 5, "test@test.com", "title");

      expect(obj.title).toEqual(text);
    })
       
});