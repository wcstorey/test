$(document).ready(function(){

  Mousetrap.bind('a', function() {
  $('#A')[0].play();
  $('#notes').append('A');
  }, 'keyup');

  Mousetrap.bind('b', function() {
  $('#B')[0].play();
  $('#notes').append('B');
  }, 'keyup');

  Mousetrap.bind('c', function() {
  $('#C')[0].play();
  $('#notes').append('C');
  }, 'keyup');

  Mousetrap.bind('d', function() {
  $('#D')[0].play();
  $('#notes').append('D');
  }, 'keyup');

  Mousetrap.bind('e', function() {
  $('#E')[0].play();
  $('#notes').append('E');
  }, 'keyup');

  Mousetrap.bind('f', function() {
  $('#F')[0].play();
  $('#notes').append('F');
  }, 'keyup');

 Mousetrap.bind('g', function() {
  $('#G')[0].play();
  $('#notes').append('G');
  }, 'keyup');
});

