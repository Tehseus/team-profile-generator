const Engineer = require('../lib/Engineer');

describe('Get github', () => {
    it("should display the github name", () => {
    
        const github = "githubuser"
      
      const obj = new Engineer("Grayson", 1, "test@test.com", github);
      console.log(obj);
      
      expect(obj.getGitHub()).toEqual(github);
    })
       
});

describe('Get role', () => {
    it("should display engineer", () => {
    
        const github = "githubuser"
      
      const obj = new Engineer("Grayson", 1, "test@test.com", github);

      
      expect(obj.getRole()).toEqual("Engineer");
    })
});