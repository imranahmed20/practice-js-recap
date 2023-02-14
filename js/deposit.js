document.getElementById('btn-deposit').addEventListener('click', function (){
    const newDepositAmount = getInputValueById('deposit-field');

    const previousDepositAmount = getElementValueById('deposit-amount');

    const currentDepositAmount = newDepositAmount + previousDepositAmount;
    setElementById('deposit-amount', currentDepositAmount)

    const previousBalanceAmount = getElementValueById('balance-amount');

    const totalBalance = previousBalanceAmount + newDepositAmount;
    setElementById('balance-amount', totalBalance)


})