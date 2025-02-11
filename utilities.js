function validatePassword(password,confirmPassword){
    if (password===confirmPassword && password.length >= 4 && password!== "" && password.length != 0 && password.trim().length!==0 && /\d/.test(password) && /[a-zA-Z]/.test(password)){
        return true;
    } else {
        return false;
    }
}
function validateNames(firstName, lastName){
    if (firstName.length <= 4 || lastName.length <= 4 || !/^[A-Za-z]+$/.test(firstName|| !/^[A-Za-z]+$/ .test(lastName) || firstName.length <=2 ||lastName.length<= 2)){
        return false
    } else {
        return true
    }

}

module.exports = {
    validatePassword,
    validateNames
}

// phone number and email