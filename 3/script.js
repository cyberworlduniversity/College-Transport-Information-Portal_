/* =========================================
   COLLEGE TRANSPORT INFORMATION PORTAL
   script.js
   ========================================= */


/* ---------- WELCOME BUTTON ---------- */

function showWelcomeMessage() {

    alert(
        "Welcome to the College Transport Information Portal!\n\n" +
        "You can check bus routes, pickup points and timings."
    );

}


/* ---------- TRANSPORT MESSAGE ---------- */

function showTransportMessage() {

    const message = document.getElementById("message");

    message.innerHTML =
        "🚌 Please check your bus number, pickup point and timing " +
        "before starting your journey.";

}


/* ---------- SEARCH / FILTER ---------- */

function searchBuses() {

    const input = document.getElementById("searchInput");
    const result = document.getElementById("searchResult");

    const searchText = input.value.toLowerCase().trim();

    const busCards = document.querySelectorAll(".bus-card");

    let found = 0;


    /* Empty Search */

    if (searchText === "") {

        busCards.forEach(function(card) {
            card.style.display = "block";
        });

        result.innerHTML =
            "Enter a bus number, route or pickup point to search.";

        return;
    }


    /* Search Bus Cards */

    busCards.forEach(function(card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {

            card.style.display = "block";
            found++;

        } else {

            card.style.display = "none";

        }

    });


    /* Search Result */

    if (found > 0) {

        result.innerHTML =
            "✅ " + found +
            " bus route(s) found for: <strong>" +
            input.value +
            "</strong>";

    } else {

        result.innerHTML =
            "❌ No bus route found for: <strong>" +
            input.value +
            "</strong><br><br>" +
            "Try searching for a bus number, route or pickup point.";

    }

}


/* ---------- CLEAR SEARCH WHEN INPUT IS CLEARED ---------- */

document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", function() {

        if (this.value.trim() === "") {

            const busCards =
                document.querySelectorAll(".bus-card");

            busCards.forEach(function(card) {
                card.style.display = "block";
            });

            document.getElementById("searchResult").innerHTML =
                "Enter a bus number, route or pickup point to search.";

        }

    });

});


/* ---------- NAVIGATION CLICK INTERACTION ---------- */

document.querySelectorAll(".navbar a").forEach(function(link) {

    link.addEventListener("click", function() {

        document.querySelectorAll(".navbar a").forEach(function(item) {
            item.classList.remove("active");
        });

        this.classList.add("active");

    });

});


/* ---------- CURRENT YEAR ---------- */

const footerYear = document.querySelector(".footer");

if (footerYear) {

    footerYear.innerHTML =
        footerYear.innerHTML.replace(
            "© 2026",
            "© " + new Date().getFullYear()
        );

}