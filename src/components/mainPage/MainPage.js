import { Container } from "react-bootstrap";
import "./MainPage.scss";

const MainPage = () => {
    return(
       <section className="mainPage">
            <Container>
                <div className="mainPage__title col-md-7">
                    <h1 className="mainPage__title-upper">Hello, world! I'm Evgenij</h1>
                    <h2 className="mainPaage__title-low">A beginner <br/> <span className="mainPage_text-span">{'< frontend developer >'} </span></h2>
                </div>
                <div className="mainPage__photo fade-in col-md-5">

                </div>
            </Container>
       </section>
    );
}

export default MainPage;