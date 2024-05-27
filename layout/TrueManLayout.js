"use client";
import Banner from "@/components/Banner";
import ContactPopup from "@/components/ContactPopup";
import Footer from "@/components/Footer";
import SideBar from "@/components/SideBar";
import TopBar from "@/components/TopBar";
import VideoPopup from "@/components/VideoPopup";
import ContactForm from "@/components/contactForm/ContactForm";
import { trueManUtility } from "@/utility";
import { Fancybox } from "@fancyapps/ui";
import { Fragment, useEffect, useRef } from "react";
const TrueManLayout = ({ children, noSidebar, onePage }) => {
  const containerRef = useRef(null);
  // const { scroll } = useLocomotiveScroll();
  useEffect(() => {
    trueManUtility.scrollAnimation();
  }, []);

  useEffect(() => {
    Fancybox.bind("[data-fancybox]", {
      animationEffect: "zoom-in-out",
      animationDuration: 600,
      transitionDuration: 1200,
      buttons: ["zoom", "slideShow", "thumbs", "close"],
    });
  }, []);

  return (
    <Fragment>
      <VideoPopup />
      <ContactPopup />
      {/* scroll container */}
      <div
        data-scroll-section=""
        id="content"
        className="trm-scroll-section"
        data-scroll-container
        ref={containerRef}
      >
        {/* top bar */}
        <TopBar onePage={onePage} />
        {/* top bar end */}
        <div className="trm-content-start">
          {/* banner */}
          <Banner centerTitle={noSidebar} />
          {/* banner end */}
          <div className="container">
            <div className="row">
              {!noSidebar && <SideBar />}
              <div className={!noSidebar ? "col-lg-8" : "col-lg-12"}>
                {/* content */}
                <div className="trm-content" id="trm-content">
                  <div
                    data-scroll
                    data-scroll-repeat
                    data-scroll-offset={500}
                    id="about-triger"
                  />
                  {children}
                  <div className="trm-divider trm-mb-40" />
                  {/* footer */}
                  <Footer />
                  {/* footer end */}
                </div>
                {/* content end */}
                {/* popup */}
                <div id="trm-order" className="trm-order">
                  <div className="trm-popup-content">
                    <img src="img/popup.jpg" alt="photo" />
                    <ContactForm />
                  </div>
                </div>
                {/* popup end */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* scroll container end */}
    </Fragment>
  );
};
export default TrueManLayout;
