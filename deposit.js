// step-1: add event listener to the deposit button
document.getElementById("btn-deposit").addEventListener("click", function () {
  //  step-2: get the deposit amount from the deposit input field
  //   for input field use. value to the the value inside the input field
  const depositField = document.getElementById("depositeFiled");
  const newDepositAmountString = depositField.value;
  const newDepositAmount = parseFloat(newDepositAmountString);
  // step-3: get the3 current deposit total
  // for non-input(element other than input, textarea) use innerText to get the text
  const depositTotalElemnt = document.getElementById("deposit-total");
  const previousDepositTotaltStrintg = depositTotalElemnt.innerText;
  const previousDepositTotal = parseFloat(previousDepositTotaltStrintg);
  //   step-4: add number to set the total deposit
  const currentDepositTotal = previousDepositTotal + newDepositAmount;
  //set the deposit total
  depositTotalElemnt.innerText = currentDepositTotal;

  // step-5: get ballance current total
  const balanceTotalElement = document.getElementById("balance-total");
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  // step-6: calculate current total balance
  const currentBalanceTotal = previousBalanceTotal + newDepositAmount;

  //set the Balance total
  balanceTotalElement.innerText = currentBalanceTotal;

  //  step-7: clear  the deposit filedp;
  depositField.value = "";
});

function validateForm() {
  var input = document.forms["depositField"]["depositField"].value;
  if (input == "") {
    alert("Input field cannot be empty!");
    return false;
  }
}
