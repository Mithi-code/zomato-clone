import React from 'react';
import Select from 'react-select';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import './index.css';

const country = [
  { value: 'India', label: 'India' },
  { value: 'Morocco', label: 'Morocco' },
  { value: 'Nepal', label: 'Nepal' },
];
const language = [
  { value: 'English', label: 'English' },
  { value: 'Nepali', label: 'Nepali' },
  { value: 'Arabic', label: 'Arabic' },
];
export const Index = () => {
  return (
    <div className='footer'>
      <div className='head'>
        <img className='logo' src='https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png?fit=around|198:42&amp;crop=198:42;*,*' />
        <div className="select">
        <Select options={country} />
        <Select options={language} />
        </div>
      </div>
      <div className='footer-info'>
        <div className='company'>
          <h2>COMPANY</h2>
          <p>Who We Are</p>
          <p>Blog</p>
          <p>Careers</p>
          <p>Report Fraud</p>
          <p>Contact</p>
          <p>Investor Relations</p>
        </div>
        <div className='foodies'>
          <h2>FOR FOODIES</h2>
          <p>Code Of Conduct</p>
          <p>Community</p>
          <p>Blogger Help</p>
          <p>Mobile Apps</p>
        </div>
        <div className='restaurants'>
          <h2>FOR RESTAURANTS</h2>
          <p>Add restaurants</p>
          <h2>FOR ENTERPRISES</h2>
          <p>Zomato for Work</p>
        </div>
        <div className='for-you'>
          <h2>FOR YOU</h2>
          <p>Privacy</p>
          <p>Terms</p>
          <p>Security</p>
          <p>Sitemap</p>
        </div>
        <div className="social-links">
         <div className="links">
           <h2>SOCIAL LINKS</h2>
           <div className='icons'>
           <FacebookIcon />
           <TwitterIcon />
           <InstagramIcon />
           </div>
           <div className="download-btn">
             <a href='#'>
             <img src='https://b.zmtcdn.com/data/webuikit/9f0c85a5e33adb783fa0aef667075f9e1556003622.png' className='img-btn'/>
             </a>
             <img src='https://b.zmtcdn.com/data/webuikit/23e930757c3df49840c482a8638bf5c31556001144.png' className='img-btn'/>
            </div>
         </div>
        </div>
      </div>
    </div>
  );
};
