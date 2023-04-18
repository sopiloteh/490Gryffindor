
const test = new Cursor_tools();
document.addEventListener('mousemove', function (event) {
  test.handleMouseData(test.MouseMovement(event));
  function sleep(ms) {
    console.log("sleeping");
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  sleep(50);
  console.log("Is abnormalAcceleration? " + test.abnormalAcceleration);
});

function toggleVenus() {
  var venusBox = document.getElementById("venus_box");
  var toggleBtn = document.getElementById("toggleBtn");
  
  if (venusBox.classList.contains("sleep")) {
    venusBox.classList.remove("sleep");
    venusBox.classList.add("active");
    toggleBtn.textContent = "Off";
  } else {
    venusBox.classList.remove("active");
    venusBox.classList.add("sleep");
    toggleBtn.textContent = "On";
  }
}