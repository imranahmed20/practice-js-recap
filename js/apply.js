

document.getElementById('btn-apply').addEventListener('click', function(){
    const previousBalance = getInputValueById('total-price')
    const passNewBalance = previousBalance * .30;
    setElementById('pass-price', passNewBalance)
    // const newBalance = getElementValueById('pass-price')
    // console.log(previousBalance)
})