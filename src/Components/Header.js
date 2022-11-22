import React from 'react'

export default function Header() {
    return (
        <div className="header">
            <br /> <br />
            <div className="head-image">
                <div className="overlay">
                </div>

            </div>
            <div className="text-center carousel-caption">
                <h1>Digital Application</h1>
                <p>A digital application is simply a computer program created to carry out or facilitate a task on a computing device. </p>
            <img src="/Images/mockup.png" className="img-fluid" alt="mockup" />
            </div>
            {/* <img src="/Images/header-1.jpg" alt="header " /> */}
        </div>
    )
}
