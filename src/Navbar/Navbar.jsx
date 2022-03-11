import React from "react";
import { Link } from "react-router-dom";
import { createGlobalStyle } from 'styled-components';
import AOS from 'aos'
import 'aos/dist/aos.css';

export const GlobalStyles = createGlobalStyle`
    body {
        background: ${({theme }) => theme.body};
        color: ${({theme }) => theme.text};
        transition: all 0.5s linear;
        font-family: 'Raleway', sans-serif;
    }
    .navbar {
        background: ${({theme }) => theme.navbar};
        color: ${({theme }) => theme.text};
        transition: all 0.5s linear;
        font-family: 'Raleway', sans-serif;
    }
   
    .fal {
        /* position: absolute; */
        top: 1.2rem !important;
        right: 8rem !important;
        font-size: 1rem !important;
        z-index: 10;
        position: fixed;
        cursor: pointer;
    }
`;

export const lightTheme = {
    body: '#000 !important',
    navbar: '#000 !important',
    text: '#e9ecef !important',
    primary: '#e9ecef !important'
};

export const darkTheme = {
    body: '#e9ecef !important',
    text: '#000 !important',
    primary: '#000 !important'
};

const Navbar = () => {
     
    AOS.init()
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light fixed-top">
                <div className="container-fluid">
                    <Link className="navbar-brand home" to="/">Home</Link>
                    <button className="navbar-toggler nt" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon nti"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/about">About</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/project">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/resume">Resume</Link>
                            </li>
                            <li>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

