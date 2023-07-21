// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  //There is a loop where 1 keeps being subtracted until 10 becomes 0, and when it reaches 0, the Lift Off! is shown. 
  let count = 10
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
  alert('Lift Off!')
}

function make1() {
  //Loop in which two large and two small numbers are entered and one is subtracted until the large number reaches the small number.
  let maximum = Number(prompt('Enter the maximum'))
  let increment = Number(prompt('Enter the increment'))
  let count = increment 
  while (count <= maximum) {
    alert(count)
    count = count + 1
  }
  alert('Done!')
}