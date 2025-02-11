function validatePassword(password,confirmPassword){
    if (password===confirmPassword){
        return true;
    } else {
        return false;
    }
}

module.exports = validatePassword