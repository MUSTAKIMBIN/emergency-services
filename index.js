let heartCount = parseInt(document.getElementById("heart-count").innerText);
let copyCount = parseInt(document.getElementById("copy-count").innerText);
let coin = document.getElementById("coin-count");

// heart button functionality
const hearts = document.getElementsByClassName("heart-btn");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    let newHeartCount = ++heartCount;
    document.getElementById("heart-count").innerText = newHeartCount;
  });
}

// coppy btn functionality
const copys = document.getElementsByClassName("copy-btn");
for (let copy of copys) {
  copy.addEventListener("click", function () {
    let totalCopyCount = ++copyCount;
    document.getElementById("copy-count").innerText = totalCopyCount;

    const card = this.closest(".card");
    const text = card.querySelector(".hotline-text").innerText;

    navigator.clipboard.writeText(text).then(() => {
      alert("Copied: " + text);
    });
  });
}

// coin button functionality
const coins = document.getElementsByClassName("call-btn");
for (let coin of coins) {
  coin.addEventListener("click", function () {
    const card = this.closest(".card");
    const hotlineNumber = card.querySelector(".hotline-text").innerText;
    const serviceName = card.querySelector(".service-name").innerText;
    alert("You are calling " + serviceName + " : " + hotlineNumber);
    let currentCoins = parseInt(
      document.getElementById("coin-count").innerText
    );

    let finalCoin = currentCoins - 20;
    if (finalCoin < 20) {
      alert("You don't have enough coins. You cun't call");
      return;
    }

    document.getElementById("coin-count").innerText = finalCoin;
  });
}
