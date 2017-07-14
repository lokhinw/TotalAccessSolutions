var img = 0;

function carousel() {
  if (img === 0) {
    $(".landing-page").css("background-image", "url(img/bg1.jpg)");
    img = 1;
  } else if (img == 1) {
    $(".landing-page").css("background-image", "url(img/bg2.jpg)");
    img = 2;
  } else if (img == 2) {
    $(".landing-page").css("background-image", "url(img/bg3.jpg)");
    img = 0;
  }

  setTimeout(carousel, 15000);
}

carousel();

var form = $('#email-form');
var statusDiv = $('#status-div');

form.submit(function(event) {
  event.preventDefault();
  var data = {
    name: $("#name").val(),
    email: $("#email").val(),
	phone: $("#phone").val(),
    msg: $("#msg").val()
  };
  var form_status = $('<div class="form_status"></div>');
  $.ajax({
      type: 'POST',
      url: $(form).attr('action'),
      data: data,
      beforeSend: function() {
        statusDiv.append(form_status.html('<p>Email is sending...</p>').fadeIn());
      }
    }).done(function(data) {
      form_status.html('<p>Thank you for contacting me. I will reach you very shortly.</p>').delay(3000).fadeOut();
      // Clear the form.
      $('#name').val('');
      $('#email').val('');
      $('#phone').val('');
      $('#msg').val('');
    })
    .fail(function(data) {
      form_status.html('<p>Sorry, invalid input. Try again.</p>').delay(3000).fadeOut();
    });
});