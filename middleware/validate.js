const validateEmail = (email) => {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    return re.test(email)
}

const validateDate = (date) => {
    today = new Date()
    input = new Date(date)
    return input <= today
}

const validatePhone = (phone) => {
    var re = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/
    return re.test(phone)
}

module.exports = {
    validateEmail,
    validateDate,
    validatePhone
}