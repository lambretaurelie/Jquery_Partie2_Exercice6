$('.color').mouseover(function(){
divColor=$(this).attr('id');
  $('#text').css('color',divColor);
});
$('.color').mouseout(function(){
$('#text').css('color','black');
});
