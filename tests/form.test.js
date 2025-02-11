const {validatePassword,validateNames} = require("../utilities")

test("validate password works as expected", () =>{
    expect(validatePassword("s", "S")).toBe(false)
    expect(validatePassword("S", "S")).toBe(false)
    expect(validatePassword("Password123", "Password1234")).toBe(false)
    expect(validatePassword("SSSS", "SSSS")).toBe(false)
    expect(validatePassword("","")).toBe(false)
    expect(validatePassword("Pass","")).toBe(false)
    expect(validatePassword("password1234","Password1234")).toBe(false)
    expect(validatePassword("PaSwORd2212345678","PaSwORd2212345678")).toBe(true)
    expect(validatePassword("     ","     ")).toBe(false)
    expect(validatePassword("casesensisitve","CASESENSITIVE")).toBe(false)
    expect(validatePassword("pAs","pas")).toBe(false)
    expect(validatePassword("StrongPass1", "StrongPass1")).toBe(true); 
    expect(validatePassword("NoNumbersHere", "NoNumbersHere")).toBe(false); 
    expect(validatePassword("12345678", "12345678")).toBe(false); 
    expect(validatePassword("Aa1Bb2Cc3", "Aa1Bb2Cc3")).toBe(true);
})

test("validate name works as expected", () =>{
    expect(validateNames("va", "ns")).toBe(false);
    expect(validateNames("Vansh", "Patel")).toBe(true);
    expect(validateNames("Vansh1", "Patel1")).toBe(false);
    expect(validateNames("@", "@")).toBe(false);
    expect(validateNames("VANSH", "patel")).toBe(true);
})