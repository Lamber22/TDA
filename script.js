$(document).ready(function () {
    $('#location').change(function () {
        var location = $(this).val();
        var schools = {
            'totota': ['E J yancy High School', 'Totota Lutheran High School'],
            'salala': ['John Brown High School', 'Ma Musu High School'],
            'location1': ['School A', 'School B'],
            'location2': ['School C', 'School D'],
            'location3': ['School E', 'School F']

        };
        var options = '<option value="">Select School</option>';
        if (schools[location]) {
            schools[location].forEach(function (school) {
                options += '<option value="' + school + '">' + school + '</option>';
            });
        }
        $('#school').html(options);
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var moreButton = document.querySelector("#moreAboutUsButton");
    var moreContent = document.querySelector("#moreAboutUs");

    moreButton.addEventListener("click", function() {
        if (moreContent.classList.contains("show")) {
            moreButton.textContent = "Read More";
        } else {
            moreButton.textContent = "Read Less";
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    var navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
    navbarLinks.forEach(function(link) {
        link.addEventListener("click", function() {
            var navbarCollapse = document.querySelector("#navbarNav.show");
            if (navbarCollapse) {
                var toggleButton = document.querySelector("[data-target='#navbarNav']");
                toggleButton.click();
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function() {
    var aboutUsLink = document.querySelector(".nav-link[href='#about-us']");

    aboutUsLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior

        var headerHeight = document.getElementById("sticky-header").offsetHeight;
        var aboutUsSection = document.getElementById("about-us");
        var aboutUsSectionTop = aboutUsSection.offsetTop - headerHeight;

        window.scrollTo({
            top: aboutUsSectionTop,
            behavior: "smooth"
        });
    });
});
