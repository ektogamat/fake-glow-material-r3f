import { createRoot } from 'react-dom/client'
import './styles.css'
import { App } from './App'
import { Leva } from 'leva'
import { Suspense } from 'react'

function Overlay() {
  return (
    <div className='container'>
      <div className='main-title'>
        <h1>FAKE GLOW</h1>

        <div className='buttons'>
          <button
            onClick={() => {
              window.open(
                'https://github.com/ektogamat/fake-glow-material-r3f',
                'tab'
              )
            }}
          >
            DOWNLOAD FOR REACT THREE FIBER
          </button>

          <button
            onClick={() => {
              window.open(
                'https://github.com/ektogamat/fake-glow-material-threejs',
                'tab'
              )
            }}
          >
            DOWNLOAD FOR VANILLA THREE.JS
          </button>
        </div>

        <h2>
          New Three.js Material by{' '}
          <a href='https://andersonmancini.dev'>Anderson Mancini</a>
        </h2>
      </div>
    </div>
  )
}

createRoot(document.getElementById('root')).render(
  <Suspense fallback='loading...'>
    <App />
    <Overlay />
    <Leva collapsed />
  </Suspense>
)
