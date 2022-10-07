import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { AiFillLinkedin, AiFillTwitterSquare} from 'react-icons/ai'


export const Footer = () => {
  return (
    <>
    <div className="footer">
    <div >
       <a className="footerLink"  href='https://www.google.com/'><FcGoogle /></a>
       <a className="footerLink" href='https://www.linkedin.com/'>< AiFillLinkedin/></a>
       <a className="footerLink"  href='https://twitter.com/i/flow/login'><AiFillTwitterSquare/></a>
    </div>
    <div >
        <p>We have created this app for you!!</p>
    </div>
    </div>
    </>
  )
}
