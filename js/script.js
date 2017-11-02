$(document).ready(function() {


// ***listeners
  $('#submit-email').click(function(e) {
    e.preventDefault();
  // information to be sent to the server
    var info = $('#email-message').val();
    console.log(info);
    // $.ajax({
    //     type: "POST",
    //     url: 'server.php',
    //     data: {msg: info}
    // });
    window.open('mailto:bbbove@gmail.com?subject=hire me&body='+info);
    window.location.href='index.html';
});

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
