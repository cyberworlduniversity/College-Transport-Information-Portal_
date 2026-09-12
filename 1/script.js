/* =========================================
   COLLEGE TRANSPORT INFORMATION PORTAL
   script.js
   ========================================= */


/* ---------- Button Interaction ---------- */

function showMessage() {
    alert(
        "Welcome to the College Transport Information Portal!\n\n" +
        "You can view bus routes, pickup points, timings, and search for buses."
    );

    // Move the user to the Bus Routes section
    document.getElementById("routes").scrollIntoView({
        behavior: "smooth"
    });
}


/* ---------- Search / Filter ---------- */

function searchBus() {

    // Get search input
    const input = document.getElementById("searchInput");

    // Get search result area
    const result = document.getElementById("searchResult");

    // Convert search text to lowercase
    const searchText = input.value.trim().toLowerCase();

    // Get all bus cards
    const busCards = document.querySelectorAll(".bus-card");

    // Get all pickup points
    const pickupPoints = document.querySelectorAll(".pickup-list li");

    // Get timing table rows
    const tableRows = document.querySelectorAll("#timings tbody tr");


    /* If search box is empty */

    if (searchText === "") {

        result.innerHTML = `
            <p>Please enter a bus number, route, or pickup point.</p>
        `;

        return;
    }


    let found = false;


    /* ---------- Search Bus Cards ---------- */

    busCards.forEach(function(card) {

        const cardText = card.textContent.toLowerCase();

        if (cardText.includes(searchText)) {

            card.style.display = "block";
            found = true;

        } else {

            card.style.display = "none";
        }
    });


    /* ---------- Search Pickup Points ---------- */

    pickupPoints.forEach(function(point) {

        const pointText = point.textContent.toLowerCase();

        if (pointText.includes(searchText)) {

            point.style.display = "block";
            found = true;

        } else {

            point.style.display = "none";
        }
    });


    /* ---------- Search Timing Table ---------- */

    tableRows.forEach(function(row) {

        const rowText = row.textContent.toLowerCase();

        if (rowText.includes(searchText)) {

            row.style.display = "table-row";
            found = true;

        } else {

            row.style.display = "none";
        }
    });


    /* ---------- Display Search Result ---------- */

    if (found) {

        result.innerHTML = `
            <p>
                <strong>Search Result:</strong>
                Bus information matching
                "<strong>${searchText}</strong>" was found.
            </p>
        `;

        result.style.display = "block";

    } else {

        result.innerHTML = `
            <p>
                ❌ No bus information found for
                "<strong>${searchText}</strong>".
            </p>
        `;

        result.style.display = "block";
    }
}


/* ---------- Enter Key Search ---------- */

document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("keyup", function(event) {

        if (event.key === "Enter") {
            searchBus();
        }

    });

});


/* ---------- Reset Search When Input Is Cleared ---------- */

document.addEventListener("DOMContentLoaded", function() {

    const searchInput = document.getElementById("searchInput");

    searchInput.addEventListener("input", function() {

        if (this.value.trim() === "") {

            const busCards = document.querySelectorAll(".bus-card");
            const pickupPoints = document.querySelectorAll(".pickup-list li");
            const tableRows = document.querySelectorAll("#timings tbody tr");

            // Show all bus cards
            busCards.forEach(function(card) {
                card.style.display = "block";
            });

            // Show all pickup points
            pickupPoints.forEach(function(point) {
                point.style.display = "block";
            });

            // Show all timing rows
            tableRows.forEach(function(row) {
                row.style.display = "table-row";
            });

            // Clear result message
            document.getElementById("searchResult").innerHTML = "";
        }

    });

});