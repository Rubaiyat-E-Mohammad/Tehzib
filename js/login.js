//confirmation before submission
$('#login').click(function confirm(){
    alert('proceed?')
})


//submitted value
var form = document.querySelector('form');
var email = form.querySelector('div .email')
var password = form.querySelector('div .password')
form.addEventListener('submit', formHandler)
function formHandler(e){
    e.preventDefault()
    const userInfo= {
        email: email.value,
        password: password.value,
    }
    console.log(userInfo)
    email.value=""
    password.value=""
}