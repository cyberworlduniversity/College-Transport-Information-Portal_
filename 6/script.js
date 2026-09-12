/* =========================================================
   COLLEGE TRANSPORT INFORMATION PORTAL
   CampusRide - JavaScript
   ========================================================= */


/* ================= MOBILE MENU ================= */

const menuBtn = document.getElementById("menuBtn");
const navbar = document.querySelector(".navbar");

if (menuBtn) {
    menuBtn.addEventListener("click", () => {
        navbar.classList.toggle("show");

        if (navbar.classList.contains("show")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }
    });
}


/* ================= CLOSE MOBILE MENU ================= */

const navLinks = document.querySelectorAll(".navbar a");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        navbar.classList.remove("show");

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


/* ================= SEARCH SYSTEM ================= */

const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const searchResult = document.getElementById("searchResult");

const routeCards = document.querySelectorAll(".route-card");


function performSearch() {

    const searchText =
        searchInput.value.trim().toLowerCase();

    let matchCount = 0;


    /* Empty search */

    if (searchText === "") {

        routeCards.forEach(card => {
            card.style.display = "block";
        });

        searchResult.textContent =
            "Showing all available bus routes.";

        return;
    }


    /* Search through bus cards */

    routeCards.forEach(card => {

        const cardText =
            card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {

            card.style.display = "block";

            matchCount++;

        } else {

            card.style.display = "none";

        }

    });


    /* Search result message */

    if (matchCount > 0) {

        searchResult.textContent =
            `${matchCount} bus route(s) found for "${searchInput.value}".`;

    } else {

        searchResult.textContent =
            `No bus route found for "${searchInput.value}".`;

    }

}


/* Search button */

if (searchBtn) {

    searchBtn.addEventListener(
        "click",
        performSearch
    );

}


/* Search while typing */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        performSearch
    );

}


/* Search using Enter key */

if (searchInput) {

    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {

                performSearch();

            }

        }
    );

}


/* ================= ACTIVE NAVIGATION ================= */

const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {

            currentSection =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const target =
            link.getAttribute("href");

        if (target === `#${currentSection}`) {

            link.classList.add("active");

        }

    });

});


/* ================= SMOOTH BUTTON INTERACTION ================= */

const exploreButton =
    document.querySelector(".primary-btn");

if (exploreButton) {

    exploreButton.addEventListener(
        "click",
        () => {

            const routes =
                document.getElementById("routes");

            if (routes) {

                routes.scrollIntoView({
                    behavior: "smooth"
                });

            }

        }
    );

}


/* ================= FIND YOUR BUS BUTTON ================= */

const findBusButton =
    document.querySelector(".secondary-btn");

if (findBusButton) {

    findBusButton.addEventListener(
        "click",
        () => {

            const searchSection =
                document.getElementById("search");

            if (searchSection) {

                searchSection.scrollIntoView({
                    behavior: "smooth"
                });

                setTimeout(() => {

                    if (searchInput) {
                        searchInput.focus();
                    }

                }, 700);

            }

        }
    );

}


/* ================= ROUTE CARD INTERACTION ================= */

routeCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            routeCards.forEach(item => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

            const busNumber =
                card.querySelector(".bus-number");

            if (busNumber) {

                searchResult.textContent =
                    `${busNumber.textContent} selected.`;

            }

        }
    );

});


/* ================= TABLE ROW INTERACTION ================= */

const tableRows =
    document.querySelectorAll(".timing-table tbody tr");

tableRows.forEach(row => {

    row.addEventListener(
        "click",
        () => {

            tableRows.forEach(item => {
                item.classList.remove("selected-row");
            });

            row.classList.add("selected-row");

        }
    );

});


/* ================= PICKUP POINT INTERACTION ================= */

const pickupCards =
    document.querySelectorAll(".pickup-card");

pickupCards.forEach(card => {

    card.addEventListener(
        "click",
        () => {

            pickupCards.forEach(item => {
                item.classList.remove("selected");
            });

            card.classList.add("selected");

            const location =
                card.querySelector("h3");

            if (location) {

                searchInput.value =
                    location.textContent;

                performSearch();

            }

        }
    );

});


/* ================= PAGE LOAD ANIMATION ================= */

window.addEventListener("load", () => {

    document.body.classList.add("page-loaded");

});


/* ================= CURRENT YEAR ================= */

const footerYear =
    document.querySelector(".footer-bottom p");

if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.textContent =
        `© ${currentYear} College Transport Information Portal`;

}


/* ================= KEYBOARD SHORTCUT ================= */

/*
   Press "/" anywhere on the page
   to focus the search box.
*/

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "/" &&
            document.activeElement.tagName !== "INPUT"
        ) {

            event.preventDefault();

            if (searchInput) {
                searchInput.focus();
            }

        }

    }
);


/* ================= SEARCH RESET ================= */

searchInput?.addEventListener(
    "dblclick",
    () => {

        searchInput.value = "";

        performSearch();

    }
);


/* ================= WELCOME MESSAGE ================= */

console.log(
    "🚍 CampusRide College Transport Information Portal loaded successfully."
);

console.log(
    "HTML + CSS + JavaScript | Fundamentals of Web Development"
);