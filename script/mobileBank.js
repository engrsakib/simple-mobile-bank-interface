// daisy teme control 
const htmlTag = document.getElementsByTagName('html')[0];
htmlTag.setAttribute('data-theme', 'acid');

//home

const logInBtn = document.getElementById('button-log=in');
const logInPhone = document.getElementById('login-phone');
const logInPin = document.getElementById('login-pin');

logInBtn.addEventListener('click', function(e){
    e.preventDefault();  // for stop reload page after clicking
    // get phone number
    const phoneNumber =  logInPhone.value;
    const pinNumber = logInPin.value;

    if(phoneNumber === '01992547202' && pinNumber === '0123') console.log("you are log in");
    else alert("wrong password or phone please trya again");
})