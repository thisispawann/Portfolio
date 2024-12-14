import React from 'react'
import web from "../src/images/thumb3.jpg";

 const About = () => {
    return (
        <>
            <div className="pt-5 mt-5 text-center min-vh-100 container-fluid">
                <div className="bg-none jumbotron">
                    <h1>About</h1>
                </div>
            </div>
            <div className="container about-container">
                <img width="230" height="300" src={web} className="about-image" alt="about img"/>
                <article className="w-75 m-auto pt-2 text-left about-container">
                    <p className="text-center">
                        <span>&nbsp;<b>Software Engineer</b>&nbsp; ⚛</span> 
                        <span>&nbsp;<b>Software Engineer</b>&nbsp; ⚛</span>
                        <span>&nbsp;<b>Software Engineer</b>&nbsp; ⚛</span>
                        <span>&nbsp;<b>Software Engineer</b>&nbsp; ⚛</span>
                    </p>
                    <div className="mt-4 pt-2">
                        <p>
                            <strong>Pawan Kumar Shrestha</strong>&nbsp;
                             is a passionate
                            <strong> Software Engineer</strong>&nbsp;
                              who has an extensive background in various coding languages, developing web applications, and building websites from the scratch. 
                              Currently, he is doing BTEC HND in Computing at International School of Management
                              and Technology. I enjoy creating simple, clean, and creative user
                              interfaces using the latest technologies. I specialized in Python
                              along with a modern JavaScript library like React.
                        </p><br />
                        <p>He believes in personal development and growth as well as life-long
                            learning. I'm always interested in new concepts and technologies.
                        </p>
                        <p>Passionate include: learning new things, books, traveling, painting, cricket, photography and good coffee.
                        </p>
                        <div className="pt-2">
                            <h4 className="skills">Skills:</h4>
                            <p>
                                <strong>Languages:</strong> JavaScript (ES5. ES6+), HTML5, CSS (CSS3), MySQL, Python, Java
                            </p>
                            <p>
                                <strong>Frameworks/Libraries:</strong> Python, Spring Boot, Microservices, React.js, Gatsby.js, Redux, Material UI, Styled-Components, yarn, npm, babel
                            </p>
                            <p>
                                <strong>Version control:</strong> Git, Bitbucket, CI/CD
                            </p>
                        </div>
                    </div>
                    <p class="unemployed mt-3">
                        <small>
                            <strong>Currently looking for new life-changing opportunities</strong>
                                ! If you like what you <a href="/resume">see</a>, let's get in&nbsp;
                            <a href="mailto:thisispawann@gmail.com" target="_blank" rel="noopener noreferrer">touch</a>!
                        </small>
                    </p>                                  
                </article>
            </div>
            
        </>
    )
}
export default About;