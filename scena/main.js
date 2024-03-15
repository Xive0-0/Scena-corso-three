import * as THREE from 'three'
console.log(THREE)

const scena =new THREE.Scene();
const geometry=new THREE.BoxGeometry(1,1,1,);
const material=new THREE.MeshNormalMaterial()
const mesh=new THREE.Mesh(geometry,material);

scena.add(mesh);
const temp={
    width:1024,
    height:720
}

const camera =new THREE.PerspectiveCamera(75,temp.width/temp.height,0.1,10);
const renderer =new THREE.WebGL1Renderer();
renderer.setSize(temp.width,temp.height);

document.body.appendChild(renderer.domElement);
camera.position.z=4;
renderer.render(scena,camera);

const tic=()=>{
    renderer.render(scena,camera)
    mesh.rotation.x+=0.01;
    mesh.rotation.y+=0.01;
    requestAnimationFrame(tic);
}

requestAnimationFrame(tic);