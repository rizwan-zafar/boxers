import React from 'react'
import { CodeSquare } from "react-bootstrap-icons"
import { motion } from "framer-motion"
export default function Features() {
    return (
        <>
            <div className="features initial" id="features">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-start">
                            <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }}>

                                <h3 className="fw-bold head">OUR SOFTWARE FEATURES</h3>
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul className="list-group">
                                    <li className="p-2"> <CodeSquare className="style-icon" /> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    <li className="p-2"><CodeSquare className="style-icon" />amet,labore et dolore magna aliqua aliqua</li>
                                </ul>
                            </motion.div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                            <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.5, duration: 1 }}>

                                <img src="/Images/software-img.png" className="img-fluid" alt="software" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="features initial second-section">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center">
                        <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }}>

                                <img src="/Images/software-img.png" className="img-fluid" alt="software" />
                            </motion.div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-start">
                        <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.5, duration: 1 }}>
                                <h3 className="fw-bold head">MORE OF YOUR SOFTWARE</h3>
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                                <ul className="list-group">
                                    <li className="p-2"> <CodeSquare className="style-icon" /> Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</li>
                                    <li className="p-2"><CodeSquare className="style-icon" />amet,labore et dolore magna aliqua aliqua</li>
                                </ul>
                            </motion.div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
