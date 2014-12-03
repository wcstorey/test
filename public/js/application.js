$(document).ready(function() {

    $("#new_form").dialog({
      autoOpen: false
      });

      $("#new_post_button").on("click", function() {
      $("#new_form").dialog("open");
      });



      // not implemented
  //   $('form.new_form').submit(function(event) {
  //   event.preventDefault();
  //   var $target = $(event.target);

  //   $.ajax({
  //     type: "POST",
  //     url: $target.attr('action'),
  //     data: $target.serialize()
  //   }).done(function(response) {
  //     $('#content').append(response);
  //     $target.find('textarea').val('');
  //     $target.find("input[type=submit]").val('Reply');
  //     $('html,body').animate({
  //       scrollTop: $('.comment-body:last').offset().top
  //     }, 1750);
  //   })
  // });

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
