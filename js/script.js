const perPlayerCost = document.getElementById("per-player-cost");
const calculateBtn = document.getElementById("calculate-btn");
const playersExpensesCost = document.getElementById("players-expenses-cost");

const managerCost = document.getElementById("manager-cost");
const coachCost = document.getElementById("coach-cost");
const calculateTotalBtn = document.getElementById("calculate-total");
const totalCost = document.getElementById("total-cost");

calculateBtn.addEventListener("click", () => {
  if (perPlayerCost.value == "") {
    alert("Per Player Cost input is Empty!");
  } else {
    playersExpensesCost.innerText =
      parseFloat(perPlayerCost.value) * playerList.children.length;
  }
});

calculateTotalBtn.addEventListener("click", () => {
  if (
    perPlayerCost.value == "" ||
    managerCost.value == "" ||
    coachCost.value == ""
  ) {
    alert("One of the espenses value is missing!");
  } else {
    totalCost.innerText =
      parseFloat(playersExpensesCost.innerText) +
      parseFloat(managerCost.value) +
      parseFloat(coachCost.value);
  }
});
