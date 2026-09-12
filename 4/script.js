/* =========================================
   COLLEGE TRANSPORT INFORMATION PORTAL
   script.js
   ========================================= */


/* ---------- Welcome Button ---------- */

function showWelcomeMessage() {

    alert(
        "Welcome to the College Transport Information Portal!\n\n" +
        "You can view bus routes, pickup points and bus timings."
    );

}


/* ---------- Search / Filter ---------- */

function searchBus() {

    // Get search input
    let input = document.getElementById("searchInput");

    // Convert input to lowercase
    let searchText = input.value.toLowerCase();

    // Get the bus table
    let table = document.getElementById("busTable");

    // Get all table rows
    let rows = table.getElementsByTagName("tbody")[0]
                    .getElementsByTagName("tr");

    // Check every row
    for (let i = 0; i < rows.length; i++) {

        let rowText = rows[i].textContent.toLowerCase();

        // Show row if text matches
        if (rowText.includes(searchText)) {

            rows[i].style.display = "";

        } else {

            rows[i].style.display = "none";

        }

    }

}


/* ---------- Navigation Interaction ---------- */

document.addEventListener("DOMContentLoaded", function () {

    const navigationLinks =
        document.querySelectorAll(".navbar a");

    navigationLinks.forEach(function (link) {

        link.addEventListener("click", function () {

            // Remove active class
            navigationLinks.forEach(function (item) {
                item.classList.remove("active");
            });

            // Add active class
            this.classList.add("active");

        });

    });

});


/* ---------- Search Input Interaction ---------- */

const searchInput =
    document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("focus", function () {

        this.placeholder =
            "Type BUS 01, Tirunelveli, Palayamkottai...";

    });

    searchInput.addEventListener("blur", function () {

        this.placeholder =
            "Search by bus number, route or pickup point...";

    });

}


/* ---------- Enter Key Search ---------- */

if (searchInput) {

    searchInput.addEventListener("keypress", function (event) {

        if (event.key === "Enter") {

            searchBus();

        }

    });

}


/* ---------- Clear Search ---------- */

function clearSearch() {

    if (searchInput) {

        searchInput.value = "";

        searchBus();

        searchInput.focus();

    }

}


/* ---------- Current Year ---------- */

document.addEventListener("DOMContentLoaded", function () {

    const footerText =
        document.querySelector(".footer p");

    if (footerText) {

        footerText.innerHTML =
            "Fundamentals of Web Development Project - " +
            new Date().getFullYear();

    }

});