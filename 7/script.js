/* =========================================================
   COLLEGE TRANSPORT INFORMATION PORTAL
   JavaScript
   ========================================================= */


/* =========================
   1. MOBILE MENU
========================= */

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");

if (menuBtn && navigation) {

    menuBtn.addEventListener("click", () => {

        navigation.classList.toggle("mobile-open");

        if (navigation.classList.contains("mobile-open")) {
            menuBtn.textContent = "✕";
        } else {
            menuBtn.textContent = "☰";
        }

    });

}


/* Close mobile menu after clicking a link */

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        if (navigation) {
            navigation.classList.remove("mobile-open");
        }

        if (menuBtn) {
            menuBtn.textContent = "☰";
        }

    });

});


/* =========================
   2. TRANSPORT DATA
========================= */

const transportData = [

    {
        bus: "BUS 01",
        route: "Central Bus Stand → College Campus",
        pickup: "Main Bus Stand",
        time: "07:30 AM"
    },

    {
        bus: "BUS 02",
        route: "Railway Station → College Campus",
        pickup: "Railway Station",
        time: "07:15 AM"
    },

    {
        bus: "BUS 03",
        route: "Main Market → College Campus",
        pickup: "Central Market",
        time: "07:45 AM"
    },

    {
        bus: "BUS 04",
        route: "North Town → College Campus",
        pickup: "North Town",
        time: "07:20 AM"
    },

    {
        bus: "BUS 05",
        route: "South Street → College Campus",
        pickup: "South Street",
        time: "07:35 AM"
    },

    {
        bus: "BUS 06",
        route: "East Junction → College Campus",
        pickup: "East Junction",
        time: "07:40 AM"
    },

    {
        bus: "BUS 07",
        route: "West Gate → College Campus",
        pickup: "West Gate",
        time: "07:25 AM"
    },

    {
        bus: "BUS 08",
        route: "City Centre → College Campus",
        pickup: "City Centre",
        time: "07:50 AM"
    },

    {
        bus: "BUS 09",
        route: "Green Park → College Campus",
        pickup: "Green Park",
        time: "07:10 AM"
    },

    {
        bus: "BUS 10",
        route: "Lake View → College Campus",
        pickup: "Lake View",
        time: "07:55 AM"
    }

];


/* =========================
   3. SEARCH ELEMENTS
========================= */

const searchInput =
    document.getElementById("searchInput");

const searchButton =
    document.getElementById("searchButton");

const searchResults =
    document.getElementById("searchResults");


/* =========================
   4. SEARCH FUNCTION
========================= */

function searchTransport() {

    if (!searchInput || !searchResults) {
        return;
    }

    const searchValue =
        searchInput.value.trim().toLowerCase();


    /* Empty search */

    if (searchValue === "") {

        searchResults.innerHTML = `
            <div class="search-message">
                <strong>🔎 Search Transport</strong>
                <p>
                    Enter a bus number, route,
                    pickup point or timing.
                </p>
            </div>
        `;

        return;
    }


    /* Filter data */

    const results = transportData.filter(item => {

        return (
            item.bus.toLowerCase().includes(searchValue) ||
            item.route.toLowerCase().includes(searchValue) ||
            item.pickup.toLowerCase().includes(searchValue) ||
            item.time.toLowerCase().includes(searchValue)
        );

    });


    /* No results */

    if (results.length === 0) {

        searchResults.innerHTML = `
            <div class="search-message no-result">
                <strong>❌ No Transport Found</strong>
                <p>
                    Try searching with another
                    bus number, route or pickup point.
                </p>
            </div>
        `;

        return;
    }


    /* Display results */

    searchResults.innerHTML = results.map(item => `

        <div class="search-result-card">

            <div class="result-bus">
                🚌
            </div>

            <div class="result-info">

                <strong>${item.bus}</strong>

                <span>
                    ${item.route}
                </span>

                <small>
                    📍 ${item.pickup}
                    &nbsp; • &nbsp;
                    ⏰ ${item.time}
                </small>

            </div>

            <div class="result-status">
                Active
            </div>

        </div>

    `).join("");

}


/* =========================
   5. SEARCH BUTTON
========================= */

if (searchButton) {

    searchButton.addEventListener(
        "click",
        searchTransport
    );

}


/* =========================
   6. LIVE SEARCH
========================= */

if (searchInput) {

    searchInput.addEventListener(
        "input",
        searchTransport
    );


    /* Press Enter to search */

    searchInput.addEventListener(
        "keydown",
        event => {

            if (event.key === "Enter") {
                searchTransport();
            }

        }
    );

}


/* =========================
   7. ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("main section[id]");


function updateActiveNavigation() {

    let currentSection = "";

    sections.forEach(section => {

        const sectionTop =
            section.offsetTop - 150;

        if (
            window.scrollY >= sectionTop
        ) {
            currentSection = section.getAttribute("id");
        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        const href =
            link.getAttribute("href");

        if (
            href === `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

}


window.addEventListener(
    "scroll",
    updateActiveNavigation
);


/* =========================
   8. SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".feature-card, .route-card, .pickup-item, .timeline-item"
    );


const revealObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add(
                        "show-element"
                    );

                    revealObserver.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.12
        }
    );


revealElements.forEach(element => {

    element.classList.add(
        "reveal-element"
    );

    revealObserver.observe(element);

});


/* =========================
   9. BUTTON RIPPLE EFFECT
========================= */

const buttons =
    document.querySelectorAll(
        ".primary-btn, .secondary-btn, .search-btn"
    );


buttons.forEach(button => {

    button.addEventListener(
        "click",
        function(event) {

            const ripple =
                document.createElement("span");

            ripple.classList.add("ripple");

            const rect =
                this.getBoundingClientRect();

            const size =
                Math.max(
                    rect.width,
                    rect.height
                );

            ripple.style.width =
                `${size}px`;

            ripple.style.height =
                `${size}px`;

            ripple.style.left =
                `${event.clientX - rect.left - size / 2}px`;

            ripple.style.top =
                `${event.clientY - rect.top - size / 2}px`;

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);

        }
    );

});


/* =========================
   10. CURRENT YEAR
========================= */

const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );

if (footerYear) {

    const currentYear =
        new Date().getFullYear();

    footerYear.innerHTML =
        `© ${currentYear} College Transport Information Portal.
        All Rights Reserved.`;

}


/* =========================
   11. INITIAL SEARCH MESSAGE
========================= */

if (searchResults) {

    searchResults.innerHTML = `
        <div class="search-message">
            <strong>🚌 Ready to Search</strong>
            <p>
                Search for a bus number,
                route or pickup point.
            </p>
        </div>
    `;

}


/* =========================
   12. PAGE LOADED
========================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        updateActiveNavigation();

        console.log(
            "College Transport Portal loaded successfully."
        );

    }
);