const observer = lozad();
observer.observe();



(function ($) {
    $(document).ready(function () {
        // hide .navbar first
        $("#navbar").hide();

        // fade in .navbar
        $(function () {
            $(window).scroll(function () {
                const scrollDistance = screen.width > 840 ? 700 : 500;
                // set distance user needs to scroll before we fadeIn navbar
                if ($(this).scrollTop() > scrollDistance) {
                    $("#navbar").fadeIn();
                    $("#navbar2").fadeOut();
                } else {
                    $("#navbar").fadeOut();
                    $("#navbar2").fadeIn();
                }
            });
        });

        // const date = new Date();
        // if (
        //     date.getUTCDay() == 0 &&
        //     date.getUTCHours() >= 14 &&
        //     date.getUTCHours() < 18
        // ) {
        //     $(".livestreamButton").removeAttr("hidden");

        // }
    });
})(jQuery);
