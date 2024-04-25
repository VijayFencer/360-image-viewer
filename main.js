const panoramaImage = new PANOLENS.ImagePanorama("Amul.jpg");
const imageContainer = document.querySelector(".image-container");

const viewer = new PANOLENS.Viewer({
  container: imageContainer,
 
  autoRotateSpeed: 0.3,
  controlBar: false,
});

viewer.add(panoramaImage);