import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Sidebar from './components/sidebar'
import './App.css'
import Modal from './components/modal'
import Signin from './components/signin'




function App() {
  return (
    <>

    
      <div className="bg-gray-100 min-h-screen"> {/* Changez ici pour la couleur de fond désirée */}

      <div className="flex items-center justify-center h-screen">
        <Signin />
      </div>
      </div>
        {/* <div className='fixed'>
        <Sidebar />
      </div>
      <div className="ml-64">
      <div
  style={{
    width: '520px',
    height: '464px',
    top: '280px',
    left: '460px'
  }}
>
  */}



      
{/* 
      <Modal />
      </div> */}


      {/* <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p> */}
    </>
  )
}

export default App
