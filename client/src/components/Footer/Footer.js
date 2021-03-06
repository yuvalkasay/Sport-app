import React from 'react';
import './Footer.css';

export default function Footer() {
    return (
        <div className="Footer">
        <footer className="mainfooter" role="contentinfo">
        <div className="footer-middle">
        <div className="container">
            <div className="row">
            <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                <h4>About Us</h4>
                <ul className="list-unstyled">
                    
                </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                <h4>Heading 2</h4>
                <ul className="list-unstyled">

                </ul>
                </div>
            </div>
            <div className="col-md-3 col-sm-6">
                <div className="footer-pad">
                <h4>Contact Us</h4>
                <ul className="list-unstyled">
                </ul>
                </div>
            </div>
                <div className="col-md-3">
                    <h4>Follow Us</h4>
                    <ul className="social-network social-circle">
                    <li><a href="https://www.linkedin.com/feed/" target="_blank" rel='noreferrer noopener' className="icoFacebook" title="Facebook"><i className="fa fa-facebook"></i></a></li>
                    <li><a href="https://www.facebook.com/" target="_blank" rel='noreferrer noopener' className="icoLinkedin" title="Linkedin"><i className="fa fa-linkedin"></i></a></li>
                    <li><a href="https://github.com/tamrat-bay/FUN-Sports" rel='noreferrer noopener' target="_blank" className="icoLinkedin" title="Linkedin"><i className="fa fa-github"></i></a></li>
                    </ul>               
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 copy">
                    <p className="text-center">&copy; Copyright 2020 - FUN - Sports.  All rights reserved.</p>
                </div>
            </div>
        </div>
        </div>
        </footer>
        </div>
    )
}
