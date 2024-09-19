
document.getElementById('btn-cash-out').addEventListener('click', function(event){
    event.preventDefault();
    
    const cashOutAmount= document.getElementById('input-cashOut').value;
    const cashOutAmountNumber= parseFloat(cashOutAmount);
    // console.log(cashOutAmountNumber)

    const accountBalance = document.getElementById('account-balance').innerText;
    const accountBalanceNumber = parseFloat(accountBalance);

    const pinNumber = document.getElementById('input-cashout-pin').value;
    // console.log(pinNumber)

    if(pinNumber === '1234'){
        
        const newBalance = accountBalanceNumber - cashOutAmountNumber;
        document.getElementById("account-balance").innerText= newBalance;
        alert('Cash Out Successful')

    }

    else{
        alert('Wrong Pin Number, Please Provide Correct Pin Number')
    }

    



})