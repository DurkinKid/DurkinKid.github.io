import React from "react";
import { Link } from "react-router-dom";
import ContactPage from "../../Pages/ContactPage/ContactPage";
import HomePage from "../../Pages/HomePage/HomePage";
import ProjectsPage from "../../Pages/ProjectsPage/ProjectsPage";




export default function NavBar() {
  return (
    <div>
        <nav className="navLinx">
        <Link to="/">Home</Link>   
        <Link to="/projectspage">Projects</Link>
        <Link to="/contactpage">Contact</Link>          
        </nav><hr/>
    </div>
    
  );
}


