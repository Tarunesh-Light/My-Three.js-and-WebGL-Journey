import * as THREE from 'three'
console.log(THREE)

const scene=new THREE.Scene()

// Object-Geometry,Mesh and combine
const geometry=new THREE.BoxGeometry(1,1,1)
const material =new THREE.MeshBasicMaterial({color: "red"})
const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh)

// Sizes
const sizes={
    width:window.innerWidth,
    height:window.innerHeight
}

//Camera-Perspective Camera-Vertical field of view degrees,Width of render/Height of render,close,far
const camera=new THREE.PerspectiveCamera(70,sizes.width/sizes.height,0.1,200)
scene.add(camera)
camera.position.z=3

//Renderer-Setting up canvas
const canvas=document.querySelector("canvas")

//Renderer displays your beautifully crafted scenes using WebGL
const renderer=new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width,sizes.height)

//Rendering the scene
renderer.render(scene,camera)