import React from 'react'

const Footer = () => {
    return (
        <div>
            <div className="footer text-muted text-center pt-4 mt-5">
                <span className="mt-auto">
                    <b>Pawan Kumar Shrestha</b> © {new Date().getFullYear()}. Made with&nbsp;
                    <span className="heart">&nbsp;❤&nbsp;
                    </span> &amp;&nbsp;<a className="react" href="https://www.reactjs.org">ReactJS</a>
                </span>
            </div>
        </div>
    )
}

export default Footer
