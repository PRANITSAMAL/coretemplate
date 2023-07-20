import React from 'react';

const Header = () => {
  return (
    <div>
        <div className="header-top">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-md-6">
                <div className="top-left text-center text-md-left">
                <h6>Opening Hours : Saturday to Tuesday - 8am to 10pm</h6>
                </div>
            </div>
            <div className="col-md-6">
                <div className="top-right text-center text-md-right">
                <ul className="social-links">
                    <li>
                    <a href="https://themefisher.com/" aria-label="facebook">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    </li>
                    <li>
                    <a href="https://themefisher.com/" aria-label="twitter">
                        <i className="fab fa-twitter"></i>
                    </a>
                    </li>
                    <li>
                    <a href="https://themefisher.com/" aria-label="google-plus">
                        <i className="fab fa-google-plus-g"></i>
                    </a>
                    </li>
                    <li>
                    <a href="https://themefisher.com/" aria-label="instagram">
                        <i className="fab fa-instagram"></i>
                    </a>
                    </li>
                    <li>
                    <a href="https://themefisher.com/" aria-label="pinterest">
                        <i className="fab fa-pinterest-p"></i>
                    </a>
                    </li>
                </ul>
                </div>
            </div>
            </div>
        </div>
        </div>
       
        <section className="header-uper">
        <div className="container">
            <div className="row align-items-center">
            <div className="col-xl-4 col-lg-3">
                <div className="logo">
                <a href="index.html">
                    <img loading="lazy" className="img-fluid" src="images/logo.png" alt="logo" />
                </a>
                </div>
            </div>
            <div className="col-xl-8 col-lg-9">
                <div className="right-side">
                <ul className="contact-info pl-0 mb-4 mb-md-0">
                    <li className="item text-left">
                    <div className="icon-box">
                        <i className="far fa-envelope"></i>
                    </div>
                    <strong>Email</strong>
                    <br />
                    <a href="mailto:info@medic.com">
                        <span>info@medic.com</span>
                    </a>
                    </li>
                    <li className="item text-left">
                    <div className="icon-box">
                        <i className="fas fa-phone"></i>
                    </div>
                    <strong>Call Now</strong>
                    <br />
                    <span>+ (88017) - 123 - 4567</span>
                    </li>
                </ul>
                <div className="link-btn text-center text-lg-right">
                    <a href="/contact" className="btn-style-one">Appoinment</a>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
    </div>
  );
}

export default Header;
