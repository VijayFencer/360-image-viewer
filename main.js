const panoramaImage = new PANOLENS.ImagePanorama("Amul.jpg");
const imageContainer = document.querySelector(".image-container");
//Panolens Image Viewer
const viewer = new PANOLENS.Viewer({
  container: imageContainer,
 
  autoRotateSpeed: 0.3,//image autorotation speed
  controlBar: false,
});

viewer.add(panoramaImage);
