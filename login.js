
// step- 1 set the event handler
document.getElementById('button-login').addEventListener('click', function(event){
   //step-2 prevent default behaviour
    event.preventDefault();

    // step-3 get the phone number & pin number
    const phoneNumber= document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;
    console.log(phoneNumber, pinNumber)
    
    //temporary way
    if(phoneNumber === '01964843710' && pinNumber === '1234'){
        console.log('You logged in')
        window.location.href = '/home.html'
    }
    else{
        alert('wrong phone number or pin number')
    }
})