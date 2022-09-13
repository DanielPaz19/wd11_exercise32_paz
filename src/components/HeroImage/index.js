import "./style.css";

function HeroImage({ src, href }) {
  return (
    <a href={`#${href}`}>
      <img src={src} alt="" className="hero-img " />;
    </a>
  );
}

export default HeroImage;
