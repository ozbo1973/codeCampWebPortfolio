$(document).ready(function() {


  // handle click on the navbar
  // $('#myNavbar a').click(function() {
  //   console.log('yes');
  //   $('#myNavbar ul li').each(function(){
  //     $(this).removeClass('active');
  //   })
  //   $(this).parent().addClass("active");
  // })
// ./ navbar click

$(document).on("scroll", onScroll);
    // 'a[href^="#"]'
    //smoothscroll
    $('#myNavbar li a').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");

        $('#myNavbar li').each(function () {
            $(this).removeClass('active');
        })
        $(this).parent().addClass('active');

        var target = this.hash,
            menu = target;
        $target = $(target);
        $('html, body').stop().animate({
            'scrollTop': $target.offset().top+2
        }, 500, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
// });

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#myNavbar li a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#myNavbar ul li a').parent().removeClass("active");
            currLink.parent().addClass("active");
        }
        else{
            currLink.parent().removeClass("active");
        }
    });

}});
// end doc ready
