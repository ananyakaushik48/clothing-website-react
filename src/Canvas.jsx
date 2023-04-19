import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
export const App = ({ position = [-1, 0, 2.5], fov = 25}) => (
<Canvas
  camera={[position, fov]}
  eventSource={document.getElementById('root')}
  eventPrefix="client"
>
  <Shirt/>
  <OrbitControls/>
</Canvas>
)


function Shirt() {
  return (
    <mesh>
      <boxGeometry args={[0.9,0.9,0.9]}  />
    <meshNormalMaterial />
    </mesh>
  )
}
