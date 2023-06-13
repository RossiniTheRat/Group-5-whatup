// Make a request for object IDs from a specific department
fetch(
  'https://collectionapi.metmuseum.org/public/collection/v1/objects?departmentIds=11'
)
  .then((response) => response.json())
  .then((data) => {
    // Select a random object ID
    const objectIDs = data.objectIDs;
    const randomObjectID =
      objectIDs[Math.floor(Math.random() * objectIDs.length)];

    // Retrieve artwork details
    fetch(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${randomObjectID}`
    )
      .then((response) => response.json())
      .then((artworkData) => {
        // Extract the image URL
        const imageURL = artworkData.primaryImage;

        // Display the image on the webpage
        const imageElement = document.createElement('img');
        imageElement.src = imageURL;

        // Set width and height attributes to resize the image
        imageElement.setAttribute('width', '700px');
        imageElement.setAttribute('height', 'auto'); // This ensures the height scales proportionally

        // Center the image horizontally within the container
        imageElement.style.display = 'block';
        imageElement.style.marginLeft = 'auto';
        imageElement.style.marginRight = 'auto';

        // Add the image to a container on the webpage
        const container = document.getElementById('image-container');
        container.style.display = 'flex';
        container.style.justifyContent = 'center';
        container.style.alignItems = 'center';
        container.appendChild(imageElement);
      });
  });

var button = document.querySelector('#generate-button');
const apiUrl = 'https://api.quotable.io/quotes/random';
const container = document.getElementById('generate-page-text');

button.addEventListener('click', function () {
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log('quote', data[0].content);
      container.textContent = data[0].content;
    })
    .catch((error) => {
      console.error('Error:', error);
    });
});
