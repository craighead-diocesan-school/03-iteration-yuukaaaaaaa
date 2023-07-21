// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
  // There are five participants, so ask for names until 5 becomes 0.
  let count = 0
  let numOfAttendees = 5
  let attendeeList = ''
  while (count < numOfAttendees) {
    alert('What are the names of attendees?')
    let attendee = prompt()
    attendeeList = attendeeList + attendee
    attendeeList = attendeeList + ', '
    count = count + 1
  }
  alert(attendeeList) 
}

function make2() {
  // Ask how many times the number is added and keep asking which number is added until the number reaches zero. Then show them the number you added.
  let count = 1
  let sum = 0
  let numbers = Number(prompt('What numbers do you want to add together'))
  while (count <= numbers) {
    let number = Number(prompt('Enter the number you want to add together'))
    sum = sum + number 
    count = count +1
  }
  alert(sum)
}