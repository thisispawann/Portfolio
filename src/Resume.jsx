import React from 'react'
import web from '../src/images/github.svg';
import graduation from '../src/images/graduate-cap.svg';
import tbc from '../src/images/tbc.png';
import ismt from '../src/images/ismt.png';
import sololearn from '../src/images/sololearn.svg';
import datacamp from '../src/images/datacamp.svg';
import duke from '../src/images/duke.png';
import udemy from '../src/images/udemy.png';
import freecodecamp from '../src/images/freecodecamp.png';
import CV from "./assets/Pawan Kumar Shrestha.pdf";

const Resume = () => {
    return (
        <>
            <div class="bg-none pt-4 mb-5 pb-0 resume">
                <h1>Resume&nbsp;
                    <span>&nbsp;
                        <a href={CV} download>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="file-download" class="svg-inline--fa fa-file-download fa-w-12 icons file" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                                <path fill="currentColor" d="M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm76.45 211.36l-96.42 95.7c-6.65 6.61-17.39 6.61-24.04 0l-96.42-95.7C73.42 337.29 80.54 320 94.82 320H160v-80c0-8.84 7.16-16 16-16h32c8.84 0 16 7.16 16 16v80h65.18c14.28 0 21.4 17.29 11.27 27.36zM377 105L279.1 7c-4.5-4.5-10.6-7-17-7H256v128h128v-6.1c0-6.3-2.5-12.4-7-16.9z"></path>
                            </svg>
                        </a>
                    </span>&nbsp;
                </h1>
            </div>
            <div className="container-fluid resume-wrapper">
                <div>
                    <div className="p-1 project-link text-center container container-wrapper">
                        <div className="row">
                            <div className="col-md-4 col-12 col">
                                <img width="70" height="70" src={web} alt="github" />
                                <div className="md-font">
                                    <h4 className="mt-2 resume-title">Personal Projects</h4>
                                    <h5 className="text-muted mt-2">April 2019 - January 2021</h5>
                                </div>
                            </div>
                            <div className="col-md-8 col-12 col">
                                <p className="text-left ml-3 ">
                                    <p><strong>Himalaya Organic App, Employee Management app using CRUD operation</strong>&nbsp;
                                        <a href="/project" title="Himalaya App, Employee management app">View</a>
                                    </p>
                                </p>
                                <ul>
                                    <li>Built CRUD operations on a Employee Management System (department, designation, salary, leave) with C#.</li>
                                    <li>Applied SQL Server as database.</li>
                                    
                                </ul>
                                <p className="text-left ml-3">
                                    <p><strong>Todo App, Tasks organizer platform</strong>&nbsp;
                                        <a href="/project" title="Himalaya App, Employee management app">View</a>
                                    </p>
                                </p>
                                <ul>
                                   
                                    <li>This application is developed in django that uses SQLite3 for storing information.</li>
                                    <li>Built with CRUD operations on daily basis tasks.</li>
                                   
                                </ul>
                                <p className="text-left ml-3">
                                    <p><strong>Expense Tracker, Budget App</strong>&nbsp;
                                        <a href="/project" title="Himalaya App, Employee management app">View</a>
                                    </p>
                                </p>
                                <ul>
                                   
                                    <li>Build with JavaScript, HTML5 & CSS3.</li>
                                    <li>Expense tracker Chart is built with Canvas.js charting library.</li>
                                </ul>
                            </div>
                        </div>
                        <hr className="w-75 mx-auto"/>
                        <div className="row">
                            <div className="col-md-4 col-12 col">
                                <img width="70" height="70" src={graduation} alt="Graduation-Cap" />
                                <div className="md-font">
                                    <h4 className="mt-2 resume-title">Education</h4>
                                    <h5 className="text-muted mt-2">April 2018 - January 2021</h5>
                                </div>
                            </div>
                            <div className="col-md-8 col-12 col">
                                <p className="text-left ml-2">
                                    <div>
                                        <p><img width="30px" src={udemy} alt="udmy" /></p>
                                        <p><strong>Udemy, 'Java Pogramming: Complete Beginner to Advanced 2020', April 2020 </strong></p>
                                        <ul>
                                            <li>Java Introduction, Variables, Object-Oriented, Conditional and Control Flow, Arrays and ArrayLists, Loops, String Methods, Encapsulation, Inheritance and Polymorphism, Exception Handling, Interface, Static and Final;</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p><img width="30px" src={freecodecamp} alt="fcc"/></p>
                                        <p><strong>freeCodeCamp,</strong> <strong><em>"Certificate in JavaScript Algorithms and Data Structures", May 2020</em></strong></p>
                                        <ul>
                                            <li><p>ES6, Regular Expressions, Basic Data Structures, Basic Algorithm Scripting, OOP, Functional Programming, Intermediate Algorithm Scripting, JavaScript Algorithms and Data Structures Projects;</p>
                                            </li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p><img width="35px" src={duke} alt="DukeUni" /></p>
                                        <p><strong>Duke, 'Data Science Math Skills 2020', July 2020 </strong></p>
                                        <ul>
                                            <li>Sets, Numbers, Sigma Notation, Cartesian Plane, Functions, Tangent Lines, Integer Exponents, Logarithms, Probability, Permutations and Combination, Bayes' Theorem, Binomial Theorem;</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p><img width="30px" className="camp" src={datacamp} alt="DataCamp" /></p>
                                        <p><strong>DataCamp, 'Intermediate Python Course', June 2020 </strong></p>
                                        <ul>
                                            <li>Comparison Operators, Boolean Operators, if, elif, else, Loops, Dictionaries, pandas DataFrames, Basic plots with Matplotlib, Line plot, Scatter plot, Histogram, ;</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p><img width="30px" src={sololearn} alt="SoloLearn" /></p>
                                        <p><strong>SoloLearn, 'React + Redux Course 2020', July 2020 </strong></p>
                                        <ul>
                                            <li>Class base Component, Functional base Components, React Hooks, React-router-dom, Redux;</li>
                                        </ul>
                                    </div>
                                    <div>
                                        <p><img width="40px" src={tbc} alt="BritishCollege" /></p>
                                        <p><strong>The British College, Level 6 Top Up , March 2021 -  April 2022</strong></p>
                                    </div>
                                    <div>
                                        <p><img width="40px" src={ismt} alt="ISMTCollege" /></p>
                                        <p><strong>International School of Management and Technology, Level 4-5 , January 2018 -  April 2020</strong></p>
                                    </div> 
                                </p>                           
                            </div>                      
                        </div>
                    </div>
                </div>
            </div>
            <hr className="w-75 mx-auto"/>
            
        </>
    )
}
export default Resume;