import "./MainPage.scss";
import mainPhoto from '../../images/main_photo.PNG';
import AboutMe from "../aboutMe/AboutMe";
import Skills from "../Skills/Skills";

const MainPage = () => {
    return(
       <section className="mainPage">
            <div className="container">
                <div className="row">
                    <div className="mainPage__title col-md-7">
                        <h1 className="mainPage__title-upper">Привет, я Евгений!</h1>
                        <h2 className="mainPage__title-low"><span className="mainPage_text-span">{'< frontend разработчик />'} </span></h2>
                    </div>
                    <div className="mainPage__photo fade-in col-md-5">
                        <img src={mainPhoto} alt=""></img>
                    </div>
                </div>
                <div className="aboutMeRow">
                    <div className="row">
                        <div className="aboutMe col-md-7">
                            <AboutMe/>
                        </div>
                        <div className="stacks col-md-5">
                            <Skills/>    
                        </div>       
                    </div> 
                </div>
            </div>
       </section>
    );
}

export default MainPage;