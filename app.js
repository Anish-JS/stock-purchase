var intialPrice = document.querySelector("#intial-price");
var stockQuantity = document.querySelector("#stocks-quantity");
var currentPrice = document.querySelector("#current-price");
var submitBtn = document.querySelector("#submit-btn");
var output = document.querySelector("#output-box");

const submitHandler = () => {
  const ip = intialPrice.value;
  const qty = stockQuantity.value;
  const curr = currentPrice.value;

  if (ip === "" || qty === "" || curr === "") {
    alert("please fill out all fields");
  } else
    calculateProfitAndLoss(
      Number(ip).toFixed(2),
      Number(qty).toFixed(2),
      Number(curr).toFixed(2)
    );
};

const calculateProfitAndLoss = (initial, quantity, current) => {
  if (initial > current) {
    var loss = (initial - current) * quantity;
    var lossPercentage = (loss / initial) * 100;

    showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
  } else if (initial < current) {
    var profit = (current - initial) * quantity;
    var profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput("No pain No gain and no gains no pain");
  }
};

const showOutput = (msg) => {
  output.innerText = msg;
};
submitBtn.addEventListener("click", submitHandler);
