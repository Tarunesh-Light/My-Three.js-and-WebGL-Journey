/* Animation
->Move the Object
->Take picture
->Move Object bit more
->Take picture
*/

import * as THREE from 'three'
console.log(THREE)

const scene=new THREE.Scene()

// Object-Geometry,Mesh and combine
const geometry=new THREE.BoxGeometry(1,1,1)
const material =new THREE.MeshBasicMaterial({color: "red"})
const mesh=new THREE.Mesh(geometry,material)
scene.add(mesh)
