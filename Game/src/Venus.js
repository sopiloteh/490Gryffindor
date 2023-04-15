
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