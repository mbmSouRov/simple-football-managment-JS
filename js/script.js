const perPlayerCost = document.getElementById("per-player-cost");
const calculateBtn = document.getElementById("calculate-btn");
const playersExpensesCost = document.getElementById("players-expenses-cost");

const managerCost = document.getElementById("manager-cost");
const coachCost = document.getElementById("coach-cost");
const calculateTotalBtn = document.getElementById("calculate-total");
const totalCost = document.getElementById("total-cost");

calculateBtn.addEventListener("click", () => {
  if (perPlayerCost.value == "") {
    alert("ggwp");
  } else {
    playersExpensesCost.innerText = parseFloat(perPlayerCost.value) * 5;
  }
});

calculateTotalBtn.addEventListener("click", () => {
  if (
    perPlayerCost.value == "" ||
    managerCost.value == "" ||
    coachCost.value == ""
  ) {
    alert("ggwp");
  } else {
    totalCost.innerText =
      parseFloat(playersExpensesCost.innerText) +
      parseFloat(managerCost.value) +
      parseFloat(coachCost.value);
  }
});
