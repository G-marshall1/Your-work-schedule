// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.


// var today = dayjs();
// $('#currentDay').text(today.format('MMM D, YYYY, h:mm a'));



$(function () {
//added save button to local storage
  let saveBtn = $('.saveBtn');
  saveBtn.on('click', function () {
    let text = $(this).siblings('.description').val();
    let time = $(this).parent().attr('id');
    localStorage.setItem(time, text);
  });
  
//by using the id attribute of each time-block, we can get the corresponding
// value from localStorage and set the value of the corresponding textarea element.
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

  $('#hour-9 .description').val(localStorage.getItem('hour-9'));
  $('#hour-10 .description').val(localStorage.getItem('hour-10'));
  $('#hour-11 .description').val(localStorage.getItem('hour-11'));
  $('#hour-12 .description').val(localStorage.getItem('hour-12'));
  $('#hour-13 .description').val(localStorage.getItem('hour-13'));
  $('#hour-14 .description').val(localStorage.getItem('hour-14'));
  $('#hour-15 .description').val(localStorage.getItem('hour-15'));
  $('#hour-16 .description').val(localStorage.getItem('hour-16'));
  $('#hour-17 .description').val(localStorage.getItem('hour-17'));
  $('#hour-18 .description').val(localStorage.getItem('hour-18'));
  $('#hour-19 .description').val(localStorage.getItem('hour-19'));
  $('#hour-20 .description').val(localStorage.getItem('hour-20'));
  $('#hour-21 .description').val(localStorage.getItem('hour-21'));
  $('#hour-22 .description').val(localStorage.getItem('hour-22'));
  $('#hour-23 .description').val(localStorage.getItem('hour-23'));
  $('#hour-24 .description').val(localStorage.getItem('hour-24'));

  
  // TODO: Add code to display the current date in the header of the page.

  var today = dayjs();
$('#currentDay').text(today.format('MMM D, YYYY, h:mm a'));

});
