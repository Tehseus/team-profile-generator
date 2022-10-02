const Intern = require("../lib/Intern");

describe('Get the interns school info', () => {
    it("should display data from entries", () => {
        
      const text = "school";

      const obj = new Intern("Korbyn", 1, "test@test.com", "school");

      expect(obj.getSchool()).toEqual(text);
    })
       
});

describe('Get the role', () => {
    it("should display data from entries", () => {
        
      const text = "school";

      const obj = new Intern("Korbyn", 1, "test@test.com", "school");

      expect(obj.getRole()).toEqual("Intern");
    })
       
});
