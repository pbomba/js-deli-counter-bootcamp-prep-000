var KatzDeli = [];
var katzDeliLine = [];
var name;
let placeInLine = 0;


function takeANumber(array){
  //return `Welcome, ${name}. You are number ${lineNumber} in line.`;
  placeInLine = placeInLine + (array.length + 1)
  let lineNumber = array.push(placeInLine);
  return placeInLine;
}

function nowServing(array){
  if (array.length === 0) {
    return "There is nobody waiting to be served!";
  } else {
    let serving = array.shift();
    return `Currently serving number ${serving}.`;
  }
}

function currentLine(array){
  if (array.length === 0) {
    return "The line is currently empty.";
  } else {
    let newArray = [];
    for (let i = 0; i < array.length; i++){
      newArray.push(`${i+1}. ${array[i]}`);
    }
    let theLine = newArray.join(", ");
    return `The line is currently: ${theLine}`;
  }
}



    
