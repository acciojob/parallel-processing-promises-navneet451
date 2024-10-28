//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function loadImage(image) {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.src = image.url;
                img.onload = () => resolve(img); // Resolve with the loaded image element
                img.onerror = () => reject(`Failed to load image's URL: ${image.url}`);
            });
        }

function downloadImages() {
            // Use Promise.all to load all images in parallel
            const imagePromises = images.map(loadImage);

            Promise.all(imagePromises)
                .then((loadedImages) => {
                    // Clear output div
                    output.innerHTML = '';

                    // Append each loaded image to the output div
                    loadedImages.forEach(img => output.appendChild(img));
                })
                .catch((error) => {
                    // Log any error if an image fails to load
                    console.error(error);
                });
        }

btn.addEventListener("click", downloadImages);
