//confirmation before submission
$('#signup').click(function confirm(){
    alert("All informations are right?")
})


//submitted value
var form = document.querySelector('form')
var fname = form.querySelector('div #fname')
var lname = form.querySelector('div #lname')
var email = form.querySelector('div #email')
var phone = form.querySelector('div #phone')
var address = form.querySelector('div #address')
var city = form.querySelector('div #city')
var division = form.querySelector('div #division')
var dob = form.querySelector('div #dob')
var password = form.querySelector('div #password')
var repassword = form.querySelector('div #re-Password')
form.addEventListener('submit', formHandler)
function formHandler(e){
    e.preventDefault()
    const userInfo= {
        fname: fname.value,
        lname: lname.value,
        email: email.value,
        phone: phone.value,
        address: address.value,
        city: city.value,
        division: division.value,
        dob: dob.value,
        password: password.value,
        repassword: repassword.value,
    }
    console.log(userInfo)
    fname.value=""
    lname.value=""
    email.value=""
    phone.value=""
    address.value=""
    city.value=""
    division.value=""
    dob.value=""
    password.value=""
    repassword.value=""

}
