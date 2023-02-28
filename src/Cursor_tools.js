
class Cursor_tools {

// Finding Velocity & Accleration JS Only 

//Global Variables
let startMouseX = null;
let startMouseY = null;
let startTime = null;
let currentMouseX = null;
let currentMouseY = null;
let currentTime = null;
let previousVelocity = null;
let previousTime = null;
let acceleration = null;
let mousedata = []; 

    //Mouse Movement Coordinates 
    function MouseMovement(event) {
      currentTime = Date.now();
      currentMouseX = event.pageX;
      currentMouseY = event.pageY;
     
      mousedata = [currentMouseX, currentMouseY, currentTime];
      return mousedata;
    }

    //Mouse Velocity
    function calculateVelocity(event) {
      let data = MouseMovement();
      let movementX = Math.abs(data[0] - startMouseX);
      let movementY = Math.abs(data[1] - startMouseY);
      let distance = null;
      let velocity = null;
      let timeDifference = null;
      if (startMouseX && startMouseY && startTime) {
        distance = Math.sqrt(movementX * movementX + movementY * movementY);
        timeDifference = data - startTime;
        velocity = Math.round(distance / timeDifference * 1000);
    
      }
      startMouseX = data[0];
      startMouseY = data[1]; 
      startTime = data[2];
      //console.log(`Our start coordinates: (${startMouseX}, ${startMouseY})`)
      //console.log(`Our current coordinates: (${currentMouseX}, ${currentMouseY})`)
      //console.log(`The velocity is ${velocity}`)
      document.getElementById("movementX").innerText = currentMouseX;
      document.getElementById("movementY").innerText = currentMouseY;
      document.getElementById("velocity").innerText = velocity;
      return velocity;
    }
    
    //Mouse Accleration
    function calculateAcceleration(velocity) {
      if (previousVelocity !== null && previousTime !== null) {
        let velocityDifference = velocity - previousVelocity;
        let timeDifference = (currentTime - previousTime) / 1000;
        acceleration = Math.round(velocityDifference / timeDifference);
      }
      previousVelocity = velocity;
      previousTime = currentTime;
      return acceleration;
    }
    
      /**I had to create a function for mousemove since it would not allow
       *  multiple functions. The more you learn with javascript! -Erick
       */
      document.addEventListener('mousemove', function(event) {
        let mousedata = MouseMovement(event);
        let velocity = printMousePos();
        let acceleration = calculateAcceleration(velocity);
        document.getElementById("acceleration").innerText = acceleration;
      });
  }

//*....................................................................*

