document.getElementById('btn-show-cashOut')
.addEventListener('click', function(){
    console.log('show cash out button')
    document.getElementById('cashOut-container').classList.remove('hidden')
    document.getElementById('add-money-container').classList.add('hidden')
});

// 

document.getElementById('btn-addMoney-show')
.addEventListener('click', function(){
    document.getElementById('add-money-container').classList.remove('hidden')
    document.getElementById('cashOut-container').classList.add('hidden')

})



