$(document).ready(function() {

    $("#new_form").dialog({
      autoOpen: false
      });

      $("#new_post_button").on("click", function() {
      $("#new_form").dialog("open");
      });

// other things, I could implement, but I showed a little of what could be done here

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
