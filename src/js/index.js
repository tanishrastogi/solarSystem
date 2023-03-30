import * as THREE from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';


// import starsTexture from '../img/stars1.png';
import starsTexture from '../img/stars.jpg';
import sunTexture from '../img/sun.jpg';
import mercuryTexture from '../img/mercury.jpg';
import venusTexture from '../img/venus.jpg';
import earthTexture from '../img/earth.jpg';
import marsTexture from '../img/mars.jpg';
import jupiterTexture from '../img/jupiter.jpg';
import saturnTexture from '../img/saturn.jpg';
import saturnRingTexture from '../img/saturn ring.png';
import uranusTexture from '../img/uranus.jpg';
import uranusRingTexture from '../img/uranus ring.png';
import neptuneTexture from '../img/neptune.jpg';
import plutoTexture from '../img/pluto.jpg';


const renderer = new THREE.WebGLRenderer({antialias: true});
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Sets the color of the background
renderer.setClearColor(0xFEFEFE);

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.5,
    10000
);

// Sets orbit control to move the camera around
const orbit = new OrbitControls(camera, renderer.domElement);

// Camera positioning


//1240 505 3269
camera.position.set(0, 3000, 3269);
camera.rotateZ =
// camera.position.x = -5000

orbit.update();

const ambientLight = new THREE.AmbientLight(0x333333);
scene.add(ambientLight);
const pointLight = new THREE.PointLight(0xFFFFFF , 2 , 10000);
scene.add(pointLight);


const cubeTextureLoader = new THREE.CubeTextureLoader();
scene.background = cubeTextureLoader.load([
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture,
    starsTexture
]);


const textureLoader = new THREE.TextureLoader();
const sunGeo = new  THREE.SphereGeometry(554,300,300);
const sunMat = new THREE.MeshBasicMaterial({
    map:textureLoader.load(sunTexture)
    // wireframe:true
});
const sun = new THREE.Mesh(sunGeo , sunMat);
scene.add(sun);

const mercuryObj = new THREE.Object3D();
scene.add(mercuryObj);

const mercuryGeo = new  THREE.SphereGeometry(10,30,30);
const mercuryMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(mercuryTexture)

});
const mercury = new THREE.Mesh(mercuryGeo , mercuryMat);
mercuryObj.add(mercury);
mercury.position.x = 675;

//Venus
const venusObj = new THREE.Object3D();
scene.add(venusObj);

const venusGeo = new  THREE.SphereGeometry(25,30,30);
const venusMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(venusTexture)

});
const venus = new THREE.Mesh(venusGeo , venusMat);
venusObj.add(venus);
venus.position.x = 795;

//Earth
const earthObj = new THREE.Object3D();
scene.add(earthObj);

const earthGeo = new  THREE.SphereGeometry(28,30,30);
const earthMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(earthTexture)

});
const earth = new THREE.Mesh(earthGeo , earthMat);
earthObj.add(earth);
earth.position.x = 995;

//mars
const marsObj = new THREE.Object3D();
scene.add(marsObj);

const marsGeo = new  THREE.SphereGeometry(20,30,30);
const marsMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(marsTexture)

});
const mars = new THREE.Mesh(marsGeo , marsMat);
marsObj.add(mars);
mars.position.x = 1100;

//jupiter
const jupiterObj = new THREE.Object3D();
scene.add(jupiterObj);

const jupiterGeo = new  THREE.SphereGeometry(208,30,30);
const jupiterMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(jupiterTexture)

});
const jupiter = new THREE.Mesh(jupiterGeo , jupiterMat);
jupiterObj.add(jupiter);
jupiter.position.x = 1995;


//saturn
const saturnObj = new THREE.Object3D();
scene.add(saturnObj);

const saturnGeo = new  THREE.SphereGeometry(185,30,30);
const saturnMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(saturnTexture)

});
const saturn = new THREE.Mesh(saturnGeo , saturnMat);
saturnObj.add(saturn);
saturn.position.x = 2695;

const saturnRingGeo = new THREE.RingGeometry(200,350,32);
const saturnRingMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(saturnRingTexture),
    side:THREE.DoubleSide
});
const saturnRing = new THREE.Mesh(saturnRingGeo , saturnRingMat);
saturnObj.add(saturnRing);
saturnRing.position.x = 2695;
saturnRing.rotation.x = -0.4 * Math.PI


//uranus
const uranusObj = new THREE.Object3D();
scene.add(uranusObj);

const uranusGeo = new  THREE.SphereGeometry(125,30,30);
const uranusMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(uranusTexture)

});
const uranus = new THREE.Mesh(uranusGeo , uranusMat);
uranusObj.add(uranus);
uranus.position.x = 3500;
const uranusRingGeo = new THREE.RingGeometry(150 , 250 , 32);
const uranusRingMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(uranusRingTexture),
    side:THREE.DoubleSide
});
const uranusRing = new THREE.Mesh(uranusRingGeo , uranusRingMat);
uranusObj.add(uranusRing);
uranusRing.position.x = 3500;
uranusRing.rotation.x = -0.35 * Math.PI



//neptune
const neptuneObj = new THREE.Object3D();
scene.add(neptuneObj);

const neptuneGeo = new  THREE.SphereGeometry(110,30,30);
const neptuneMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(neptuneTexture)

});
const neptune = new THREE.Mesh(neptuneGeo , neptuneMat);
neptuneObj.add(neptune);
neptune.position.x = 4000;


//pluto
const plutoObj = new THREE.Object3D();
scene.add(plutoObj);

const plutoGeo = new  THREE.SphereGeometry(5,30,30);
const plutoMat = new THREE.MeshStandardMaterial({
    map:textureLoader.load(plutoTexture)

});
const pluto = new THREE.Mesh(plutoGeo , plutoMat);
plutoObj.add(pluto);
pluto.position.x = 4000;





// Sets a 12 by 12 gird helper
const gridHelper = new THREE.GridHelper(12, 12);
scene.add(gridHelper);

// Sets the x, y, and z axes with each having a length of 4
const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);

function animate() {
    // sun.rotateX(0.004);
    sun.rotateY(0.00045);
    mercury.rotateY(0.004);
    mercuryObj.rotateY(0.004);
    // mercuryObj.rotateZ(-0.01);
    venusObj.rotateY(0.003);
    earthObj.rotateY(0.002);
    marsObj.rotateY(0.0009);
    jupiterObj.rotateY(0.0007);
    uranusObj.rotateY(0.0005);
    neptuneObj.rotateY(0.0003);
    saturnObj.rotateY(0.0004);
    plutoObj.rotateY(0.00009);
    earth.rotateY(0.009);
    earth.rotateX(0.009);
    // venusObj.rotateZ(-0.005); 
    renderer.render(scene, camera);
    // console.log(camera.position);
}

renderer.setAnimationLoop(animate);

window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});

