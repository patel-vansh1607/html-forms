console.log("HTML FORMS")

let details = {
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    password: '',
    confirmPassword: '',
}



const firstName = document.getElementById("firstName")
firstName.addEventListener("change", (e) =>{
    const name = e.target.value
    console.log(name)
})
