import React from 'react';
import { Link } from 'react-router-dom';
import himalaya from '../src/images/himalaya.JPG';
import todo from '../src/images/todo1.png';
import todos from '../src/images/todo2.png';
import expense from './images/expense-tracker.png';
import expenset from './images/expense.png';
import sumeru1 from './images/sumeru1.png';
import sumeru from './images/sumeru3.png';
import vs from './images/vs.JPG';

 const Project = () => {
    return (
        <>
           <div className="pt-5 mt-5 text-center container-fluid">
                <div className="bg-none jumbotron">
                    <h1>Projects</h1>
                </div>
            </div>
            <div className="text-left container">
                <section>
                    <div className="todo-container mt-5" id="budget">
                        <div className="text-center container">
                        <Link to="#" style={{ textDecoration:'none'}}>
                                <div className="row">
                                    <div className="col">
                                        <div className="todo">
                                            <img className="expense-image" src={expense} alt="expense-tracker" /><span>&nbsp;&nbsp;<img className="expenset-image expense-image1" src={expenset} alt="expense-tracker" /></span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-center todo-app">Expense Tracker App</h2>
                            </Link>
                            <span className="badge badge-pill badge-dark todo-span">JavaScript</span>
                            <span className="badge badge-pill badge-dark todo-span">HTML5</span>
                            <span className="badge badge-pill badge-dark todo-span">CSS3</span>
                            <p className="pt-3 mx-auto">
                                Budget App, which allows us to track a range of expenses. We can enter incoming and outgoing money and the app can help us to store and track that info.
                            </p>
                            <a className="git" href="https://github.com/thisispawann/Expense-Tracker"><button type="button" class="btn btn-outline-primary">View on GitHub</button></a>
                            <hr className="w-100 mx-auto"/>
                        </div>
                    </div>
                    <div className="todo-container mt-5" id="budget">
                        <div className="text-center container">
                        <Link to="#" style={{ textDecoration:'none'}}>
                                <div className="row">
                                    <div className="col">
                                        <div className="todo">
                                            <img className="expense-image himalaya" src={himalaya} alt="expense-tracker" />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-center todo-app">Himalaya Organic Farm</h2>
                            </Link>
                            <span className="badge badge-pill badge-dark todo-span">ASP.NET</span>
                            <span className="badge badge-pill badge-dark todo-span">SQL Server</span>
                            <span className="badge badge-pill badge-dark todo-span">Bootstrap</span>
                            <p className="pt-3 mx-auto">
                            Himalaya Organic Farm is a employee management app which is done with CRUD operation. This app allows us to create, update, delete employees record.
                            </p>
                            <a className="git" href="https://github.com/thisispawann/EmployeeManagementSystem"><button type="button" class="btn btn-outline-primary">View on GitHub</button></a>
                            <hr className="w-100 mx-auto"/>
                        </div>
                    </div>
                    <div className="todo-container">
                        <div className="text-center container">
                        <Link to="#" style={{ textDecoration:'none'}}>
                                <div className="row">
                                    <div className="col">
                                        <div className="todo">
                                            <img className=" todo-image" src={todo} alt="todo" /><span>&nbsp;&nbsp;<img className="todo-image todo-image1" src={todos} alt="todo" />&nbsp;&nbsp;<img className="todo-image" src={todo} alt="todo" /></span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-center todo-app">Todo App</h2>
                            </Link>
                            <span className="badge badge-pill badge-dark todo-span">django</span>
                            <span className="badge badge-pill badge-dark todo-span">SQLite3</span>
                            <span className="badge badge-pill badge-dark todo-span">HTML5</span>
                            <span className="badge badge-pill badge-dark todo-span">CSS3</span>
                            <p className="pt-3 mx-auto">
                                Todo App is a app that makes to add tasks, organize them into lists and add due dates.
                            </p>
                            <a className="git" href="https://github.com/thisispawann/todo_app"><button type="button" class="btn btn-outline-primary">View on GitHub</button></a>
                            <hr className="w-100 mx-auto"/>
                        </div>
                    </div>       
                    <div className="todo-container">
                        <div className="text-center container">
                        <Link to="#" style={{ textDecoration:'none'}}>
                                <div className="row">
                                    <div className="col">
                                        <div className="todo">
                                            <img className="todo-image fitness" src={sumeru} alt="todo" /><span>&nbsp;&nbsp;<img className="todo-image todo-image1 sumeru" src={sumeru1} alt="todo" /></span>
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-center todo-app">Sumeru Fitness App</h2>
                            </Link>
                            <span className="badge badge-pill badge-dark todo-span">JSP</span>
                            <span className="badge badge-pill badge-dark todo-span">MySQL</span>
                            <span className="badge badge-pill badge-dark todo-span">HTML5</span>
                            <span className="badge badge-pill badge-dark todo-span">CSS3</span>
                            <span className="badge badge-pill badge-dark todo-span">Bootstrap</span>
                            <p className="pt-3 mx-auto">
                                Sumeru Fitness App is an Inventory management system for a Fitness Business that sells fitness supplies.
                            </p>
                            <a className="git" href="https://github.com/thisispawann"><button type="button" class="btn btn-outline-primary">View on GitHub</button></a>
                            <hr className="w-100 mx-auto"/>
                        </div>
                    </div> 
                    <div className="todo-container mt-5" id="budget">
                        <div className="text-center container">
                        <Link to="#" style={{ textDecoration:'none'}}>
                                <div className="row">
                                    <div className="col">
                                        <div className="todo">
                                            <img className="expense-image himalaya" src={vs} alt="expense-tracker" />
                                        </div>
                                    </div>
                                </div>
                                <h2 className="text-center todo-app">Graphical Programming Language</h2>
                            </Link>
                            <span className="badge badge-pill badge-dark todo-span">c#</span>
                            <span className="badge badge-pill badge-dark todo-span">Factory Design Pattern</span>
                            <span className="badge badge-pill badge-dark todo-span">XML Documentation</span>
                            <p className="pt-3 mx-auto">
                            Himalaya Organic Farm is a employee management app which is done with CRUD operation. This app allows us to create, update, delete employees record.
                            </p>
                            <a className="git" href="https://github.com/thisispawann/EmployeeManagementSystem"><button type="button" class="btn btn-outline-primary">View on GitHub</button></a> &nbsp; &nbsp; 
                            <a className="git" href="https://bitbucket.org/thisispawan/graphical-programming/src/master/"><button type="button" class="btn btn-outline-primary">View on Bitbucket</button></a>
                            <hr className="w-100 mx-auto"/>
                        </div>
                    </div>                      
                </section>
            </div>
        </>
    )
}
export default Project;