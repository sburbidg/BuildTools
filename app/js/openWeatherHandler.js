'use strict';

var $ = require('jquery');

$('#hey').append("<p>hey there bud.</p>");

$(document).ready(function(){
  $.ajax({
    url: '/',
    type: 'POST',
    data: wind,
    success: function(wind) {

      if (wind < 3) {
        $('#hey').html('<p>Buck up, its not that windy</p>');
      } else {
        $('#hey').html('<p>Hold on to your butts</p>');
      }
    }
  });
});
