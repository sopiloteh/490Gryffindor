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

// Set initial state to "On"
let isVenusOn = true;
let isClearOn = false;
let isReadOn = false;
let isResetOn = false;

// Get references to Venus box and toggle button
var venusBox = document.getElementById('venus_box');
var toggleBtn = document.getElementById('toggleBtn');

// Set initial reading size to "small"
let readingSize = 'small';

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

function toggleClear(){
  isClearOn = !isClearOn;

  if(isClearOn){
    toggleBtn.textContent = 'Cleared';
    venusBox.style.display = 'block';
    console.log("Data is cleared");
  }else{
    toggleBtn.textContent = 'Not Cleared';
    venusBox.style.display = 'block';
    console.log("Data not cleared");    
  }
}

function toggleReading(){
  isReadOn = !isReadOn;

  // Toggle reading size between "small", "medium", and "large"
  if (isReadOn) {
    switch (readingSize) {
      case 'small':
        readingSize = 'medium';
        break;
      case 'medium':
        readingSize = 'large';
        break;
      case 'large':
        readingSize = 'small';
        break;
    }
    console.log(`Reading size: ${readingSize}`);
  }
}

function toggleReset(){
  isResetOn = !isResetOn;

  if(isResetOn){
    toggleBtn.textContent = 'Reset Screen';
    venusBox.style.display = 'block';
    console.log("Screen was reset");
  }else{
    toggleBtn.textContent = 'Not Reset';
    venusBox.style.display = 'block';
    console.log("Screen is default");    
  }
}
