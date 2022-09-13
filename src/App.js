import "./App.css";
import relife from "./img/relife.jpg";
import punpun from "./img/oyasumi-punpun.jpg";
import nhk from "./img/welcome-to-nhk.jpg";
import koeNoKatachi from "./img/koe-no-katachi.jpg";
import shigatsu from "./img/shigatsu-wa-kimi-no-uso.jpg";
import manga from "./img/manga.jpg";
import HeroImage from "./components/HeroImage";
import Content from "./components/Content";

function App() {
  return (
    <>
      <header className="d-flex justify-content-between align-items-center fixed-top">
        <div
          className="logo 
      text-light fs-2 fw-bold ms-3"
        >
          D<span className="text-secondary">P</span>
        </div>
        <div className="text-light fs-4 me-4">Manga List</div>
      </header>
      <div
        id="heroDesktop"
        className="container-fuild bg-light d-md-flex justify-content-center align-items-center d-none "
      >
        <HeroImage src={relife} href={"1"} />
        <HeroImage src={punpun} href={"3"} />
        <HeroImage src={nhk} href={"2"} />
        <HeroImage src={koeNoKatachi} href={"4"} />
        <HeroImage src={shigatsu} href={"5"} />
      </div>

      <div id="heroMobile">
        <div
          className="main-carousel "
          data-flickity='{"cellAlign": "left", "contain": true, "autoPlay":" true}'
        >
          <div className="carousel-cell">
            <img src={punpun} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={nhk} alt="" />
          </div>
          <div className="carousel-cell">
            <img src={shigatsu} alt="" />
          </div>
          ...
        </div>
      </div>

      <div id="about" className="container-fluid bg-primary">
        <div className="container py-5">
          <div className="row">
            <div className="col-md-6 col-12">
              <h2 className="text-light fw-bolder text-center pt-3">
                What is <span className="text-secondary">Manga?</span>{" "}
              </h2>

              <p className="text-light text-center pt-3">
                Manga is an umbrella term for a wide variety of comic books and
                graphic novels originally produced and published in Japan.
                Unlike American comic books, which are usually printed in full
                color, Japanese manga are almost always published in black and
                white. Full-color prints are often only used for special
                releases.
              </p>
            </div>
            <div className="col-md-6 col-12">
              <img src={manga} alt="" className="about-img" />
            </div>
          </div>
        </div>
      </div>

      <div className="content ">
        <Content
          id={"1"}
          title={"ReLIFE"}
          author={"Yayoiso"}
          src={relife}
          paragraph={`Arata Kaizaki is 27 years-old and unemployed. He quit his prior
              job after working for the company for 3 months. Arata Kaizaki
              decides to take part in a research program "ReLIFE." He takes
              medication that makes him look 10 years younger and he is to
              attend high school for a year. There, he falls in love with female
              high school student Chizuru Hishiro.`}
        />
        <Content
          id={"2"}
          title={"NHK ni Youkoso!"}
          author={"Inio Tatsuhiko Takimoto"}
          src={nhk}
          paragraph={`Twenty-two-year-old college dropout Tatsuhiro Satou has been a hikikomori 
            for almost four years now. In his isolation, he has come to believe in many obscure 
            conspiracy theories, but there is one in particular which he holds unshakable faith 
            in: the theory that the evil conspirator behind his shut-in NEET (Not in Employment, 
            Education or Training) status is the Nihon Hikikomori Kyokai (NHK)—an evil and secret
            organization dedicated to fostering the spread of hikikomori culture.`}
          orderReverse={true}
        />
        <Content
          id={"3"}
          title={"Oyasumi Punpun"}
          author={"Inio Asano"}
          src={punpun}
          paragraph={`Oyasumi Punpun (おやすみプンプン lit. Goodnight Punpun) is a
          seinen manga about the life of a young boy named Punpun,
          stylized as a bird doodle, who can summon God by chanting,
          "Dear God, dear God, tinkle tinkle hoy!" The story follows him
          from elementary school through his twenties as he struggles
          through life, relationships, and depression. Widely known for
          its experimental art style and unrelenting depiction of
          emotional instability, this series by Inio Asano spans 147
          chapters originally published in Japan between March 2007 and
          November 2013. It has been licensed in English, French,
          Italian, German, Russian, Chinese, Spanish, and Portuguese.`}
        />
        <Content
          id={"4"}
          orderReverse={true}
          title={"Koe no Katachi"}
          author={"Reiko Yoshida"}
          src={koeNoKatachi}
          paragraph={`The movie chronicles the emotional, social, and spiritual attributes that are manifested by a group of adolescent schoolmates in elementary school, especially as to how they relate to a hearing impaired girl that is introduced into their group. Each teen reacts to the newcomer in a different way, including many varied and negative reactions and outcomes. Shoya Ishida, a former delinquent bullies the deaf girl, Shoko Nishimiya, with his friends joining in. Finally, when Shoko is forced to transfer to another school after enduring a period of the most cruel bullying, all of Ishida's friends, as well as the teachers, blame him for bullying her into leaving. He is made the scapegoat, despite the varying levels of culpability that others have had in torturing her...`}
        />
        <Content
          id={"5"}
          title={"Shigatsu wa Kimi no Uso"}
          author={"Naoshi Arakawa"}
          src={shigatsu}
          paragraph={`Kousei Arima is a child prodigy known as the "Human Metronome" for playing the piano with precision and perfection. Guided by a strict mother and rigorous training, Kousei dominates every competition he enters, earning the admiration of his musical peers and praise from audiences. When his mother suddenly passes away, the subsequent trauma makes him unable to hear the sound of a piano, and he never takes the stage thereafter.`}
        />
      </div>
      <div id="comment" className="bg-primary container-fluid">
        <div className="container text-center py-5">
          <h3 className=" fw-bold   text-secondary">Comments / Suggestions</h3>
          <h6 className="text-light">Thank you for your feedback!</h6>
          <div className="row">
            <div className="col-md-3 "></div>
            <form action="" className="pt-4 col-md-6 col-12">
              <div class="form-floating mb-2 ">
                <input
                  type="text"
                  className="form-control"
                  id="floatingInput"
                  placeholder="Full Name"
                />
                <label for="floatingInput">Full Name</label>
              </div>
              <div className="form-floating mb-2">
                <input
                  type="email"
                  className="form-control"
                  id="floatingPassword"
                  placeholder="Email"
                />
                <label for="floatingPassword">Email</label>
              </div>
              <div className="form-floating">
                <textarea
                  className="form-control"
                  placeholder="Leave a comment here"
                  id="floatingTextarea"
                  rows="100"
                ></textarea>
                <label for="floatingTextarea">Comments</label>
              </div>
              <button className="btn btn-light mt-3 fw-bold">Submit</button>
            </form>
            <div className="col-md-3 "></div>
          </div>
        </div>
      </div>
      <div
        id="footer"
        className=" bg-light fs-3 py-1 d-flex justify-content-center text-primary"
      >
        <i class="bi bi-facebook"></i>
        <i class="bi bi-twitter"></i>
        <i class="bi bi-tiktok"></i>
        <i class="bi bi-instagram"></i>
      </div>
    </>
  );
}

export default App;
