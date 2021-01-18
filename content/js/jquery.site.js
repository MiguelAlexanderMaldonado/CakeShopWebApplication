// Navbar
$(document).ready(function () {
    // Collapses the navbar menu after click menu option.
    $('.navbar-nav>li>a').on('click', function () {
        $('.navbar-collapse').collapse('hide');
    });
    // Collapses the navbar menu after click outside.
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $('#navbarNav').hasClass('collapse show');
        if (_opened === true && !clickover.hasClass('navbar-toggle')) {
            $('button.navbar-toggler').click();
            console.log('dentro');
        }
        console.log("funciona");
    });
});
// Scroll
$(window).scroll(function (event) {
    //var scrollTop = $(window).scrollTop();
    //console.log("Vertical " + scrollTop);

    //if (scrollTop < 900) {
    //    $(".nav-link").removeClass("active");
    //    $("#nav-home").addClass("active");
    //}
    //if (scrollTop >= 900 && scrollTop < 3975) {
    //    $(".nav-link").removeClass("active");
    //    $("#nav-colection").addClass("active");
    //}
    //if (scrollTop >= 3975 && scrollTop < 4475) {
    //    $(".nav-link").removeClass("active");
    //    $("#nav-utensils").addClass("active");
    //}
    //if (scrollTop >= 4475 && scrollTop < 4989) {
    //    $(".nav-link").removeClass("active");
    //    $("#nav-team").addClass("active");
    //}
    //if (scrollTop >= 4989) {
    //    $(".nav-link").removeClass("active");
    //    $("#nav-contact").addClass("active");
    //}

});