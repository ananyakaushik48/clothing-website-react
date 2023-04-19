import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, Center, Environment } from "@react-three/drei";
import { useRef } from "react";
export const App = ({ position = [-0.8, 0, 2.5], fov = 20 }) => (
  <Canvas
    camera={[position, fov]}
    eventSource={document.getElementById("root")}
    eventPrefix="client"
  >
    <ambientLight intensity={0.5} />
    <Environment preset="city" />
    <Center>
      <Shirt />
    </Center>
    <OrbitControls />
  </Canvas>
);

function Shirt(props) {
  const { nodes, materials } = useGLTF("/shirt_baked.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.T_Shirt_male.geometry}
        material={materials.lambert1}
        position={[0.42, 0, 0]}
        rotation={[Math.PI / 2, 0, 0]}
      />
    </group>
  );
}
useGLTF.preload("/shirt_baked.glb");
