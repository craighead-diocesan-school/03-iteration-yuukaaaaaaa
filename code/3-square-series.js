// ####################################
// ##### ----- Square Series ----- ####
// ####################################

function squareSeries() {
  // Repeat squaring until the number in the answer is zero.
  let count = Number(prompt('What number do you want to the Square Series for?'))
  let squared = ''
  while (count > 0){
    let square = count * count
    count = count - 1
    squared = squared + ' '+ square
  }
  alert('the square series is' + squared)
}
