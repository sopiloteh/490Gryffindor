//Function that gets the players' X,Y positions and the room they are current in.
function getPlayerPos() {
  var x = $('#player').attr('data-x');
  var y = $('#player').attr('data-y');
  var room = $.jStorage.get('is_in');
}

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