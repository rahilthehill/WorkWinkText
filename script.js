const profilePicElement = document.getElementById('profilePic');

// Fetch a new image from the API and set it to the profilePicElement
function fetchNewImage() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const imageUrl = data.results[0].picture.large;
            profilePicElement.src = imageUrl;
        })
        .catch(error => {
            console.error("Error fetching image:", error);
        });
}

// Set an interval to fetch a new image every 5 seconds (5000 milliseconds)
setInterval(fetchNewImage, 1000);

// Fetch the first image immediately on page load
fetchNewImage();
