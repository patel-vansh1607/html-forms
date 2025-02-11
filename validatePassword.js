function validatePassword(password,confirmPassword){
    if (password===confirmPassword && password.length >= 4 && password!== "" && password.length != 0 && password.trim().length!==0 && /\d/.test(password) && /[a-zA-Z]/.test(password)){
        return true;
    } else {
        return false;
    }
}
function validateNames(firstName, lastName){
    //using test validate first name and last name are not less than 4 charactes

}

module.exports = {
    validatePassword,
    validateNames
}