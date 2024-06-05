import "./MainPage.scss";
import mainPhoto from '../../images/main_photo.PNG';
import AboutMe from "../aboutMe/AboutMe";

const MainPage = () => {
    return(
       <section className="mainPage">
            <div className="container">
                <div className="row">
                    <div className="mainPage__title col-md-7">
                        <h1 className="mainPage__title-upper">Hello, world!<br></br>Я, Евгений</h1>
                        <h2 className="mainPaage__title-low">Начинающий  <br/> <span className="mainPage_text-span">{'< frontend разработчик />'} </span></h2>
                    </div>
                    <div className="mainPage__photo fade-in col-md-5">
                        <img src={mainPhoto} alt=""></img>
                    </div>
                </div>
                <div className="row">
                    <AboutMe/>
                </div>
            </div>
       </section>
    );
}

export default MainPage;