$(function() {
  $('#alert-modal.show #close-alert-modal').click(function() {
      $('#alert-modal').removeClass('show');
      console.log('hid modal via close button');
  });

  // When the user clicks anywhere outside of the modal, close it
  $('html').click(function(e) {
    if(!$(e.target).closest('.modal-content').length && $('#alert-modal').hasClass('show'))
    {
      $('#alert-modal').removeClass('show');
      console.log('hid modal via click off');
    }
  });
});
