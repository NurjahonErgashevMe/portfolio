import { Fragment } from "react";
import ContactForm from "./contactForm/ContactForm";
const ContactPopup = () => {
  return (
    <Fragment>
      <div id="trm-order" className="trm-order">
        <div className="trm-popup-content">
          <img src="img/popup.jpg" alt="photo" />
          <div className="trm-popup-form-frame">
            <h5 className="trm-mb-20 trm-mt-20">Напишите мне сообщение</h5>
              <ContactForm />
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default ContactPopup;
