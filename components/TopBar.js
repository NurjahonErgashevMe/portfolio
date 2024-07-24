"use client";
import { context } from "@/context/context";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const TopBar = ({ onePage }) => {
  const [toggle, setToggle] = useState(false);
  const { modeChange, mode } = useContext(context);

  useEffect(() => {
    modeChange(JSON.parse(localStorage.getItem("trueman")));
  }, []);

  return (
    <div
      className="trm-top-bar"
      data-scroll=""
      data-scroll-sticky=""
      data-scroll-target="#content"
      data-scroll-offset={-10}
    >
      <div className="container">
        <div className="trm-left-side">
          {/* logo */}
          <Link legacyBehavior href="/">
            <a className="trm-logo-frame trm-anima-link">
              <div className="trm-logo-text">
                Nurjahon {''} <span>Ergashev</span>
              </div>
            </a>
          </Link>
          {/* logo end */}
        </div>
        <div className={`trm-right-side ${toggle ? "trm-active" : ""}`}>
          {/* menu */}
          <div className="trm-menu">
            <nav>
              {onePage ? (
                <OnePageMenu />
              ) : (
                <ul>
                  <li >
                    <Link legacyBehavior href="/">
                      Home
                    </Link>
                  </li>
                  <li >
                    <Link legacyBehavior href="/portfolio">
                      Portfolio
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/resume">
                      Resume
                    </Link>
                  </li>
                  <li>
                    <Link legacyBehavior href="/contact">
                      Contact
                    </Link>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <Link legacyBehavior href="blog">
                      Blog
                    </Link>
                    <ul>
                      <li>
                        <Link legacyBehavior href="blog">
                          Blog 1
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="blog-2">
                          Blog 2
                        </Link>
                      </li>
                      <li>
                        <Link legacyBehavior href="publication">
                          Publication
                        </Link>
                      </li>
                    </ul>
                  </li> */}
                </ul>
              )}
            </nav>
          </div>
          {/* menu end */}
          {/* mode switcher place */}
          <div className="trm-mode-switcher-place">
            <div className="trm-mode-switcher">
              {/* <i className="far fa-sun" /> */}
              <input
                onChange={(e) => {
                  localStorage.setItem("trueman", e.target.checked);
                  modeChange(e.target.checked);
                }}
                checked={mode}
                className="tgl tgl-light"
                id="trm-swich"
                type="checkbox"
              />
              <label className="trm-swich" htmlFor="trm-swich" />
              <i className="far fa-moon" />
            </div>
          </div>

          {/* mode switcher place end */}
          {/* action button */}
          <a href="https://www.canva.com/design/DAGKQgmBL-4/0SjjjoNT2RIet2tCaUBlcw/view?utm_content=DAGKQgmBL-4&utm_campaign=designshare&utm_medium=link&utm_source=editor" className="trm-btn trm-btn-sm" target="_blank">
            View CV 
          </a>
          {/* action button end */}
        </div>
        <div
          className={`trm-menu-btn ${toggle ? "trm-active" : ""}`}
          onClick={() => setToggle(!toggle)}
        >
          <span />
        </div>
      </div>
    </div>
  );
};
export default TopBar;

const OnePageMenu = () => {
  return (
    <ul>
      <li>
        <a
          href="#home-triger"
          data-scroll-to="#home-triger"
          data-scroll-offset={-10}
        >
          Home
        </a>
      </li>
      <li id="about-link">
        <a
          href="#about-triger"
          data-scroll-to="#about-triger"
          data-scroll-offset={-130}
        >
          About
        </a>
      </li>
      <li id="portfolio-link">
        <a
          href="#portfolio-triger"
          data-scroll-to="#portfolio-triger"
          data-scroll-offset={-130}
        >
          Portfolio
        </a>
      </li>
      <li id="resume-link">
        <a
          href="#resume-triger"
          data-scroll-to="#resume-triger"
          data-scroll-offset={-130}
        >
          Resume
        </a>
      </li>
      <li id="contact-link">
        <a
          href="#contact-triger"
          data-scroll-to="#contact-triger"
          data-scroll-offset={-130}
        >
          Contact
        </a>
      </li>
    </ul>
  );
};
