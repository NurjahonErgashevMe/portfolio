"use client";
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
    banner_image_function("/img/banner2.jpg");
    page_info_function("Мои скилы<br>и моя история", "resume", "resume");
  }, []);
  return (
    <TrueManLayout noSidebar>
      {/* skills */}
      <div className="row mtMinus40">
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Узбекский</h6>
                <span className="trm-label trm-label-light">Native</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p100" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Русский</h6>
                <span className="trm-label trm-label-light">90%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p90" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Английский</h6>
                <span className="trm-label trm-label-light">20%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p20" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* skills end */}
      {/* skills */}
      {/* <div className="row">
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Html</h6>
                <span className="trm-label trm-label-light">100%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p100" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">CSS</h6>
                <span className="trm-label trm-label-light">100%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p100" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">SCSS</h6>
                <span className="trm-label trm-label-light">80%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p80" />
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6">
          <div
            className="trm-skill-card trm-scroll-animation trm-active-el"
            data-scroll
            data-scroll-offset={40}
          >
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">jQuery</h6>
                <span className="trm-label trm-label-light">90%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p90" />
              </div>
            </div>
            <div className="trm-mb-40">
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Vue js</h6>
                <span className="trm-label trm-label-light">70%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p70" />
              </div>
            </div>
            <div>
              <div className="trm-skill-header">
                <h6 className="trm-mb-15">Js</h6>
                <span className="trm-label trm-label-light">60%</span>
              </div>
              <div className="trm-progressbar-frame">
                <div className="trm-progressbar p60" />
              </div>
            </div>
          </div>
        </div>
      </div> */}
      {/* skills end */}
      {/* knowledge */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Знания <span data-number={1} />
          </h5>
        </div>
        <div className="col-lg-12">
          <div className="trm-card">
            <div className="row">
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>SCSS</li>
                  <li>Tailwind CSS</li>
                  <li>Style X</li>
                  <li>BEM</li>
                  <li>CSS frameworks (MUI , Antd , Mantine, Shadcn ...)</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>JavaScript</li>
                  <li>TypeScript</li>
                  <li>React.js</li>
                  <li>Next.js</li>
                  <li>Tanstack Query</li>
                  <li>Tanstack Router</li>
                  <li>Framer Motion</li>
                  <li>Jest</li>
                  <li>Vitest</li>
                </ul>
              </div>
              <div className="col-lg-4">
                <ul className="trm-list">
                  <li>Redux(Toolkit)</li>
                  <li>Zustand</li>
                  <li>Webpack</li>
                  <li>React hook form</li>
                  <li>Formik</li>
                  <li>D3js</li>
                  <li>Charts (Apexchart,chart.js , recharts)</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* history */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Опыт <span data-number={2} />
          </h5>
        </div>
        <div className="col-lg-6">
          {/* timeline */}
          <div className="trm-timeline">
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">
                      Frontend developer at <br />
                      <a
                        href="https://www.albison.uz/"
                        target="_blank"
                        role="link"
                        title="Albison IT Company"
                        className="trm-accent-color"
                      >
                        Albison Group
                      </a>
                    </h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>май 2022 - март 2023</i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">
                  Tech Stack: <br /> <br />
                  HTML, CSS, Tailwind CSS, TypeScript, JavaScript, React.js,
                  Next.js, React Query, Redux, Redux Toolkit, Zustand
                </div>
                {/* <a
                  data-fancybox
                  href="files/diploma.jpg"
                  className="trm-label trm-label-color"
                >
                  Diploma <i className="fas fa-arrow-right" />
                </a> */}
              </div>
            </div>
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">
                      Frontend developer at <br></br>
                      <a
                        href="https://sayt-xizmati.uz/"
                        target="_blank"
                        role="link"
                        title="Soft System IT Company"
                        className="trm-accent-color"
                      >
                        Soft System
                      </a>
                    </h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>Март 2023 — сентябрь 2023</i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">
                  Tech Stack: <br /> <br />
                  HTML, CSS, SCSS, JavaScript, TypeScript, React.js, Next.js,
                  React Query , Axios , Mantine , Redux , Zustand, RTK Query
                </div>
                {/* <a
                  data-fancybox
                  href="files/diploma.jpg"
                  className="trm-label trm-label-color"
                >
                  Diploma <i className="fas fa-arrow-right" />
                </a> */}
              </div>
            </div>
          </div>
          {/* timeline end */}
        </div>
        <div className="col-lg-6">
          <div className="trm-timeline">
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">
                      Frontend developer at <br />
                      <a
                        href="https://radiants.uz/"
                        target="_blank"
                        title="Radiants it Company"
                        role="link"
                        className="trm-accent-color"
                      >
                        Radiants
                      </a>
                    </h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>Январь 2024 — март 2024</i>
                    </div>
                  </div>
                </div>
                <div>
                  Dolorum provident rerum aut hic quasi placeat iure tempora
                  laudantium ipsa ad debitis unde.
                </div>
              </div>
            </div>
            <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">
                      Frontend developer at <br />
                      <a
                        href="https://space-dog.dev"
                        target="_blank"
                        role="link"
                        title="Space Dog IT Company"
                        className="trm-accent-color"
                      >
                        Space Dog
                      </a>
                    </h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>Сентябрь 2023 — настоящее время</i>
                    </div>
                  </div>
                </div>
                <div>
                  Skills: <br /> <br />
                  HTML, SCSS, JavaScript , TypeScript React.js, Redux Toolkit,
                  Next.js, Three.js, VITE, MUI, Webpack. Enhancing projects, 3D
                  animation, optimization.
                </div>
              </div>
            </div>
            {/* <div
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">UI/UX Designer, Web Developer</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>jan 2018 - may 2020</i>
                    </div>
                  </div>
                </div>
                <div>Dolorum provident rerum aut hic quasi placeat iure</div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      {/* history end */}
    </TrueManLayout>
  );
};
export default Index;
