// ####################################
// ####### ----- Factorial ----- ######
// ####################################

function factorial() {
  // Multiply all the integers together from the number that asked down to 1.
  let factorial = prompt('What number do you want for factorial?')
  let count = factorial
  let total = 1
  while (count > 1) {
    total = total * count
    count = count - 1
  }
  alert('The factorial of ' + factorial + ' is ' + total)
}
