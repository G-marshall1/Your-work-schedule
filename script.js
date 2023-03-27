// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY, h:mm a'));



$(function () {
//added save button to local storage
  let saveBtn = $('.saveBtn');
  saveBtn.on('click', function () {
    let text = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, text);
  });
  
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?

  let currentHour = dayjs().hour();
$('.time-block').each(function () {
  let blockHour = parseInt($(this).attr('id').split('-')[1]);
  if (blockHour < currentHour) {
    $(this).addClass('past');
  } else if (blockHour === currentHour) {
    $(this).addClass('present');
  } else {
    $(this).addClass('future');
  }
});

  
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});
