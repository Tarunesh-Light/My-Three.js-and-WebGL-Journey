/** Transform Objects
 * Position
 * Scale
 * Rotation
 * Quanternion
 */
import * as THREE from 'three'
console.log(THREE)

const scene=new THREE.Scene()

// Object-Geometry,Mesh and combine
const geometry=new THREE.BoxGeometry(1,1,1)
const material =new THREE.MeshBasicMaterial({color: "red"})
const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh)

//Group Objects
const group=new THREE.Group()
group.add(mesh);
scene.add(group);

//Position

//mesh.position.y=1
//mesh.rotation.y=1;
mesh.position.x=2;
mesh.position.y=1;
console.log(mesh.position.length())          //Distance between mesh center and canvas center

//Scale
mesh.scale.x=2;
mesh.scale.y=2;

//Rotation
mesh.rotation.reorder('YXZ')
mesh.rotation.x=0;

// Sizes
const sizes={
    width:800,
    height:600
}

//Camera-Perspective Camera
const camera=new THREE.PerspectiveCamera(70,sizes.width/sizes.height)
scene.add(camera)
camera.position.z=4 //Move the backwards towards us as the camera default is inside the object
camera.position.x=1

console.log(mesh.position.distanceTo(camera.position))    //Distance between mesh center and camera
mesh.position.normalize();                 //Normalise the disance to 1 unit
console.log(mesh.position.length())

mesh.position.set(1,-1,1);             //Short-hand to set mesh position

//Look At
camera.lookAt(mesh.position);     //Look at the object

//Axes helper
const axeshelper=new THREE.AxesHelper()
scene.add(axeshelper);

//Renderer-Setting up canvas
const canvas=document.querySelector("canvas")
const renderer=new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width,sizes.height)

//Rendering the scene
renderer.render(scene,camera)
