$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["IT Engineering student", "Freelancer"],
        typeSpeed: 30,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["IT Engineering student", "Freelancer"],
        typeSpeed: 30,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplay: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

function sendEmail(){
    Email.send({
    SecureToken : "66e26263-08e0-4d3a-8081-c19dd518bf6e",
    To : 'abdelilahbourhou@gmail.com',
    From : 'brhabdeel@gmail.com',
    Subject : document.getElementById("subject").value,
    Body : 
        "Name : " + document.getElementById("name").value + "<br>" +
        "Email : " + document.getElementById("email").value + "<br>" +
        "Subject : " + document.getElementById("subject").value + "<br>" +
        "Content : " + document.getElementById("message").value
    }).then(
        message => alert("Message sent Successfully !")
    );
}