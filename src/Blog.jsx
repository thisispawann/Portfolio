import React from 'react';
import { NavLink } from 'react-router-dom';
// import thumbnail from './images/thumbnail.jpg';
// import tech from './images/tech.jpg';
import django from './images/web.jpeg';
import pentest from './images/pentest.png'

const Blog = () => {
    return (
        <>
            <div className="pt-5 mt-5 text-center container-fluid">
                <div className="bg-none jumbotron">
                    <h1>Tech Blog</h1>
                </div>
            </div>
            <div className="row">
                <div className="col">
                    <div className="container">
                        <div className="row mt-5 justify-content-center card-container">
                            <div className="col-6">
                                <div className="card custom-card border-0 mx-auto mt-5" style={{width: '25rem'}}>               
                                    <img className="blog" src={django} alt="tech" />
                                    <div className="card-body">
                                        <NavLink to="/virtual-environment"><h3 className="card-title font-weight-bold">How to create new Virtual Environments? </h3></NavLink>
                                        <h6 className="card-date font-weight-bold">7 September, 2020</h6>
                                        <p className="card-text" style={{lineHeight: "initial"}}>Virtual Environment is necessary when you have many projects with different requirements. You can use Python2 or Python3 without...</p>
                                    </div>
                                </div>
                            </div>
                            {/* second blog post */}
                            <div className="col-6">
                                <div className="card custom-card border-0 mx-auto mt-5" style={{width: '25rem'}}>               
                                    <img className="blog" src={pentest} alt="tech" />
                                    <div className="card-body">
                                        <NavLink to="#0"><h3 className="card-title font-weight-bold">Exploiting Windows XP(MS08-067) with Metasploit (Kali Linux) </h3></NavLink>
                                        <h6 className="card-date font-weight-bold">11 March, 2022</h6>
                                        <p className="card-text" style={{lineHeight: "initial"}}>We will be going through the basics of using Metasploit to exploit Windows XP machine 
                                        using MS08-067 vulnerability...</p>
                                    </div>
                                </div>
                            </div>
                        </div>            
                    </div>
                </div>
            </div>    
            <hr className="w-75 mx-auto"/>
                       
        </>
    )
}

export default Blog;