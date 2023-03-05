// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.



$(function () {
  
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  
  function renderDesc() {
    var userInput = localStorage.getItem('userInput')

    if (!userInput) {
      return;
    }

    $('textarea').textContent = userInput
  }
  
  // var saveBtn = $('.saveBtn');
  // saveBtn.addEventListener('click', function(event) {
  //   event.preventDefault();

  //   var userInput = $('.description').value
  //   localStorage.setItem('userInput', userInput)
  //   renderDesc();
  // })


  
  // Apply the past, present, or future class to each time block 

  var timeBlock = document.getElementsByClassName('time-block');
  var textAreaEl = $('textarea');
  var currentTime = dayjs().format('H');

  for (var i = 0; i < timeBlock.length; i++) {
    if (parseInt(timeBlock[i].id) < currentTime) {
      textAreaEl[i].classList.add('past');
    } 
    else if (parseInt(timeBlock[i].id) == currentTime) {
      textAreaEl[i].classList.add('present');
    }
    else if (parseInt(timeBlock[i].id) > currentTime) {
      textAreaEl[i].classList.add('future');
    }
  }



  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corres
  
  // Store data
  var userInput = localStorage.getItem('userInput');

  if (!userInput) {
    return;
  }

  $('textarea').textContent = userInput

  // Display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'))
});
