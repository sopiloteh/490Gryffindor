// Finding Velocity JS Only 
    let startMouseX = null;
    let startMouseY = null;
    let startTime = null;
    let currentMouseX = null;
    let currentMouseY = null;
    let currentTime = null;
    
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
    
    document.addEventListener('mousemove', printMousePos);

//*....................................................................*
