import React from 'react'
import {Laptop,Speedometer2,FiletypeJsx} from "react-bootstrap-icons";

export default function Attribute() {
    return (
        <div className="attribute container initial custom-container">
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                        <Laptop className="style-icon"/>
                     <h3 className="fs-5 fw-bold mt-4">RESPONSIVE LAYOUT</h3>
                     <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 text-center">
                    <Speedometer2 className="style-icon"/>
                    <h3 className="fs-5 fw-bold mt-4">PERFORMANCE</h3>
                     <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 text-center">
                    <FiletypeJsx className="style-icon"/>
                    <h3 className="fs-5 fw-bold mt-4">TECHNOLOGY</h3>
                     <p className="mt-3">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.</p>
                    
                     </div>
                </div>
            </div>
        </div>
    )
}
