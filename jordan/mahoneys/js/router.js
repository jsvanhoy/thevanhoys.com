/**
 * Created by jsvan on 6/24/2017.
 */
/*
 * Handles the different views, or routes.
 *
 * @author   Jason Leonard
 * @date     12-15-2016
 * @package  Insurance Verification
 * */


/*
 *  wrap everything in a window.onload
 *  unless you include router.js at the bottom of the file.
 *  or rewrite this as a class
 */
$( document ).ready(function() {


    /*  Load the route and set the hash
     */
    function router(route) {
        file = route.substring(1);
       // $('#footer').hide();
       // $.when($('#main-content').fadeOut()).then(function(){
            $('#main-content').empty();
            //$('#main_content').load(routes[route.replace('#', '')]);
            $.when($('#main-content').load(file)).then(function(){
               // $('#main-content').fadeIn();
              //  $('#footer').fadeIn();
            });
                window.location.hash = route;
      //  });

        //sideNavOff();
    }


    /*  Attempt to route if hash changes
     */
    window.onhashchange = function () {
        var route = window.location.hash;
        router(route);
        return;
    }

    /*  Handle the default action if no hash is present,
     *  else route to the hash
     */
    if (window.location.hash == "") {
        router('#home.html'); //default back to reference number lookup
    } else {
        var route = window.location.hash;
        router(route);
    }


});