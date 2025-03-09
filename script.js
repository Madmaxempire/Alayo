$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.nav-container').addClass("sticky");
        }else{
            $('.nav-container').removeClass("sticky");
        }
    });
    //toggle menu-navbar script
    $('.menu-btn').click(function(){
        $('.media').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });
    //typing animation
    var typed = new Typed(".typing", {
        strings: ["Well-being.", "Life-style.", "Health."],
        typeSpeed:100,
        backSpeed: 60,
        fontSize: 50,
        loop: true
    });
});
