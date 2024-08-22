$(document).ready(function(){
    $('.hamburger').click(function(){
        $('.sidebar').width(250);
        $('.overlay').fadeIn();
    });

    $('.closebtn').click(function(){
        $('.sidebar').width(0);
        $('.overlay').fadeOut();
    });

    // Ensure this targets the dropbtn specifically
    // #dropbtn is the ID of the Tickets button
    $('#dropbtn').click(function(e){
        e.stopPropagation(); // Stop propagation to ensure only this event fires
        // #dropdown is the ID of the dropdown content
        $('#dropdown').slideToggle();

        //var $dropdown = $(this).closest('.dropdown');
        //$dropdown.find('.ticket-dropdown-content').slideToggle('fast');
        //$dropdown.toggleClass('active');
        //$dropdown.find('.arrow').toggleClass('rotated');
    });

    $('.overlay').click(function(){
        $('.sidebar').width(0);
        $(this).fadeOut();
    });
});
