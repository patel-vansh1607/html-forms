function validatePassword(password,confirmPassword){
    if (password===confirmPassword && password.length >= 4){
        return true;
    } else {
        return false;
    }
}

module.exports = validatePassword