"use client";
import { useContext, useEffect, useState } from "react";
import SpringModal from "@/components/modal/Modal";
import { PROJECTS } from "@/constants/project";
import { context } from "@/context/context";
import TrueManLayout from "@/layout/TrueManLayout";
const Index = () => {
  const {
    banner_image_function,
    page_info_function,
    banner_type_function,
  } = useContext(context);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    banner_type_function();
    banner_image_function("/img/banner2.jpg");
    page_info_function("Мои проекты<br>", "portfolio", "portfolio", false);
  }, []);

  return (
    <TrueManLayout noSidebar>
      <div className="row mtMinus40">
        {/* portfolio */}
        {PROJECTS.map((item) => (
          <>
            <div
              className={`col-lg-${item.col}`}
              key={item.id}
              onClick={() => setModalOpen(true)}
            >
              {/* portfolio item */}
              <div
                // href={item.img}
                className="trm-portfolio-item trm-scroll-animation pointer"
                data-scroll
                data-scroll-offset={40}
              >
                <div className="trm-cover-frame">
                  <img className="trm-cover" src={item.img} alt="item" />
                </div>
                <div className="trm-item-description">
                  <h6>{item.title}</h6>
                  <div style={{ display: "flex", gap: 10 }}>
                    <a
                      role="link"
                      href={item.img}
                      className="trm-zoom-icon pointer"
                      data-fancybox="portfolio"
                      title="show image"
                    >
                      <i className="fas fa-search-plus" />
                    </a>
                    <a
                      role="link"
                      target="_blank"
                      href={item.link}
                      className="trm-zoom-icon pointer"
                      title="View project"
                    >
                      <i class="fas fa-arrow-right"></i>
                    </a>
                  </div>
                </div>
              </div>
              {/* portfolio item end */}
            </div>
          </>
        ))}
      </div>
    </TrueManLayout>
  );
};
export default Index;
