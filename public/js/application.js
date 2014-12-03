$(document).ready(function() {

    $("#new_form").dialog({
      autoOpen: false
      });
      $("#button").on("click", function() {
      $("#dialog").dialog("open");
      });
      });
      // Validating Form Fields.....
      $("#submit").click(function(e) {
      var email = $("#email").val();
      var name = $("#name").val();
      var emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
      if (email === '' || name === '') {
      alert("Please fill all fields...!!!!!!");
      e.preventDefault();
      } else if (!(email).match(emailReg)) {
      alert("Invalid Email...!!!!!!");
      e.preventDefault();
      } else {
      alert("Form Submitted Successfully......");
      }

    $('form.new_form').submit(function(event) {
    event.preventDefault();
    var $target = $(event.target);

    $.ajax({
      type: "POST",
      url: $target.attr('action'),
      data: $target.serialize()
    }).done(function(response) {
      $('#content').append(response);
      $target.find('textarea').val('');
      $target.find("input[type=submit]").val('Reply');
      $('html,body').animate({
        scrollTop: $('.comment-body:last').offset().top
      }, 1750);
    })
  });

  $('form.delete_form').submit(function(event) {
    event.preventDefault();
    var $target = $(event.target);
    $target.find("input[type=submit]").val("Deleting...");

    $.ajax({
      type: "DELETE",
      url: $target.attr("action"),
      // data: {hello: "value"}
    }).done(function(response) {
      console.log(response);
      $target.parent().remove();
    })
  });


});
