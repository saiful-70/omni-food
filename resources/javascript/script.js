$(document).ready(function() {

    $('.features--js').Waypoint(function(direction){
        if('direction'=="down"){
            $('nav').addClass('sticky');
        }
        else {
            $('nav').removeClass('sticky');
        }
    });

});