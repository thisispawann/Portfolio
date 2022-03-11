import React from 'react';


const BlogOne = () => {
    return (
        <>
            <div className="pt-5 mt-5 text-center container-fluid">
                <div className="bg-none jumbotron">
                    <h1>How to create new Virtual Environments? </h1>
                </div>
            </div> 
            <div className="container">
                <h6 className="card-date mt-5 ml-5 text-center">7 September, 2020 | Pawan Kumar Shrestha</h6> 
                <p className="mt-5">Virtual Environment is necessary when you have many projects with different requirements.
                    You can use Python2 or Python3 without worrying about collision and keep them main python folder clean.</p>   
                <p className="mt-4">Creating new virtual environments with recent Python versions is as easy as running this command on your console.</p> 
                <div className="container">
                    <h5 className="mt-6 font-weight-bold">Create a directory for your Python application</h5>   
                    <p>You usually want to create one virtual environment per new Python application, therefore let's create a directory for our application and 
                        consider as django-project</p> 
                    <p>Do that by typing in your command prompt or terminal:</p>
                    <p style={{backgroundColor: "#dee2e6", padding: '30px 10px', borderRadius:"4px"}}>mkdir django-project</p>
                    <p>Let's move into that directory by inputting:</p>
                    <p style={{backgroundColor: "#dee2e6", padding: '30px 10px', borderRadius:"4px"}}>cd django-project</p>
                </div>
                <div className="container">
                    <h5 className="font-weight-bold">Create your Python virtual environment</h5>    
                    <p>Create a virtual environment called env by writing:</p>
                    <p style={{backgroundColor: "#dee2e6", padding: '30px 10px', borderRadius:"4px"}}>python3 -m venv env</p>
                    <h5 className="font-weight-bold">Activate the virtual environment</h5>
                   <p> To activate the virtual environment:</p>
                    <p style={{backgroundColor: "#dee2e6", padding: '30px 10px', borderRadius:"4px"}}>env\Scripts\activate</p>
                </div>
                <div className="container">
                <p>Congratulations! you have now created and activated your own Python virtual environment.</p>
                    <p>From here, you can install different python packages that won't interfere with your other applications that might need conflicting versions.</p>
                </div>
            </div> 
            <hr className="w-75 mx-auto"/>
                       
        </>
    )
}

export default BlogOne;