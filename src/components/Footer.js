import React from 'react';

import './Footer.css'


const Footer = (props) => {
  return (
    <section className={props.className}>
      
      <div>
        Urmareste-ne:
        <a href="https://www.facebook.com/berechisinau/">
          <i className="facebook f icon" />
        </a>
        <a href="https://www.instagram.com/berechisinau/">
          <i className="instagram icon" />
        </a>
        <a href="https://www.youtube.com/channel/UCtWy3qkh94QEf3TTWQWpq2Q">
          <i className="youtube icon" />
        </a>
      </div>
    </section>
  );
}
export default Footer;