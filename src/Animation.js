/* Animation
->Move the Object
->Take picture
->Move Object bit more
->Take picture
*/

import * as THREE from 'three'
import gsap from 'gsap'

console.log(gsap)
console.log(THREE)

const scene=new THREE.Scene()

// Object-Geometry,Mesh and combine
const geometry=new THREE.BoxGeometry(1,1,1)
const material =new THREE.MeshBasicMaterial({color: "red"})
const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh)

// Sizes
const sizes={
    width:800,
    height:600
}

//Camera
const camera=new THREE.PerspectiveCamera(70,sizes.width/sizes.height)
scene.add(camera)
camera.position.z=4

//Renderer-Setting up canvas
const canvas=document.querySelector("canvas")

//Renderer displays your beautifully crafted scenes using WebGL
const renderer=new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width,sizes.height)


//Rendering the scene
renderer.render(scene,camera)

//Date timestamp
let time=Date.now();

//Clock
const clock= new THREE.Clock();

gsap.to(mesh.position,{ duration:1, delay:2, x:3 })
gsap.to(mesh.position,{ duration:1, delay:4, x:0 })

//Animations
const tick = () =>
{
  //const elapsedTime=clock.getElapsedTime();  
  //console.log(elapsedTime);

  const currenttime=Date.now();
  const deltatime=currenttime-time;
  time=currenttime;
  console.log(deltatime);
  
  //Animate the mesh
  mesh.rotation.x+=0.004*deltatime;  

  renderer.render(scene,camera)

  window.requestAnimationFrame(tick)
}

tick();