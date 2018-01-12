$(document).ready(function(){



  // ScrollReveal.js
  ScrollReveal().reveal('.reveal',
  {
    reset: true,
    mobile: true,
    duration: 3000,
  });

  // Séléctionne toutes les id
$('a[href*="#"]')
  // Retire tous les liens qui ne pointe nulle part
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // L'evenement ne se déclenche que au clique
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
      &&
      location.hostname == this.hostname
    ) {
      // Recherche l'élément à scroller vers
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Est ce qu'une cible pour scroller existe déjà ?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
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



});
