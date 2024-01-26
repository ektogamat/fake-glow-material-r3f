import React, { useRef } from 'react'
import { Sphere, TorusKnot, Sparkles } from '@react-three/drei'
import FakeGlowMaterial from './FakeGlowMaterial'

export default function Meshes(props) {
  return (
    <group {...props} dispose={null}>
      <TorusKnot args={[4, 3.8, 128, 128]} position={[-4, 0, 0]}>
        <FakeGlowMaterial {...props.shaderControls} />
      </TorusKnot>

      <TorusKnot args={[4, 0.5, 128, 128]} position={[-4, 0, 0]}>
        <meshPhysicalMaterial color={'blue'} roughness={0.2} />
        <Sparkles count={100} scale={20} size={25} speed={1.5} opacity={0.3} color='#43d9ff' />
      </TorusKnot>

      <Sphere args={[16, 64, 64]} position={[8, 0, 0]}>
        <FakeGlowMaterial {...props.shaderControls} />
      </Sphere>

      <Sphere args={[6, 64, 64]} position={[8, 0, 0]}>
        <meshPhysicalMaterial color={'blue'} roughness={0.2} />
      </Sphere>
    </group>
  )
}
