import React from 'react'
import {motion} from "framer-motion"
export default function Header() {
    return (
        <div className="header" id="home">
            <br /> <br />
            <div className="head-image">
                <div className="overlay">
                </div>
            </div>
         
            <div className="text-center carousel-caption">
            <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{ delay:0.2,duration:1}}>
                <h1>Digital Application</h1>
                <p>A digital application is simply a computer program created to carry out or facilitate a task on a computing device. </p>
                </motion.div>
            <img src="/Images/mockup.png" className="img-fluid" alt="mockup" />
            </div>
          
        </div>
    )
}
