function validatePassword(password,confirmPassword){
    if (password===confirmPassword && password.length >= 4 && password!== "" && password.length != 0 && password.trim().length!==0){
        return true;
    } else {
        return false;
    }
}

module.exports = validatePassword