const intialPrice = document.querySelector("#intial-price");
const stockQuantity = document.querySelector("#stocks-quantity");
const currentPrice = document.querySelector("#current-price");
const submitBtn = document.querySelector("#submit-btn");
const output = document.querySelector("#output-box");

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
  const initial = Number(initial);
  const quantity = Number(quantity);
  const current = Number(current);
  if (initial > current) {
    const loss = (initial - current) * quantity;
    const lossPercentage = (loss / initial) * 100;

    showOutput(`Hey the loss is ${loss} and the percent is ${lossPercentage}%`);
  } else if (initial < current) {
    const profit = (current - initial) * quantity;
    const profitPercentage = (profit / initial) * 100;
    showOutput(
      `Hey the profit is ${profit} and the percent is ${profitPercentage}%`
    );
  } else {
    showOutput("No pain No gain and No gain No pain");
  }
};

const showOutput = (msg) => {
  output.innerText = msg;
};
submitBtn.addEventListener("click", submitHandler);
