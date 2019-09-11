function setup() {
  printToPage("Hello. The random number is " + randomNumber());
}

function randomNumber() {
  let rnd = random(1, 10);
  return rnd
}


// Don't delete this!
function printToPage(story) {
  var para = document.createElement("P");
  var t = document.createTextNode(story);
  para.appendChild(t);
  document.getElementById("story").appendChild(para);
}  