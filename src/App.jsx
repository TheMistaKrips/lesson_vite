import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import image from '../public/illustration.png';

function App() {

  return (
    <>
      <div style={{
        display: 'flex',
        flexDirection: 'row'
      }}>
        {/* Левый див */}
        <div>
          <div>
            <p style={{
              color:'#263238',
              fontWeight: 'bold'
            }}>Lessons and insights</p>
            <p style={{
              color: '#28CB8B',
              fontWeight: 'bold'
            }}>from 8 years</p>
          </div>
          <div>
            <button style={{
              width: 100,
              height: 50,
              borderWidth: 2,
              borderRadius: 10,
              backgroundColor: '#28CB8B',
              color: '#f3f3f3'
            }}>
                Register
            </button>
          </div>
        </div>
        {/* Правый див */}
        <div>
            <img src={image} style={{width: 200}}></img>
        </div>
      </div>
    </>
  )
}

export default App
