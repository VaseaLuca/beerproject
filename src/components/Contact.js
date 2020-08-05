import React from 'react';

import Footer from './Footer';
import './Contact.css';

const Contact = () => {

  return (
    <div className="contact">
      <div className="main-block">
        <div className="contact-list">
          <ul className="ul-list">
            <li className="info-list">
              Linia Fierbinte <br />
              <a href="tel:055 8003 4555">055 8003 4555 (Gratuit)</a>
            </li>
            <li className="info-list">
              <a href="https://telegram.org/tour/channels">
                <i className="telegram icon"></i>
              </a>
              Bere Chișinău
            </li>
            <li className="info-list">
              Pentru Programare Vizite la Fabrică <br />
              <a href="tel:055 5055 2222">055 5055 2222 (Gratuit)</a>
            </li>
            <li className="info-list">
              <a href="https://telegram.org/tour/channels">
                <i className="telegram icon"></i>
              </a>
              Turul Berii Chișinău
            </li>
          </ul>
          <div className="googleMaps">
            <iframe
              title="Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2721.127385021227!2d28.89735155190306!3d46.99847167904676!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40c97be7ae5f3f23%3A0x544da78217b23916!2sEfes%20Vitanta%20Moldova%20Brewery!5e0!3m2!1sen!2sro!4v1596446858506!5m2!1sen!2sro"
              height="450"
              frameBorder="0"
              style={{ border: "0" }}
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            ></iframe>
          </div>
        </div>
        <div className="contact-footer">
          <Footer className="footer-contact" />
        </div>
      </div>
    </div>
  );
}

export default Contact;