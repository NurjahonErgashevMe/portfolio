"use client";
import ContactForm from "@/components/contactForm/ContactForm";
import {
  EMAIL,
  GITHUB_NAME,
  GITHUB_URL,
  LINKEDIN_NAME,
  LINKEDIN_URL,
  PHONE_NUMBER,
  TELEGRAM_URL,
  TELEGRAM_USERNAME,
} from "@/constants";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
import { useContext, useEffect } from "react";

const Index = () => {
  const {
    banner_image_function,
    page_info_function,
    banner_type_function,
  } = useContext(context);
  useEffect(() => {
    banner_type_function();
    page_info_function(
      "Есть вопросы?<br>Давайте свяжемся ",
      "contact",
      "contact"
    );
  }, []);
  return (
    <TrueManLayout>
      {/* contact */}
      <div className="row">
        <div className="col-lg-6">
          {/* contact card */}
          <div
            className="trm-service-icon-box trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-service-content">
              <div className="trm-icon">
                <img
                  src="img/icons/icon-5.svg"
                  alt="icon"
                  className="trm-black-icon"
                />
                <img
                  src="img/icons/icon-5w.svg"
                  alt="icon"
                  className="trm-white-icon"
                />
              </div>
              <h6 className="trm-mb-20">Связаться</h6>
              <div className="trm-mb-15">
                <span className="trm-label">Телефон номер:</span>{" "}
                <span className="trm-text-sm">{PHONE_NUMBER}</span>
              </div>
              <div>
                <span className="trm-label">Email:</span>{" "}
                <span className="trm-text-sm">{EMAIL}</span>
              </div>
            </div>
          </div>
          {/* contact card end */}
        </div>
        <div className="col-lg-6">
          {/* contact card */}
          <div
            className="trm-service-icon-box trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-service-content">
              <div className="trm-icon">
                <img
                  src="img/icons/icon-6.svg"
                  alt="icon"
                  className="trm-black-icon"
                />
                <img
                  src="img/icons/icon-6w.svg"
                  alt="icon"
                  className="trm-white-icon"
                />
              </div>
              <h6 className="trm-mb-20">Соц цети</h6>
              <div className="trm-mb-15">
                <span className="trm-label">Telegram:</span>{" "}
                <span className="trm-text-sm">
                  <a
                    href={TELEGRAM_URL}
                    role="link"
                    target="_blank"
                    title="My telegram profile"
                  >
                    {TELEGRAM_USERNAME}
                  </a>
                </span>
              </div>
              <div className="trm-mb-15">
                <span className="trm-label">Linked In:</span>{" "}
                <span className="trm-text-sm">
                  <a
                    href={LINKEDIN_URL}
                    role="link"
                    target="_blank"
                    title="My LinkedIn profile"
                  >
                    {LINKEDIN_NAME}
                  </a>
                </span>
              </div>
              <div>
                <span className="trm-label">Github:</span>{" "}
                <span className="trm-text-sm">
                  <a
                    href={GITHUB_URL}
                    role="link"
                    target="_blank"
                    title="My LinkedIn profile"
                  >
                    {GITHUB_NAME}
                  </a>
                </span>
              </div>
            </div>
          </div>
          {/* contact card end */}
        </div>
      </div>
      {/* contact end */}
      {/* contact form */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Связаться <span data-number={3} />
          </h5>
        </div>
        <ContactForm />
      </div>
      {/* contact form end */}
    </TrueManLayout>
  );
};
export default Index;
