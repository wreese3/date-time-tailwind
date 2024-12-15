if ("geolocation" in navigator) {
    /* geolocation is available */
      // Get the location
    const location = document.querySelector(".location");
    navigator.geolocation.getCurrentPosition((position) => {
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        // reverse?format=json&lat=54.9824031826&lon=9.2833114795&zoom=18&addressdetails=1
        let api_call = `https://api-bdc.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=en`;
        fetch(api_call)
            .then((response) => response.json())
            .then((data) => {
                location.innerHTML = `${data.city}, ${data.principalSubdivision} ${data.postcode}`;
            })
            .catch((error) => {
                console.error("Error:", error);
            });
    });
}
  