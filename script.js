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
    const navbarHeight = document.querySelector("#sticky-header").offsetHeight;

    document.querySelectorAll('a.nav-link').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - navbarHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Apply Now button
    const applyButton = document.querySelector('#apply-now-button');
    applyButton.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - navbarHeight,
                behavior: 'smooth'
            });
        }
    });
});



