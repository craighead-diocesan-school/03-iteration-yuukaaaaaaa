// ####################################
// ####### ----- Lift Off ----- #######
// ####################################

function liftOff() {
  let count = 10
 
  while (count > 0) {
    alert(count + '...')
    count = count - 1
  }
   
  alert('Lift Off!')
}

function make1() {
  // copy and paste your code here when you get to the Make step
  let maximum = Number(prompt('Enter the maximum'))
  let increment = Number(prompt('Enter the increment'))
  let count = increment 
  

  while (count <= maximum) {
    alert(count)
    count = count + 1
  }

  alert('Done!')
}