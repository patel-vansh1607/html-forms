console.log("HTML FORMS")

let details = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
    acceptTerms: false
}


const submitButton = document.getElementById("submitButton")

const firstName = document.getElementById("firstName")
const lastName = document.getElementById("lastName")
const email = document.getElementById("email")
const phoneNumber = document.getElementById("phoneNumber")
const password = document.getElementById("password")
const confirmPassword = document.getElementById("confirmPassword")

firstName.addEventListener("change", (e) =>{
    const name = e.target.value
    details.firstName = name
})


lastName.addEventListener("change", (e) =>{
    const lastName = e.target.value
    details.lastName = lastName
})


email.addEventListener("change", (e) =>{
    const email = e.target.value
    details.email = email
})


phoneNumber.addEventListener("change", (e) =>{
    const phoneNumber = e.target.value
    details.phoneNumber = phoneNumber
    //checks if phone number is valid or not
    const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneNumber)) {
    console.log("Invalid phone number");
}
    //checks if the number is a valid kenyan number or not
    const kenyanPhoneRegex = /^(?:\+254|254|0)[17]\d{8}$/;
    if (kenyanPhoneRegex.test(phoneNumber)) {
        alert("Valid Kenyan Number");
     } else {alert("Invalid Kenyan phone number");}
        
    


})


password.addEventListener("change", (e) =>{
    const password = e.target.value
    details.password = password
})

confirmPassword.addEventListener("change", (e) =>{
    const confirmPassword = e.target.value
    details.confirmPassword = confirmPassword
})

function validatePassword(password, confirmPassword){
    if (password === confirmPassword ){
        alert("Passwords Match | You're good to go  ~ True")
    } else alert("PASSWORDS DON'T MATCH ~ False")

}
submitButton.addEventListener("click", (e) =>{
    console.log(details)
    const { firstName, lastName, email, password, confirmPassword, acceptTerms} = details
    console.log(firstName, lastName, email, password, confirmPassword, acceptTerms)

    validatePassword(password, confirmPassword)
})



