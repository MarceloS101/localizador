document.addEventListener("DOMContentLoaded", () => {
    const dateElement = document.getElementById("date");
    const timeElement = document.getElementById("time");
    const locationElement = document.getElementById("location-info");

    function updateDateTime() {
        const now = new Date();
        dateElement.textContent = `Date: ${now.toLocaleDateString()}`;
        timeElement.textContent = `Time: ${now.toLocaleTimeString()}`;
    }

    function fetchLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    locationElement.textContent = `Location: Lat ${latitude.toFixed(2)}, Lon ${longitude.toFixed(2)}`;
                },
                () => {
                    locationElement.textContent = "Location: Unable to retrieve location.";
                }
            );
        } else {
            locationElement.textContent = "Location: Geolocation not supported by your browser.";
        }
    }

    updateDateTime();
    fetchLocation();
    setInterval(updateDateTime, 1000);
});
