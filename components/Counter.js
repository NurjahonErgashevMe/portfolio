import { CARRIER_START_YEAR } from "@/constants";
import { PROJECTS } from "@/constants/project";

const Counter = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className="row">
      <div className="col-lg-6">
        {/* counter */}
        <div
          className="trm-counter-up trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-counter-number">
            <span className="trm-counter">{PROJECTS.length}</span>
            <span className="trm-counter-symbol">+</span>
          </div>
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          <div className="trm-label">Закончанных проектов</div>
        </div>
        {/* counter end */}
      </div>
      <div className="col-lg-6">
        <div
          className="trm-counter-up trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-counter-number">
            <span className="trm-counter">
              {currentYear - CARRIER_START_YEAR}
              <span className="trm-counter-symbol">+</span>
            </span>
          </div>
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          <div className="trm-label">Года опыта</div>
        </div>
      </div>
      {/* <div className="col-lg-4">
        <div
          className="trm-counter-up trm-scroll-animation"
          data-scroll=""
          data-scroll-offset={40}
        >
          <div className="trm-counter-number">
            <span className="trm-counter">14</span>
            <span className="trm-counter-symbol">+</span>
          </div>
          <div className="trm-divider trm-mb-20 trm-mt-20" />
          <div className="trm-label">Honors and Awards</div>
        </div>
      </div> */}
    </div>
  );
};
export default Counter;
