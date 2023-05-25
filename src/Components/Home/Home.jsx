import React from "react";
import {FaLinkedin, FaGithubAlt} from "react-icons/fa";

export default function Home(){
    return (
    <>
    <div className="card">
        <h1 className="myName">Charles Durkin</h1>
        <p className="myTitle">Software Developer</p>
        <img className='myImg' src="https://i.imgur.com/ZSzEYv2.jpg" alt="me"></img>
        <div>
        <p>
        I am an open-minded, detail-oriented full-stack software developer with an unshakable drive for delivering beautifully dynamic web sites demanding applause. Skydiving and rock climbing have given me a tremendous perspective that continues to fuel and inspire my designs as I bring our ideas to life. I intend to adventure in style, take risks, and utilize my gifts in any challenge I am faced with.
        </p>
        </div>
        </div>
        <span>Check out my <a href="https://docs.google.com/document/d/1yT9xOZCLwCTpChqcFdttURyKman9QCaDI2UPjBQiAIA/edit?usp=sharing">Resume</a> </span>
        <hr/>
        <div className='footer'>
        <a href='https://www.linkedin.com/in/charley-durkin-software-engineer/'><FaLinkedin /></a>
        <a href='https://github.com/DurkinKid?tab=repositories'><FaGithubAlt /></a>
        </div>
    </>
    )
}