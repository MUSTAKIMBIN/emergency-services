let heartCount = parseInt(document.getElementById("heart-count").innerText);
let copyCount = parseInt(document.getElementById("copy-count").innerText);

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
    console.log('" coppy"');
    let totalCopyCount = ++copyCount;
    document.getElementById("copy-count").innerText = totalCopyCount;
  });
}
