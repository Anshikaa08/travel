import React from 'react'
import { Button } from './Button'
import { Link } from 'react-router-dom';
import './Footer.css'

function Footer() {
  return (
    <div className='footer-container'>
        <section className="footer-subscription">
            <p className="footer-subscription-heading">
                Join the Adventure newsletter to recieve our best 
                vacation deals
            </p>
            <p className="footer-subscription-text">
                You can unsubscribe at any time.
            </p>
            <div className='input-areas'>
                <form>
                <input type="email" name="email" placeholder="Your
                Email" classNmae="footer-input"/>
                <Button buttonStyle='btn--outline'>Subscribe</Button>
                </form>
            </div>
        </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='./sign-up'>How it works</Link>
                <Link to='/' >Testimonials</Link>
                <Link to='/' >Careers</Link>
                <Link to='/' >Investors</Link>
                <Link to='/' >Terms of Services</Link>
            </div>
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='./sign-up'>How it works</Link>
                <Link to='/' >Testimonials</Link>
                <Link to='/' >Careers</Link>
                <Link to='/' >Investors</Link>
                <Link to='/' >Terms of Services</Link>
            </div>
            
        </div>
        <div className="footer-link-wrapper">
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='./sign-up'>How it works</Link>
                <Link to='/' >Testimonials</Link>
                <Link to='/' >Careers</Link>
                <Link to='/' >Investors</Link>
                <Link to='/' >Terms of Services</Link>
            </div>
            <div className="footer-link-items">
                <h2>About Us</h2>
                <Link to='./sign-up'>How it works</Link>
                <Link to='/' >Testimonials</Link>
                <Link to='/' >Careers</Link>
                <Link to='/' >Investors</Link>
                <Link to='/' >Terms of Services</Link>
            </div>
        </div>
      </div>
      <section className='social-media '>
        <div className='social-media-wrap'>
            <div className='footer-logo'>
                <Link to='/' className="social-logo">
                    TRVL <i className='fab fa-typo3'></i>
                </Link>
            </div>
            <small className="websites-rights">TRVL © 2020</small>
            <div className="social-icons">
                <Link className="social-icon-link facebook"
                target="_blank"
                aria-label='Facebook'
                >
                    <i className="fab fa-facebook"></i>
                </Link>
                <Link className="social-icon-link instagram"
                target="_blank"
                aria-label='Instagram'
                >
                    <i className="fab fa-instagram"></i>
                </Link>
                <Link className="social-icon-link twitter"
                target="_blank"
                aria-label='twitter'
                >
                    <i className="fab fa-twitter"></i>
                </Link>
                <Link className="social-icon-link linkedIn"
                target="_blank"
                aria-label='linkedIn'
                >
                    <i className="fab fa-linkedIn"></i>
                </Link>
            </div>
        </div>
      </section>
    </div>
  )
}

export default Footer;