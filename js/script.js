$(document).ready(function() {


  $('#projects .img-thumbnail').hover(function(){
    $(this).css('cursor','pointer').css('background-color','black');
    $(this).attr('src',$(this).data('swap_img'));
  }, function(){
    $(this).css('background-color','gray');
    $(this).attr('src',$(this).data('swap_img').replace(/\_tn.jpg/,'-bw_tn.jpg'));
  });
// ./ img-thumbnail hover


  $('#projects .img-thumbnail').click(function(){
    var link = $(this).data('lnk');
    window.open(link);
  })
// ./ img-thumbnail click

});
// end doc ready
