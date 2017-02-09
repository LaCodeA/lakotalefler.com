$(document).ready(function() {

    var setupSwipeBox = function() {
      $('.swipebox').swipebox({
        hideBarsDelay : 2000,
        removeBarsOnMobile: false
      });
    }

    var setupContactForm = function() {
      var $contactForm = $('#email_form');
      var $loading = $('#email_loading');
      $('#email_form_reset').click(function(e) {
        $loading.text('');
        $loading.removeClass();
      });

      function validateEmail(email) {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
      }

      $contactForm.submit(function(e) {
        e.preventDefault();
        var $email = $('#email');
        var validEmail = validateEmail($email.val());
        if(!validEmail) {
          $email.addClass('email_invalid');
          $loading.removeClass();
          $loading.addClass('email_fail');
          $loading.text('Please enter a valid email');
        } else {
          $email.removeClass('email_invalid');
          $.ajax({
            url: 'https://formspree.io/lakota.lefler@gmail.com',
            method: 'POST',
            data: $(this).serialize(),
            dataType: 'json',
            beforeSend: function() {
              $loading.removeClass();
              $loading.addClass('email_sending');
              $loading.text('Sending message…');
            },
            success: function(data) {
              $loading.removeClass();
              $loading.addClass('email_success');
              $loading.text('Message sent!');
            },
            error: function(err) {
              $loading.removeClass();
              $loading.addClass('email_fail');
              $loading.text('Ops, there was an error. Please try again later.');
            }
          });
      }
      });
    };

    setupSwipeBox();
    setupContactForm();
});
