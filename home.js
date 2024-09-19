// add money

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoney = document.getElementById('input-add-money').value;
    const pinNumber = document.getElementById('input-pin').value;
    
    if(pinNumber === '1234'){
        console.log('adding money to your account');
    const balance = document.getElementById('account-balance').innerText;
    const addMoneyNumber = parseFloat(addMoney);
    const balanceNumber = parseFloat(balance);

    const newBalance = addMoneyNumber + balanceNumber;
    // console.log(newBalance)
    document.getElementById('account-balance').innerText= newBalance

    }
    else{
        alert('Wrong Pin Number, Please provide right Pin number')
    }
})