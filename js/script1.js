const playerList = document.getElementById("player-list");

const player1Name = document.getElementById("player-1-name");
const player1Btn = document.getElementById("player-1-btn");

const player2Name = document.getElementById("player-2-name");
const player2Btn = document.getElementById("player-2-btn");

const player3Name = document.getElementById("player-3-name");
const player3Btn = document.getElementById("player-3-btn");

const player4Name = document.getElementById("player-4-name");
const player4Btn = document.getElementById("player-4-btn");

const player5Name = document.getElementById("player-5-name");
const player5Btn = document.getElementById("player-5-btn");

const player6Name = document.getElementById("player-6-name");
const player6Btn = document.getElementById("player-6-btn");

const player7Name = document.getElementById("player-7-name");
const player7Btn = document.getElementById("player-7-btn");

const player8Name = document.getElementById("player-8-name");
const player8Btn = document.getElementById("player-8-btn");

const player9Name = document.getElementById("player-9-name");
const player9Btn = document.getElementById("player-9-btn");

// Common Function
function playerAdded(player) {
  let li = document.createElement("li");
  let playerName = player.innerText;

  if (playerList.children.length < 5) {
    li.appendChild(document.createTextNode(playerName));
    li.classList.add("my-2", "text-center");
    playerList.appendChild(li);
    return true;
  } else {
    alert("Already 5 Player Inserted! You Can not add more than 5 players.");
    return false;
  }
}

// Another Common Function
function buttonDisable(playerButton) {
  playerButton.disabled = true;
  playerButton.classList.remove(
    "bg-blue-700",
    "hover:bg-blue-800",
    "focus:ring-blue-300",
    "dark:bg-blue-600",
    "dark:hover:bg-blue-700",
    "dark:focus:ring-blue-800"
  );
  playerButton.classList.add("bg-white", "text-black");
}

player1Btn.addEventListener("click", () => {
  if (playerAdded(player1Name) == true) {
    buttonDisable(player1Btn);
  }
});
player2Btn.addEventListener("click", () => {
  if (playerAdded(player2Name) == true) {
    buttonDisable(player2Btn);
  }
});
player3Btn.addEventListener("click", () => {
  if (playerAdded(player3Name) == true) {
    buttonDisable(player3Btn);
  }
});
player4Btn.addEventListener("click", () => {
  if (playerAdded(player4Name) == true) {
    buttonDisable(player4Btn);
  }
});
player5Btn.addEventListener("click", () => {
  if (playerAdded(player5Name) == true) {
    buttonDisable(player5Btn);
  }
});
player6Btn.addEventListener("click", () => {
  if (playerAdded(player6Name) == true) {
    buttonDisable(player6Btn);
  }
});
player7Btn.addEventListener("click", () => {
  if (playerAdded(player7Name) == true) {
    buttonDisable(player7Btn);
  }
});
player8Btn.addEventListener("click", () => {
  if (playerAdded(player8Name) == true) {
    buttonDisable(player9Btn);
  }
});
player9Btn.addEventListener("click", () => {
  if (playerAdded(player9Name) == true) {
    buttonDisable(player9Btn);
  }
});
