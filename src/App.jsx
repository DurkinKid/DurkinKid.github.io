// import { useState } from 'react'
import './App.css'
import NavBar from './Components/NavBar/NavBar';
import {FaLinkedin, FaGithubAlt} from "react-icons/fa";




function App() {
  // const [count, setCount] = useState(0)


  return (
    <>
     
      <NavBar />
      <div className="card">
        {/* <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button> */}
        <img className='myImg' src="https://i.imgur.com/ZSzEYv2.jpg" alt="me"></img>
        <p>
        I am an open-minded, detail-oriented full-stack software developer with an unshakable drive for delivering beautifully dynamic web sites demanding applause. Skydiving and rock climbing have given me a tremendous perspective that continues to fuel and inspire my designs as I bring our ideas to life. I intend to adventure in style, take risks, and utilize my gifts in any challenge I am faced with.
        </p>
      </div>
      <hr/>
      <div id='contact' className='card'>
      <FaLinkedin />
      <FaGithubAlt />
      </div>

      
    </>
  )
}

export default App
