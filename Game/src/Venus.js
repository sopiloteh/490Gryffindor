
const test = new Cursor_tools();
document.addEventListener('mousemove', function (event) {
  test.handleMouseData(test.MouseMovement(event));
  function sleep(ms) {
    console.log("sleeping");
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  sleep(50);
  console.log("Is abnormalAcceleration? " + test.abnormalAcceleration);
  //if (test.abnormalAcceleration == true) { hintSystem() } 
});

// Set initial state to "On"
let isVenusOn = true;

// Get references to Venus box and toggle button
var venusBox = document.getElementById('venus_box');
var toggleBtn = document.getElementById('toggleBtn');

function toggleVenus() {
  // Toggle state
  isVenusOn = !isVenusOn;

  // Change button text and Venus box visibility accordingly
  if (isVenusOn) {
    toggleBtn.textContent = 'On';
    venusBox.style.display = 'block';
    console.log("Venus button on");
  } else {
    toggleBtn.textContent = 'Sleep';
    venusBox.style.display = 'block';
    console.log("sleeeppy Venus");
  }
}

function hintSystem() {
  var curr_inventory = $.jStorage.get('collected');
  var items_used = $.jStorage.get('used');
}