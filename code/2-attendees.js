// ####################################
// ####### ----- Attendees ----- ######
// ####################################

function attendees() {
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
  let count = 1
  let sum = 0
  let numbers = Number(prompt('What numbers do you want to add together'))

  while (count <= numbers) {

    let number = Number(prompt('Enter the number you want to add together'))
    sum = sum + number 
    count = count +1
    }
  alert(sum)


  // copy and paste your code here when you get to the Make step
  
}