(($) => {
    $(document).ready(function(e){
        // Select all links with hashes
        $('a[href*="#"]')
        // Remove links that don't actually link to anything
        .not('[href="#"]')
        .not('[href="#0"]')
        .click(function(event) {
            // On-page links
            if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
            && 
            location.hostname == this.hostname
            ) {
            // Figure out element to scroll to
            let target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                scrollTop: target.offset().top
                }, 1000, function() {
                // Callback after animation
                // Must change focus!
                let $target = $(target);
                $target.focus();
                if ($target.is(":focus")) { // Checking if the target was focused
                    return false;
                } else {
                    $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                    $target.focus(); // Set focus again
                };
                });
            }
            }
        });




        // // sticky nav
        // // When the user scrolls the page, execute myFunction 
        // window.onscroll = function() {myFunction()};

        // // Get the navbar
        // let navbar = document.querySelector("header.header");

        // // Get the offset position of the navbar
        // let sticky = navbar.offsetTop;

        // // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
        // function myFunction() {

        //     if (window.pageYOffset >= 100) {
        //         navbar.classList.add("sticky")
        //     } else {
        //         navbar.classList.remove("sticky");
        //     }
        // }

        let yourNavigation = $(".nav");
        stickyDiv = "sticky";
        yourHeader = document.querySelector(".HeroContent a").offsetTop + 60,
        fromTop = window.scrollY;

        if(fromTop >= yourHeader){
            yourNavigation.addClass(stickyDiv);
        } else {
            yourNavigation.removeClass(stickyDiv);
        }

        $(window).scroll(function() {
            if( $(this).scrollTop() > yourHeader ) {
                yourNavigation.addClass(stickyDiv);
            } else {
                yourNavigation.removeClass(stickyDiv);
            }
        });
    })
})(jQuery)