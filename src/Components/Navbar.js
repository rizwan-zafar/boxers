import React from 'react'
import { Link } from "react-scroll"
export default function Navbar() {
    const [homeActive, setHomeActive] = React.useState('active');
    const [featuresActive, setFeaturesActive] = React.useState('');
    const [pricingActive, setPricingActive] = React.useState('');
    const [downloadActive, setDownloadActive] = React.useState('');
    const [contactActive, setContactActive] = React.useState('');
    const [mobileMenuClose,setMobileMenuClose]=React.useState("visible")

    const ActiveHandler = (value) => {
      setMobileMenuClose("setVisible")
    
 
         if (value === 'home') {
            setHomeActive('active')
            setFeaturesActive('')
            setPricingActive('')
            setDownloadActive('')
            setContactActive('')
        } else if (value === "features") {
            setHomeActive('')
            setFeaturesActive('active')
            setPricingActive('')
            setDownloadActive('')
            setContactActive('')
        }
        else if (value === "pricing") {
            setHomeActive('')
            setFeaturesActive('')
            setPricingActive('active')
            setDownloadActive('')
            setContactActive('')
        }
        else if (value === "download") {
            setHomeActive('')
            setFeaturesActive('')
            setPricingActive('')
            setDownloadActive('active')
            setContactActive('')
        }
        else if (value === "contact") {
            setHomeActive('')
            setFeaturesActive('')
            setPricingActive('')
            setDownloadActive('')
            setContactActive('active')
        }
        else {
            setHomeActive('active')
            setFeaturesActive('')
            setPricingActive('')
            setDownloadActive('')
            setContactActive('')
        }
    }

    return (
        <div className="nav-container">
            <nav className="navbar navbar-expand-lg">
                <div className="container">
                    <a className="navbar-brand" href="/">Boxer</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" onClick={() => {setMobileMenuClose(); }} data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className={`collapse navbar-collapse mt-2  ${mobileMenuClose}`} id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className={`nav-link   fw-bold ${homeActive}`} onClick={() => ActiveHandler("home")} aria-current="page" to="home">HOME</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link   fw-bold ${featuresActive}`} onClick={() => ActiveHandler("features")} to="features">FEATURES</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link   fw-bold ${pricingActive}`} onClick={() => ActiveHandler("pricing")} to="pricing">PRICING</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link   fw-bold ${downloadActive}`} onClick={() => ActiveHandler("download")} to="download">DOWNLOAD</Link>
                            </li>
                            <li className="nav-item">
                                <Link className={`nav-link   fw-bold ${contactActive}`} onClick={() => ActiveHandler("contact")} to="contact">Contact</Link>
                            </li>

                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}
