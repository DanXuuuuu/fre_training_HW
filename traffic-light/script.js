 
const redLight = document.getElementById('redLight');
const yellowLight = document.getElementById('yellowLight');
const greenLight = document.getElementById('greenLight');


const redTime = 4000;  
const yellowTime = 2000;   
const greenTime = 4000;   
 
function resetLights() {
  redLight.style.backgroundColor = 'grey';
  yellowLight.style.backgroundColor = 'grey';
  greenLight.style.backgroundColor = 'grey';
}

 
function cycleLights() {
  resetLights();
  redLight.style.backgroundColor = 'red';
  setTimeout(() => {
    resetLights();
    greenLight.style.backgroundColor = 'green';
    setTimeout(() => {
      resetLights();
      yellowLight.style.backgroundColor = 'yellow';
      setTimeout(cycleLights, yellowTime);
    }, greenTime);
  }, redTime);
}

 
cycleLights();
