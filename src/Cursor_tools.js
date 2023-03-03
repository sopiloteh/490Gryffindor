
class Cursor_tools {

  // Finding Velocity & Accleration JS Only 
  //Global Variables
  static coordArray = [];
  static accelerationsArray = [];


  //Mouse Movement Coordinates 
  /**
   * Captures the coordinates of the mouse when the event listener detects mouse movement on the game.
   * @param {Event} event the event passed by the eventListener on the detection of mouse movement. 
   * @returns A dictionary {x,y,time_ms} with a coordinate and time assiociated to it 
   */
  static MouseMovement(event) {
    let currentTime = Date.now();
    let currentMouseX = event.pageX;
    let currentMouseY = event.pageY;
    let mousedata = { x: currentMouseX, y: currentMouseY, time_ms: currentTime };
    return mousedata;
  }

  //Mouse Velocity
  /**
  * Calculates the velocity between two points.
  * @param {number} coord1 dictionary of {x,y,time_ms} where the time is the time this point was aquired.
  * @param {number} coord2 dictionary of {x,y,time_ms} where the time is the time this point was aquired.
  * @returns dictionary of {velocity, time} where the time is the delta time between the points.
  */
  static calculateVelocity(coord1, coord2) {
    let movementX = Math.abs(coord1.x - coord2.x);
    let movementY = Math.abs(coord1.y - coord2.y);
    let distance = null;
    let velocity = null;
    let timeDifference = null;
    distance = Math.sqrt(movementX * movementX + movementY * movementY);
    timeDifference = Math.abs(coord1.time_ms - coord2.time_ms);
    velocity = Math.round(distance / timeDifference * 1000);
    //console.log(`Our start coordinates: (${startMouseX}, ${startMouseY})`)
    //console.log(`Our current coordinates: (${currentMouseX}, ${currentMouseY})`)
    console.log(`The velocity is ${velocity}`)
    /* document.getElementById("movementX").innerText = currentMouseX;
    document.getElementById("movementY").innerText = currentMouseY;
    document.getElementById("velocity").innerText = velocity; */
    return { velocity: velocity, time_delta: timeDifference };
  }

  //Mouse Accleration
  /**
 * Calculates acceleration between two velocities. 
 * @param {number} startVelocity dictionary of {velocity, time_delta} sent by historical acceleration calculator 
 * @param {number} finalVelocity dictionary of {velocity, time_delta} sent by historical acceleration calculator
 * @returns the acceleration between the two velocities.
 */
  static calculateAcceleration(startVelocity, finalVelocity) {
    console.log("Calculating Acceleration method");
    let startTime = 0;
    let finalTime = finalVelocity.time_delta;
    let velocityDifference = finalVelocity.velocity - startVelocity.velocity;
    let timeDifference = (finalTime - startTime);
    acceleration = Math.round(velocityDifference / timeDifference);
    return acceleration;
  }

  /**
  * Historical acceleration calculator calculates average of 100 previous acceleration
  * data points, compares it to the most recent acceleration
  * and determines whether the recent acceleration is abnormal or not.
  * @returns true if the current acceleration is determined to be abnormal
  * otherwise, returns false.
  */
  static historicalAccelerationComparison() {
    const maxAccelerationData = 100;
    var abnormalAcceleration = false;
    var velocity1 = this.calculateVelocity(this.coordArray[0], this.coordArray[1]); //I BELIEVE THIS SHOULD RETURN [VELOCITY,DELTA_T]
    var velocity2 = this.calculateVelocity(this.coordArray[2], this.coordArray[3]); //I BELIEVE THIS SHOULD RETURN [VELOCITY,DELTA_T]
    var currAcceleration = this.calculateAcceleration(velocity1, velocity2);
    //var acceleration = 1000; //some testing value
    if (this.accelerationsArray.length != maxAccelerationData) {
      this.accelerationsArray.push(currAcceleration);
    } else {
      console.log("Went into 101st acceleration data\n");
      var accelerationSum = 0;
      //calculate sum of accelerations in historical_accelerations list
      for (var i = 0; i < this.accelerationsArray.length; i++) {
        accelerationSum += this.accelerationsArray[i];
        //console.log("Accel " + i + " = " + this.historical_accelerations[i]);
      }
      //calculate average of historical_acceleration values
      var accelerationAverage = accelerationSum / maxAccelerationData;
      //calculate ratio between current acceleration and the average
      var accelerationRatio = currAcceleration / accelerationAverage;
      if (accelerationRatio >= 3) {
        abnormalAcceleration = true;
      }
      //pop the first value in historical_accelerations, shift left, add new value to end of list.
      this.accelerationsArray.shift();
      this.accelerationsArray.push(currAcceleration);
      //clear the current coordinates
    }
    this.coordArray = [];
    return abnormalAcceleration;
  }

  static handleMouseData(mousedata) {
    const maxCoords = 4;
    if (this.coordArray.length == maxCoords - 1) {
      console.log("Coordinate Array had 3 items, adding one more and moving to historical acceleration comparison");
      this.coordArray.push(mousedata);
      this.historicalAccelerationComparison();
    }
    else {
      console.log("Adding new coordinate to array");
      this.coordArray.push(mousedata);
    }
  }
}

//*....................................................................*
document.addEventListener('mousemove', function (event) {
  Cursor_tools.handleMouseData(Cursor_tools.MouseMovement(event));
});
