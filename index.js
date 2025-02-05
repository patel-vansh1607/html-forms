console.log("HTML FORMS")
const firstName = document.getElementById("firstName")
firstName.addEventListener("change", (e) =>{
    const name = e.target.value
    console.log(name)
})
