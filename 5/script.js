/* =========================================
   College Transport Information Portal
   script.js
   ========================================= */


/* ---------- Bus Data ---------- */

const busData = [
    {
        bus: "Bus 01",
        route: "Tirunelveli",
        pickup: "Tirunelveli Junction",
        morning: "7:15 AM",
        evening: "4:30 PM"
    },
    {
        bus: "Bus 02",
        route: "Palayamkottai",
        pickup: "Palayamkottai",
        morning: "7:20 AM",
        evening: "4:35 PM"
    },
    {
        bus: "Bus 03",
        route: "Melapalayam",
        pickup: "Melapalayam",
        morning: "7:25 AM",
        evening: "4:40 PM"
    },
    {
        bus: "Bus 04",
        route: "Pettai",
        pickup: "Pettai",
        morning: "7:30 AM",
        evening: "4:45 PM"
    },
    {
        bus: "Bus 05",
        route: "Vannarpettai",
        pickup: "Vannarpettai",
        morning: "7:35 AM",
        evening: "4:50 PM"
    },
    {
        bus: "Bus 06",
        route: "Sankar Nagar",
        pickup: "Sankar Nagar",
        morning: "7:40 AM",
        evening: "4:55 PM"
    },
    {
        bus: "Bus 07",
        route: "Thachanallur",
        pickup: "Thachanallur",
        morning: "7:45 AM",
        evening: "5:00 PM"
    },
    {
        bus: "Bus 08",
        route: "KTC Nagar",
        pickup: "KTC Nagar",
        morning: "7:50 AM",
        evening: "5:05 PM"
    },
    {
        bus: "Bus 09",
        route: "Perumalpuram",
        pickup: "Perumalpuram",
        morning: "7:55 AM",
        evening: "5:10 PM"
    },
    {
        bus: "Bus 10",
        route: "Maharaja Nagar",
        pickup: "Maharaja Nagar",
        morning: "8:00 AM",
        evening: "5:15 PM"
    }
];


/* ---------- View Transport Information ---------- */

function showTransportInfo() {

    const message = document.getElementById("messageText");

    message.textContent =
        "Transport information is available below. Use the search box to find a bus.";

    document.getElementById("routes").scrollIntoView({
        behavior: "smooth"
    });
}


/* ---------- Search Bus ---------- */

function searchBus() {

    const searchInput =
        document.getElementById("searchInput");

    const searchResult =
        document.getElementById("searchResult");

    const searchText =
        searchInput.value.trim().toLowerCase();


    /* Clear previous result */

    searchResult.innerHTML = "";


    /* Empty search */

    if (searchText === "") {

        searchResult.innerHTML = `
            <div class="search-result-card">
                <strong>Please enter a bus number, route or pickup point.</strong>
            </div>
        `;

        return;
    }


    /* Filter bus data */

    const results = busData.filter(bus =>

        bus.bus.toLowerCase().includes(searchText) ||

        bus.route.toLowerCase().includes(searchText) ||

        bus.pickup.toLowerCase().includes(searchText) ||

        bus.morning.toLowerCase().includes(searchText) ||

        bus.evening.toLowerCase().includes(searchText)

    );


    /* Display results */

    if (results.length > 0) {

        results.forEach(bus => {

            const card = document.createElement("div");

            card.className = "search-result-card";

            card.innerHTML = `
                <h3>${bus.bus}</h3>

                <p>
                    <strong>Route:</strong>
                    ${bus.route}
                </p>

                <p>
                    <strong>Pickup Point:</strong>
                    ${bus.pickup}
                </p>

                <p>
                    <strong>Morning:</strong>
                    ${bus.morning}
                </p>

                <p>
                    <strong>Evening:</strong>
                    ${bus.evening}
                </p>
            `;

            searchResult.appendChild(card);

        });

    } else {

        searchResult.innerHTML = `
            <div class="search-result-card">
                <h3>No Bus Found</h3>
                <p>
                    No transport information matches
                    "<strong>${searchText}</strong>".
                </p>
            </div>
        `;
    }
}


/* ---------- Search While Typing ---------- */

document
    .getElementById("searchInput")
    .addEventListener("input", function () {

        if (this.value.trim() !== "") {
            searchBus();
        } else {
            document.getElementById("searchResult").innerHTML = "";
        }

    });


/* ---------- Search Using Enter Key ---------- */

document
    .getElementById("searchInput")
    .addEventListener("keypress", function (event) {

        if (event.key === "Enter") {
            searchBus();
        }

    });


/* ---------- Page Load Message ---------- */

window.addEventListener("load", function () {

    console.log(
        "College Transport Information Portal loaded successfully."
    );

});
