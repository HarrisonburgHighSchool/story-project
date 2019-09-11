
function setup() {

  // Change these to change the title and author of the story
  document.getElementById('title').innerHTML="Goldilocks & the Three Bears"; // title
  document.getElementById('author').innerHTML="Jon Stapleton"; // author


  
  // All of your code goes under here
  var veryHungry = false;
  var story = 'Goldilocks has been lost in the woods for ' + many() + ' hours. Eventually she discovers a house, and smells something delicious. ' + delicious(); // Create the text
  printToPage(story); // Print the text to the webpage
}



// Put your functions below here:

function many() {
  let hours = Math.floor(random(1, 6));
  if(hours > 3) {
    veryHungry = true;
  } else {
    veryHungry = false;
  }
  return hours
}

function delicious() {
  if(veryHungry == true) {
    return "Goldilocks is very hungry, so she goes inside."
  } else {
    let inspection = inspects();
    return inspection;
  }
}

function inspects() {
  let insp = random(1, 6);
  if(insp > 5) {
    return "Goldilocks sees fresh bear tracks leaving the house!"
  } else {
    return "Goldilocks inspects the house and everything seems alright. She goes inside."
  }
}


function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}    