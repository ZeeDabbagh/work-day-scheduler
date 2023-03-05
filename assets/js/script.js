$(function () {

  // Adding event listener to save buttons 

  var saveBtns = document.querySelectorAll('.saveBtn');

  saveBtns.forEach(button => {
    button.addEventListener('click', function() {
      var description = this.parentElement.querySelector('.description').value;
  
      var timeBlock = this.parentElement.id;
  
      localStorage.setItem(timeBlock, description);
    });
  });

  
  // Apply the past, present, or future class to each time block 

  var timeBlock = document.getElementsByClassName('time-block');
  var textAreaEl = $('textarea');
  var currentTime = dayjs().format('H');
  
  for (var i = 0; i < timeBlock.length; i++) {
    var idName = timeBlock[i].id;
    idName = idName.split('-');
    idName = idName[1]
    if (parseInt(idName) < currentTime) {
      textAreaEl[i].classList.add('past');
    } 
    else if (parseInt(idName) == currentTime) {
      textAreaEl[i].classList.add('present');
    }
    else if (parseInt(idName) > currentTime) {
      textAreaEl[i].classList.add('future');
    }
  }

  // Get any user input that was saved in localStorage and set
  // the values of the corressponding text area

  document.querySelectorAll('.time-block').forEach(timeBlock => {
    var timeID = timeBlock.id;
    var userInput = localStorage.getItem(timeID);

    if (userInput) {

      timeBlock.querySelector('.description').value = userInput;
   }
});

  // Display the current date in the header of the page.
  var today = dayjs();
  $('#currentDay').text(today.format('dddd, MMMM D'))
});
