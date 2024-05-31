import "./MainPage.scss";
import mainPhoto from '../../images/main_photo.PNG';

const MainPage = () => {
    return(
       <section className="mainPage">
            <div className="container">
                <div className="row">
                    <div className="mainPage__title col-md-7">
                        <h1 className="mainPage__title-upper">Hello, world!<br></br>I'm Evgenij</h1>
                        <h2 className="mainPaage__title-low">A beginner <br/> <span className="mainPage_text-span">{'< frontend developer />'} </span></h2>
                    </div>
                    <div className="mainPage__photo fade-in col-md-5">
                        <img src={mainPhoto} alt=""></img>
                    </div>
                </div>
                <div className=""></div>
            </div>
       </section>
    );
}

export default MainPage;