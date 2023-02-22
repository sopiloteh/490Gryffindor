
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
    
    //Mouse Velocity
    function printMousePos(event) {
      currentMouseX = event.pageX;
      currentMouseY = event.pageY;
      let movementX = Math.abs(currentMouseX - startMouseX);
      let movementY = Math.abs(currentMouseY - startMouseY);
      currentTime = Date.now();
      let distance = null;
      let velocity = null;
      let timeDifference = null;
      if (startMouseX && startMouseY && startTime) {
        distance = Math.sqrt(movementX * movementX + movementY * movementY);
        timeDifference = currentTime - startTime;
        velocity = Math.round(distance / timeDifference * 1000);
    
      }
      startMouseX = currentMouseX;
      startMouseY = currentMouseY; 
      startTime = currentTime;
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
      let velocity = printMousePos(event);
      let acceleration = calculateAcceleration(velocity);
      document.getElementById("acceleration").innerText = acceleration;
    });
  }
