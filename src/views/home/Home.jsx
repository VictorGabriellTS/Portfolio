import "./Home.scss";
import AboutMe from "./about-me/AboutMe";
import Cv from "./cv/Cv";

function Home() {
    return (
        <>
            <div className="home">
                <Cv />
                <AboutMe />
            </div>
        </>
    );
}

export default Home;