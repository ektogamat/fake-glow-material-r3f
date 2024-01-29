import {
  OrbitControls,
  Environment,
  Sparkles,
  Sky,
  Stars,
} from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import Meshes from './Meshes'
import { useControls } from 'leva'

export function App() {
  const shaderControls = useControls({
    falloff: { value: 1.4, min: 0.0, max: 10.0 },
    glowSharpness: {
      value: 0.0,
      min: 0.0,
      max: 10.0,
    },
    glowColor: { value: '#a058c1' },
    glowInternalRadius: {
      value: 3.7,
      min: -5.0,
      max: 5.0,
    },
    opacity: {
      value: 1.0,
      min: 0.0,
      max: 1.0,
    },
    depthTest: false,
  })

  return (
    <Canvas camera={{ near: 0.1, position: [0, 0, 25], fov: '65' }}>
      <OrbitControls
        makeDefault
        dollySpeed={0.1}
        maxDistance={45}
        minDistance={25}
        target={[2, -2, 0]}
      />
      <directionalLight position={[100, 100, 60]} intensity={2} />
      <ambientLight intensity={1.5} />
      <Environment preset='city' />
      <Meshes shaderControls={shaderControls} />
      <Stars speed={2} />
    </Canvas>
  )
}
