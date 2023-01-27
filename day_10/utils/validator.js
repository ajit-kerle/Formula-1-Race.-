function isValid(value){
    if(typeof value==="undefined" || typeof value===null)return false;
    if(typeof value ==="string" && value.trim().length ==0)return false;     
    return true
}

function isValidEmail(email){
    let emailRegex=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return emailRegex.test(email)
}

function isValidPassword(password){
    let passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,15}$/
    return passwordRegex.test(password)
}


module.exports={isValid,isValidEmail,isValidPassword}