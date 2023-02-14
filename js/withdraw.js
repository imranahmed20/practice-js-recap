console.log('click withdraw')

document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputValueById('withdraw-field')
    const previousWithdrawAmount = getElementValueById('withdraw-amount')

    const currentWithdrawAmount = previousWithdrawAmount + newWithdrawAmount;
    setElementById('withdraw-amount', currentWithdrawAmount);

    const previousBalanceAmount = getElementValueById('balance-amount')

    const restBalance = previousBalanceAmount - newWithdrawAmount;
    setElementById('balance-amount', restBalance)
})