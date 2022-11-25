import React from 'react'
import { ArrowDownShort } from "react-bootstrap-icons"
import {motion} from "framer-motion"
export default function Download() {
    return (
        <>
            <div className="download initial" id="download">
                <div className="container custom-container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-start">
                            <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.2, duration: 1 }}>

                                <h3 className="fw-bold head">DOWNLOAD OUR SOFTWARE</h3>
                                <p className="">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                                <button className="btn"> DOWNLOAD <ArrowDownShort />   </button>
                            </motion.div>
                        </div>
                        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 text-center second-col">
                            <motion.div whileInView={{ y: 0 }} initial={{ y: 100 }} transition={{ delay: 0.5, duration: 1 }}>

                                <img src="/Images/software-img.png" className="img-fluid" alt="software" />
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
