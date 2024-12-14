document.getElementById('menu-toggle').addEventListener('click', function () {
  const navList = document.getElementById('nav-list');
  navList.classList.toggle('active');
});

// Initialize Slick Carousel
$(document).ready(function(){
  $('.carousel-container').slick({
    dots: true,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,      // Show 3 images at a time on desktop
    slidesToScroll: 1,    // Scroll 1 image at a time
    responsive: [
      {
        breakpoint: 768,  // Mobile view breakpoint
        settings: {
          slidesToShow: 1,   // Show 1 image at a time on mobile
          slidesToScroll: 1  // Scroll 1 image at a time on mobile
        }
      }
    ]
  });
});

// Wait for the DOM to be ready
$(function() {
  // Set the form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Define validation rules
    rules: {
      // The key name on the left side is the name attribute of an input field. Validation rules are defined on the right side
      firstname: "required",
      lastname: "required",
      email: {
        required: true,
        // Identify that email should be approved by the built-in "email" rule
        email: true
      },
      password: {
        required: true,
        minlength: 5
      }
    },
    // Identify validation error messages
    messages: {
      firstname: "Please enter your firstname",
      lastname: "Please enter your lastname",
      password: {
        required: "Please provide a password",
        minlength: "Your password must be at least 8 characters long"
      },
      email: "Please enter a valid email address"
    },
    // Make sure the form is submitted to the destination defined in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});

//Customize modal behaviour
$(document).ready(function(){
  $('a[rel="modal:open"]').click(function(event){
      //Example: Custom initialization can go here
      console.log('Modal opened!');
  });
});

  // //Apply the 'loaded' class to the image in Lightbox to enable a fade-in transition when the image is displayed.
  // $(document).on('lightbox:loaded', function () {
  //   $('.lb-image').addClass('loaded');
  // });

  //Initialize the map
$(document).ready(function () {
    // Initialize the map
    var map = L.map('restaurant-map').setView([14.30027, 121.01039], 13); // Manila coordinates with zoom level 13

    // Add OpenStreetMap tiles
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '© OpenStreetMap contributors'
    }).addTo(map);

    // Add a marker for the restaurant
    var restaurantMarker = L.marker([14.30027, 121.01039]).addTo(map)
        .bindPopup('<b>My Restaurant</b><br>Blk. 3 Lot 2, 5 Congressional Rd, General Mariano Alvarez, 4117 Cavite, Philippines')
        .openPopup();
});








