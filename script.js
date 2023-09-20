// Scene 
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

//Camera-Perspective Camera
const camera=new THREE.PerspectiveCamera(70,sizes.width/sizes.height)
scene.add(camera)
camera.position.z=3  //Move the backwards towads us as the camera default is inside the object

//Renderer-Setting up canvas
const canvas=document.querySelector("canvas")
const renderer=new THREE.WebGLRenderer({
    canvas
})
renderer.setSize(sizes.width,sizes.height)

//Rendering the scene
renderer.render(scene,camera)
