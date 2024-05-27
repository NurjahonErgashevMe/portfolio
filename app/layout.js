import Preloader from "@/components/Preloader";
import TrueManModeCss from "@/layout/TrueManModeCss";
import "@css/plugins/bootstrap.min.css";
import "@css/plugins/font-awesome.min.css";
import "@css/plugins/locomotive-scroll.css";
import "@css/plugins/swiper.min.css";
import "@css/style-light.css";
import "@fancyapps/ui/dist/fancybox/fancybox.css";
import "./globals.css";
import State from "/context/context";
import {
  WEBSITE_DESCRIPTION,
  WEBSITE_TITLE,
  WEBSITE_URL,
} from "@/constants/seo";
import {
  OPEN_GRAP_DESCRIPTION,
  OPEN_GRAP_TITLE,
  WEBSITE_KEYWORDS,
} from "@/constants/seo";
import { AVATAR_URL } from "@/constants/index";
import NextTransitionBar from "next-transition-bar";

export const metadata = {
  title: WEBSITE_TITLE,
  description: WEBSITE_DESCRIPTION,
  keywords: WEBSITE_KEYWORDS,
  openGraph: {
    title: OPEN_GRAP_TITLE,
    description: OPEN_GRAP_DESCRIPTION,
    url: WEBSITE_URL,
    type: "website",
    images: [
      {
        url: AVATAR_URL,
        width: 800,
        height: 600,
        alt: "Profile Picture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: OPEN_GRAP_TITLE,
    description: OPEN_GRAP_DESCRIPTION,
    url: WEBSITE_URL,
  },
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <State>
        <TrueManModeCss />
        <body>
            <div className="trm-app-frame">
              <Preloader />
              <NextTransitionBar color="#ffff00" showSpinner={false} />
              <div id="trm-dynamic-content" className="trm-swup-animation">
                <div
                  id="trm-scroll-container"
                  className="trm-scroll-container"
                  style={{ opacity: 0 }}
                >
                  {children}
                </div>
              </div>
            </div>
        </body>
      </State>
    </html>
  );
}
