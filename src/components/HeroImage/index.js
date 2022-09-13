import "./style.css";

function HeroImage({ src, href, active }) {
  return (
    <a href={`#${href}`}>
      <img src={src} alt="" className={`hero-img ${active ? "active" : ""}`} />
    </a>
  );
}

HeroImage.defaultProps = {
  active: false,
};

export default HeroImage;
