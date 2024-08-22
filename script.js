$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.sidebar').width(250);
        $('.overlay').fadeIn();
    });

    $('.closebtn').click(function(){
        $('.sidebar').width(0);
        $('.overlay').fadeOut();
    });

   
    $('#dropbtn').click(function(e){
        e.stopPropagation(); 
        $('#dropdown').slideToggle();
    });

    $('.overlay').click(function(){
        $('.sidebar').width(0);
        $(this).fadeOut();
    });
});
