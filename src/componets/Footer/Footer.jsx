import React from 'react'
import "./Footer.css"
import { facebook,twitter,instagram } from '../../assets/index'

const Footer = () => {
  return (
    <footer className='black'>
      <div className='wrapper'>
        <div className='content-container'>
          <div className='links'>
            <a href="#" className='logo'>
              Sound <span className='red'>DZign</span>
            </a>
            <div className='social-icons'>
              <a href="#">
                <img src={facebook} alt=""></img>
              </a>
              <a href="#">
                <img src={twitter} alt=""></img>
              </a>
              <a href="#">
                <img src={instagram} alt=""></img>
              </a>
            </div>
      
          </div>

          <div className='links'>
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className='links'>
            <h3>Contact Us</h3>
            <ul>
              <li>
                <a href="#">contact@email.com</a>
              </li>
              <li>
                <a href="#">+1 999 999 999</a>
              </li>
            </ul>
          </div>
          <div className='copyright-mobile'>
              This website is designed by ITSolHub @2024
            </div>
        </div>
      </div>

    </footer>
  )
}

export default Footer
