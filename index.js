let heartCount = parseInt(document.getElementById("heart-count").innerText);
// console.log(heartCount);

// heart button functionality
const hearts = document.getElementsByClassName("heart-btn");
for (let heart of hearts) {
  heart.addEventListener("click", function () {
    let newHeartCount = ++heartCount;
    // console.log(newHeartCount);
    document.getElementById("heart-count").innerText = newHeartCount;
  });
}

// heart-btn
