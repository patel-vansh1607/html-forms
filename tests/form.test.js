const validatePassword = require("../validatePassword")

test("validate password works as expected", () =>{
    expect(validatePassword("s", "S")).toBe(false)
    expect(validatePassword("S", "S")).toBe(false)
    expect(validatePassword("Password123", "Password1234")).toBe(false)
    expect(validatePassword("SSSS", "SSSS")).toBe(true)
    expect(validatePassword("","")).toBe(false)
    expect(validatePassword("Pass","")).toBe(false)
    expect(validatePassword("password1234","Password1234")).toBe(false)
    expect(validatePassword("PaSwORd2212345678","PaSwORd2212345678")).toBe(true)
    expect(validatePassword("     ","     ")).toBe(false)


})