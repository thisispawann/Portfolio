import React from 'react';
import { NavLink } from 'react-router-dom';
// import thumbnail from './images/thumbnail.jpg';
// import tech from './images/tech.jpg';
import django from './images/venv.jpeg'

const Blog = () => {
    return (
        <>
            <div className="pt-5 mt-5 text-center container-fluid">
                <div className="bg-none jumbotron">
                    <h1>Tech Blog</h1>
                </div>
            </div>
            <div className="container">
                <div className="row mt-5 justify-content-center card-container">
                    <div className="col-6">
                        <div className="card custom-card border-0 mx-auto mt-5" style={{width: '20rem'}}>               
                            <img className="blog" src={django} alt="tech" />
                            <div className="card-body">
                                <h3 className="card-title font-weight-bold">Virtual Environment (env) </h3>
                                <h6 className="card-date font-weight-bold">7 September, 2020</h6>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <NavLink to="#" className="btn my-btn btn-text">View More</NavLink>
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