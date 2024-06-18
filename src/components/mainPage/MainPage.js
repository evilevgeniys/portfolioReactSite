import "./MainPage.scss";
import mainPhoto from '../../images/main_photo.PNG';
import {AboutMeText} from "../../utils/AboutMeText";
import Skills from "../Skills/Skills";

const Main = () => {
    return (
        <main className="main container">
          <div className="row">
            <section className="greeting col-md-7">
              <h1 className="greeting__upper-text">Привет, я Евгений.</h1>
              <h2 className="greeting__lower-text">
                Начинающий <br />
                <span className="highlighted-text">
                  {`< frontend-разработчик / >`}
                </span>
              </h2>
            </section>
            <section className="myphoto fade-in col-md-5">
              <img className="myphoto__img" src={mainPhoto} alt="mainPhoto"></img>
            </section>
          </div>
          <div className="row">
            <section className="aboutme col-md-7">
              {/* Разделение текста на параграфы для форматирования */}
              <h3 className="aboutme__heading">
                const <span className="highlighted-text-shadow">aboutMeText</span> =
              </h3>
              <div className="aboutme__text-wrapper">
                {AboutMeText.split("\n").map((paragraph, index) => (
                  <p key={index} className="aboutme__text">
                    {paragraph}
                  </p>
                ))}
              </div>
            </section>
            <section className="informers col-md-5">
              <Skills />
            </section>
          </div>
        </main>
      );
    }
    
    export default Main;
    