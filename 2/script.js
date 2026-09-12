/* =========================================
   COLLEGE TRANSPORT INFORMATION PORTAL
   script.js
   ========================================= */


/* ---------- BUS DATA ---------- */

const buses = [
    {
        number: "01",
        route: "Tirunelveli",
        pickup: "Tirunelveli Junction",
        timing: "7:30 AM"
    },
    {
        number: "02",
        route: "Palayamkottai",
        pickup: "Palayamkottai Bus Stand",
        timing: "7:35 AM"
    },
    {
        number: "03",
        route: "Melapalayam",
        pickup: "Melapalayam",
        timing: "7:40 AM"
    },
    {
        number: "04",
        route: "Vannarpettai",
        pickup: "Vannarpettai",
        timing: "7:45 AM"
    },
    {
        number: "05",
        route: "Perumalpuram",
        pickup: "Perumalpuram",
        timing: "7:50 AM"
    },
    {
        number: "06",
        route: "Murugankurichi",
        pickup: "Murugankurichi",
        timing: "7:55 AM"
    },
    {
        number: "07",
        route: "Thachanallur",
        pickup: "Thachanallur",
        timing: "8:00 AM"
    },
    {
        number: "08",
        route: "KTC Nagar",
        pickup: "KTC Nagar",
        timing: "8:05 AM"
    },
    {
        number: "09",
        route: "NGO Colony",
        pickup: "NGO Colony",
        timing: "8:10 AM"
    },
    {
        number: "10",
        route: "Sankar Nagar",
        pickup: "Sankar Nagar",
        timing: "8:15 AM"
    },
    {
        number: "11",
        route: "Ambasamudram",
        pickup: "Ambasamudram",
        timing: "7:20 AM"
    },
    {
        number: "12",
        route: "Cheranmahadevi",
        pickup: "Cheranmahadevi",
        timing: "7:25 AM"
    },
    {
        number: "13",
        route: "Nanguneri",
        pickup: "Nanguneri",
        timing: "7:15 AM"
    },
    {
        number: "14",
        route: "Valliyur",
        pickup: "Valliyur",
        timing: "7:10 AM"
    },
    {
        number: "15",
        route: "Thisayanvilai",
        pickup: "Thisayanvilai",
        timing: "7:00 AM"
    },
    {
        number: "16",
        route: "Tenkasi",
        pickup: "Tenkasi",
        timing: "6:45 AM"
    },
    {
        number: "17",
        route: "Shencottai",
        pickup: "Shencottai",
        timing: "6:30 AM"
    },
    {
        number: "18",
        route: "Kadayanallur",
        pickup: "Kadayanallur",
        timing: "6:40 AM"
    },
    {
        number: "19",
        route: "Alangulam",
        pickup: "Alangulam",
        timing: "7:00 AM"
    },
    {
        number: "20",
        route: "Surandai",
        pickup: "Surandai",
        timing: "6:50 AM"
    },
    {
        number: "21",
        route: "Kallidaikurichi",
        pickup: "Kallidaikurichi",
        timing: "7:05 AM"
    },
    {
        number: "22",
        route: "Papanasam",
        pickup: "Papanasam",
        timing: "6:55 AM"
    },
    {
        number: "23",
        route: "Manur",
        pickup: "Manur",
        timing: "7:35 AM"
    },
    {
        number: "24",
        route: "Kayathar",
        pickup: "Kayathar",
        timing: "6:35 AM"
    },
    {
        number: "25",
        route: "Kovilpatti",
        pickup: "Kovilpatti",
        timing: "6:20 AM"
    }
];


/* ---------- GET HTML ELEMENTS ---------- */

const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const searchResults = document.getElementById("searchResults");

const messageButton = document.getElementById("messageButton");
const message = document.getElementById("message");


/* ---------- SEARCH FUNCTION ---------- */

function searchBus() {

    const searchText = searchInput.value.trim().toLowerCase();

    searchResults.innerHTML = "";

    /* Check empty search */

    if (searchText === "") {

        searchResults.innerHTML = `
            <div class="search-result">
                <h3>Please enter a search term</h3>
                <p>Search using a bus number, route, pickup point or timing.</p>
            </div>
        `;

        return;
    }


    /* Filter bus information */

    const results = buses.filter(function(bus) {

        return (
            bus.number.toLowerCase().includes(searchText) ||
            bus.route.toLowerCase().includes(searchText) ||
            bus.pickup.toLowerCase().includes(searchText) ||
            bus.timing.toLowerCase().includes(searchText)
        );

    });


    /* Display results */

    if (results.length === 0) {

        searchResults.innerHTML = `
            <div class="search-result">
                <h3>No Bus Found</h3>
                <p>No transport information matches your search.</p>
            </div>
        `;

        return;
    }


    results.forEach(function(bus) {

        const resultCard = document.createElement("div");

        resultCard.className = "search-result";

        resultCard.innerHTML = `
            <h3>Bus ${bus.number}</h3>
            <p><strong>Route:</strong> ${bus.route} → College</p>
            <p><strong>Pickup Point:</strong> ${bus.pickup}</p>
            <p><strong>Timing:</strong> ${bus.timing}</p>
        `;

        searchResults.appendChild(resultCard);

    });

}


/* ---------- SEARCH BUTTON ---------- */

searchButton.addEventListener("click", searchBus);


/* ---------- SEARCH WHILE TYPING ---------- */

searchInput.addEventListener("input", function() {

    if (searchInput.value.trim() !== "") {
        searchBus();
    } else {
        searchResults.innerHTML = "";
    }

});


/* ---------- ENTER KEY SEARCH ---------- */

searchInput.addEventListener("keydown", function(event) {

    if (event.key === "Enter") {
        searchBus();
    }

});


/* ---------- JAVASCRIPT MESSAGE BUTTON ---------- */

messageButton.addEventListener("click", function() {

    message.textContent =
        "Welcome! Please check your bus route and pickup time before travelling.";

    messageButton.textContent = "Message Displayed";

});


/* ---------- PAGE LOAD MESSAGE ---------- */

window.addEventListener("load", function() {

    console.log(
        "College Transport Information Portal loaded successfully."
    );

});