import * as THREE from "three";
import gsap from "gsap"; // GreenSock Animation Platform
import vertexShader from "../shaders/vertex.glsl";
import fragmentShader from "../shaders/fragment.glsl";

import atmosphereVertex from "../shaders/atmosphereVertex.glsl";
import atmosphereFragment from "../shaders/atmosphereFragment.glsl";

import img2 from "url:../imgs/earthMap2.jpg";

const iconContainer = document.querySelector("#iconContainer");

const scene2 = new THREE.Scene();
const camera2 = new THREE.PerspectiveCamera(
  75,
  iconContainer.offsetWidth / iconContainer.offsetHeight,
  0.1,
  1000
);

const renderer2 = new THREE.WebGLRenderer({
  antialias: true,
  canvas: document.querySelector("canvas.earth2"),
  alpha: true,
});

renderer2.setSize(iconContainer.offsetWidth, iconContainer.offsetHeight);
renderer2.setPixelRatio(window.devicePixelRatio);
// document.body.appendChild(renderer2.domElement);

const sphere2 = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader,
    fragmentShader,
    uniforms: {
      globeTexture: {
        value: new THREE.TextureLoader().load(`${img2}`),
      },
    },
  })
);

const atmosphere2 = new THREE.Mesh(
  new THREE.SphereGeometry(5, 50, 50),
  new THREE.ShaderMaterial({
    vertexShader: atmosphereVertex,
    fragmentShader: atmosphereFragment,
    blending: THREE.AdditiveBlending,
    side: THREE.BackSide,
  })
);
atmosphere2.scale.set(1.5, 1.5, 1.5);

scene2.add(atmosphere2);

const group2 = new THREE.Group();
group2.add(sphere2);
scene2.add(group2);

camera2.position.z = 10;

const mouse2 = {
  x: undefined,
  y: undefined,
};

const animate2 = function () {
  requestAnimationFrame(animate2);
  renderer2.render(scene2, camera2);
  sphere2.rotation.y += 0.003;
  gsap.to(group2.rotation, {
    x: -mouse2.y * 0.5,
    y: mouse2.x * 0.5,
    duration: 2,
  });
};

animate2();

addEventListener("mousemove", () => {
  mouse2.x = (event.clientX / innerWidth) * 2 - 1;
  mouse2.y = -(event.clientY / innerHeight) * 2 + 1;
  // console.log(mouse2);
});
