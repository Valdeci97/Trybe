// loginValidation.test.js
const {
  greetingMessage,
  loginErrorMessage,
  verifyCredentials,
} = require("./loginValidation.js");

describe("a função verifyCredentials()", () => {
  
  it("verifyCredentials() calls the correct function depending on the user and password input", () => {
    
    const user = {
      userName: 'Joana',
      password: 123456,
    };
      
    const { userName, password } = user;

    expect(verifyCredentials({ userName, password })).toBe(
      "Hello, Joana! Que bom ter você de volta"
    ); 
  });

  it("greetingMessage() returns a message in the format: `Hello, ${user}! Que bom ter você de volta`", () => {
    expect(greetingMessage("Lucas")).toBe(
      "Hello, Lucas! Que bom ter você de volta"
    );
  });

  it("loginErrorMessage() returns a message in the format: `Pessoa usuária '${user}' não encontrada, tente novamente!`", () => {
    expect(loginErrorMessage("Bob")).toBe(
      "Pessoa usuária 'Bob' não encontrada, tente novamente!"
    );
  });  
});

// Exemplo sobre o .not e sua aplicação.
// const workDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];
// const weekDays = ['Sunday', ...workDays, 'Saturday'];

// test('Sunday is a week day', () => {
//   expect(weekDays).toContain('Sunday');
// });

// test('Sunday is not a workday', () => {
//   expect(workDays).not.toContain('Sunday');
// });