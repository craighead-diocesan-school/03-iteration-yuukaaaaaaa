// ####################################
// ####### ----- Fibonacci ----- ######
// ####################################

function fibonacci() {
  //Keep adding the two preceding numbers until 1 becomes the entered number.
  let number = prompt('What number do you want the Fibonacci Sequence up to?')
  let x = 0
  alert(x)
  let y = 1 
  if (number >= y){
    alert(y)
  }
  while (number >= y){
    x = x + y
    if (number >= x) {
    alert(x)
    }
    y = y + x
    if (number >= y){
      alert(y)
    }
  }
}
