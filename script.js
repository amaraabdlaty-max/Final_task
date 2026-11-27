function showWelcome() {
  alert("أهلاً بيكي في موقعي الأول 💜 نورتيني!");
}

function changeBackground() {
  const colors = ["#ffadad", "#ffd6a5", "#fdffb6", "#caffbf", "#9bf6ff", "#bdb2ff", "#ffc6ff", "#ff8fa3"];
  const randomColor = colors[Math.floor(Math.random() * colors.length)];
  document.body.style.backgroundColor = randomColor;
}
