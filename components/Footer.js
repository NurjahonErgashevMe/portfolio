import { TELEGRAM_URL } from "@/constants";

const Footer = () => {
  return (
    <footer
      className="trm-scroll-animation"
      data-scroll=""
      data-scroll-offset={50}
    >
      <div className="trm-label">
        © {new Date().getFullYear()}
      </div>
      <div className="trm-label">
        Developed by:{" "}
        <a
          href={TELEGRAM_URL}
          target="_blank"
        >
          Nurjahon 💚
        </a>
      </div>
    </footer>
  );
};
export default Footer;
