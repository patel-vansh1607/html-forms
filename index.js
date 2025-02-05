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

const lastName = document.getElementById("lastName")
firstName.addEventListener("change", (e) =>{
    const name = e.target.value
    console.log(name)
})

const email = document.getElementById("email")
firstName.addEventListener("change", (e) =>{
    const name = e.target.value
    console.log(name)
})

