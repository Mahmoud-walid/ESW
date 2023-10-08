import * as THREE from "three";
const landingContainer = document.querySelector(".starsBG");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  landingContainer.offsetWidth / landingContainer.offsetHeight,
  0.1,
  1000
);
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector(".landing .starsBG canvas.stars"),
});

renderer.setSize(landingContainer.offsetWidth, landingContainer.offsetHeight);
renderer.setPixelRatio(window.devicePixelRatio);

// Set the camera position
camera.position.z = 15;

// Create stars
const starsGeometry = new THREE.BufferGeometry();
const starsMaterial = new THREE.PointsMaterial({ color: 0xffffff, size: 0.02 });

const starsVertices = [];
for (let i = 0; i < 2000; i++) {
  const x = (Math.random() - 0.5) * 2000;
  const y = (Math.random() - 0.5) * 2000;
  const z = -Math.random() * 3000;
  starsVertices.push(x, y, z);
}

starsGeometry.setAttribute(
  "position",
  new THREE.Float32BufferAttribute(starsVertices, 3)
);

const stars = new THREE.Points(starsGeometry, starsMaterial);
scene.add(stars);

// Render the scene
function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();
