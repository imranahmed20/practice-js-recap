
document.getElementById('btn-apply').addEventListener('click', function () {
    const previousBalanceAmount = getInputValueById('total-price');
    const inputValue = document.getElementById('cupon-field');
    const input = inputValue.value;
    if (input === 'DISC30') {
        const passAmount = previousBalanceAmount * .30;
        setElementById('pass-price', passAmount)
    }
    else {
        alert('Your type is not Right.Please valid type')
        setElementById('pass-price', previousBalanceAmount)
    }

})