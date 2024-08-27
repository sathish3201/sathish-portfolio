import React,{useRef, useState} from 'react'
import { SocialIcon } from 'react-social-icons';
import "./Hero.css"
const Hero = () => {
  const [islight,setIsLight] = useState(false);
  const check=(event)=>{
    if(event.target.checked){
        setIsLight(true);
    }else{
        setIsLight(false);
    }
  }
  return (
   <div className="hero">
    <div className="hero-left">
        <div className="title">
            <div className="line">
              
              Hi,&nbsp;I'm<span className='name'>Sathish</span></div>
            <div className="line-2">Software Developer</div>
        </div>
        <div className="caption">
          <p> I'm Passionate to Develop responsive UI/UX Design.</p>
        </div>
        
        <ul className="links">
          
        <li className='theme-item'>
          
          <input type="checkbox" id="theme" onChange={check}/>
          <label htmlFor="theme"><span>
            {islight? "Dark": "Light"} Mode
            </span></label>
        
        </li>
        <li className='login'>
        <span className="login-item">Login</span>
        </li>
        </ul>
    </div>
    <div className="hero-right">
      <div className="flip-box">
        <div className="flip-box-inner">
            <div className="logo"></div>
            <div className="logo-back">
              <div className="icons">
              <div className="github-icon">
                <SocialIcon network='github' url='https://github.com/sathish-1023/'label='github'
                />
              </div>
              <div className="linkdin-icon">
                  <SocialIcon network='linkedin' url='https://www.linkedin.com/in/sathish-chakali-91221b320/'label='linkedin'/>
              </div>
              </div>
            </div>
        </div>
      </div>
      
    </div>
   </div>
  )
}

export default Hero
