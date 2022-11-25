import React from 'react'
import { GeoAlt, Telephone, ChatLeftText } from "react-bootstrap-icons"
import {motion} from "framer-motion"
export default function Contact() {
    return (
        <div className="contact" id="contact">
            <div className="back-image">
                <div className="overlay">
                    <div className="container custom-container set-form ">

                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                            <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{  duration:0.5}}>

                                <h3 className="fw-bold  ">CONTACT US</h3>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul className="list-group">
                                    <li className="p-2"><GeoAlt className="style-icon" /> 1234,Street Name</li>
                                    <li className="p-2"><Telephone className="style-icon" /> 0992234234</li>
                                    <li className="p-2"><ChatLeftText className="style-icon" /> official@mayonity.com</li>
                                </ul>
                                </motion.div>
                            </div>
                            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 set-padding">
                            <motion.div whileInView={{scale:1}} initial={{scale:0}} transition={{  duration:0.5}}>

                                <form>
                                    <div className="mb-3">
                                        <input type="text" placeholder="Name" className="form-control" id="name" aria-describedby="name" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="email" placeholder="Email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                    </div>
                                    <div className="mb-3">
                                        <input type="subject" placeholder="Subject" className="form-control" id="name" aria-describedby="name" />
                                    </div>
                                    <div className="form-floating">
                                        <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" />
 
                                    </div>

                                    <button type="submit" className="btn  mt-4">Submit</button>
                                </form>
                                </motion.div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
