import { LINKEDIN_URL, TELEGRAM_URL } from "@/constants";
import { typing } from "@/utility/typing";
import { useEffect } from "react";

const SideBar = () => {
  useEffect(() => {
    typing();
  }, []);

  return (
    <div className="col-lg-4">
      {/* main card */}
      <div className="trm-main-card-frame trm-sidebar">
        <div
          className="trm-main-card"
          data-scroll=""
          data-scroll-repeat=""
          data-scroll-sticky=""
          data-scroll-target="#content"
          data-scroll-offset={60}
        >
          {/* card header */}
          <div className="trm-mc-header">
            <div className="trm-avatar-frame trm-mb-20">
              <img className="trm-avatar" src="/img/avatar.jpg" alt="Avatar" />
              <div className="trm-dot" />
            </div>
            <h5 className="trm-name trm-mb-15">Nurjahon Ergashev</h5>
            <div className="trm-label">
              I`m{" "}
              <span className="trm-typed-text">
                {/* Words for rotation: js/main.js line 34 */}
              </span>
            </div>
          </div>
          {/* card header end */}
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          {/* sidebar social */}
          <div className="trm-social">
            <a href={LINKEDIN_URL} target="_blank">
              <i className="fab fa-linkedin-in" />
            </a>
            <a href={TELEGRAM_URL} target="_blank">
              <i className="fab fa-telegram" />
            </a>
          </div>

          {/* sidebar social end */}
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          {/* info */}
          <ul className="trm-table trm-mb-20">
            {/* country */}
            <li>
              <div className="trm-label">Страна:</div>
              <div className="trm-label trm-label-light">Uzbekistan</div>
            </li>
            {/* city */}
            <li>
              <div className="trm-label">Город:</div>
              <div className="trm-label trm-label-light">Tashkent</div>
            </li>
            {/* age */}
            {/* <li>
              <div className="trm-label">Age:</div>
              <div className="trm-label trm-label-light">26</div>
            </li> */}
          </ul>
          {/* info end */}
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          {/* action button */}
          <div className="text-center">
            <a data-fancybox="" href="#trm-order" className="trm-btn">
              СВЯЖИТЕСЬ СО МНОЙ
              <i className="far fa-envelope" />
            </a>
          </div>
          {/* action button end */}
        </div>
      </div>
      {/* main card end */}
    </div>
  );
};
export default SideBar;
