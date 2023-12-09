import "./Cv.scss";
import Notebook from "../../../assets/images/Notebook.png";
import CV from "../../../../public/favicon.ico"
import SocialMediaLinks from "../../../components/social-media-links/SocialMediaLinks";

function Cv() {
    return (
        <>
            <div className="cv">
                <div className="text-container">
                    <h3>Hi 🖐, i'm</h3>
                    <h1>Victor Gabriel 💜</h1>
                    <h2>
                        And I'm a <span>Frontend Developer</span> 🌟
                    </h2>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur adipisicing
                        elit. Ab atque soluta odit vel voluptatum voluptatibus
                        numquam. Animi ut quas voluptas!
                    </p>
                    <SocialMediaLinks />
                    <a href={CV} download={"VictorGTS-CV"} className="cv-link">Download CV</a>
                </div>
                <div className="img-container">
                    <img src={Notebook} alt="Notebook Design" />
                </div>
            </div>
        </>
    );
}

export default Cv;
