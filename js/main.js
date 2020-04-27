$(document).ready(function(){
    let $btns = $('.project-area .button-group button')
    
    $btns.click(function(e){
        $('.project-area .button-group button').removeClass('active')
        e.target.classList.add('active')

        let selector = $(e.target).attr('data-filter')
        $('.project-area .grid').isotope({
            filter: selector
        })
        return false;
    })

    $('#btn1').trigger('click')

    $('.test-popup-link').magnificPopup({
        type: 'image',
        gallery : {
            enabled:true
        }
      });

    
    //   Owl carousel
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        dots: true,
        responsive: {
            0:{
                items: 1
            },
            544:{
                items: 2
            }
        }
    })


    // Sticky navigation bar
    let nav_offset_top = $('.header-area').height() + 50

    function navbarFixed(){
        if($('.header-area').length){
            $(window).scroll(function(){
                let scroll = $(window).scrollTop()
                if(scroll >= nav_offset_top){
                    $('.header-area .main-menu').addClass('navbar_fixed')
                }
                else{
                    $('.header-area .main-menu').removeClass('navbar_fixed')
                }
            })
        }
    }

    $(window).scroll(function(){
        console.log('You are asrolling')
    })

    navbarFixed()
})