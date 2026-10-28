
// Automatically update the copyright year

document.getElementById("year").textContent =
    new Date().getFullYear();


// Set the earliest travel date to today

const travelDate = document.getElementById("travelDate");

const today = new Date();

const localToday =
    today.getFullYear() + "-" +
    String(today.getMonth() + 1).padStart(2, "0") + "-" +
    String(today.getDate()).padStart(2, "0");

travelDate.min = localToday;


// Hero slider

const heroSlides = [
    {
        eyebrow: "DISCOVER YOUR NEXT ADVENTURE",
        title: 'TO TRAVEL IS TO <span class="highlight">LIVE</span>',
        subtitle:
            "You Don't Need Magic to Disappear. All you need is a destination."
    },
    {
        eyebrow: "EXPLORE THE WORLD",
        title: 'THE WORLD IS <span class="highlight">YOURS</span>',
        subtitle:
            "Travel more. Worry less. Make memories that last forever."
    },
    {
        eyebrow: "MAKE EVERY MOMENT COUNT",
        title: 'YOUR NEXT <span class="highlight">ADVENTURE</span>',
        subtitle:
            "Pack your bags and discover something extraordinary."
    }
];

let currentSlide = 0;

const heroTitle = document.getElementById("heroTitle");
const heroSubtitle = document.getElementById("heroSubtitle");
const heroEyebrow = document.getElementById("heroEyebrow");

function renderSlide() {

    heroTitle.innerHTML =
        heroSlides[currentSlide].title;

    heroSubtitle.textContent =
        heroSlides[currentSlide].subtitle;

    heroEyebrow.textContent =
        heroSlides[currentSlide].eyebrow;
}

function changeHero(direction) {

    currentSlide =
        (currentSlide + direction + heroSlides.length) %
        heroSlides.length;

    renderSlide();
}

document.getElementById("prevSlide")
    .addEventListener("click", function () {
        changeHero(-1);
    });

document.getElementById("nextSlide")
    .addEventListener("click", function () {
        changeHero(1);
    });


// Automatically change slides every 6 seconds

setInterval(function () {
    changeHero(1);
}, 6000);


// Mobile navigation

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

menuToggle.addEventListener("click", function () {

    mainNav.classList.toggle("open");

});

mainNav.querySelectorAll("a").forEach(function (link) {

    link.addEventListener("click", function () {
        mainNav.classList.remove("open");
    });

});


// Select a destination by clicking its card

document.querySelectorAll(".destination-card")
    .forEach(function (card) {

        card.addEventListener("click", function () {

            const destination = card.dataset.destination;

            if (destination) {

                const select =
                    document.getElementById("destination");

                const option =
                    Array.from(select.options).find(function (item) {
                        return item.text === destination;
                    });

                if (option) {
                    select.value = option.value;
                }
            }
        });

    });


// Travel search form

document.getElementById("travelSearchForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const destination =
            document.getElementById("destination").value;

        const date =
            document.getElementById("travelDate").value;

        alert(
            "Your travel search is ready!\n\n" +
            "Destination: " + destination + "\n" +
            "Travel date: " + date + "\n\n" +
            "This demo does not make real bookings."
        );

    });


// Newsletter form

document.getElementById("newsletterForm")
    .addEventListener("submit", function (event) {

        event.preventDefault();

        const email =
            document.getElementById("newsletterEmail").value;

        alert(
            "Thank you for your interest!\n\n" +
            "Your email: " + email + "\n\n" +
            "This demo does not send or store emails."
        );

        this.reset();

    });
