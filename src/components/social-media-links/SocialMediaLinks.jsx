import "./SocialMediaLinks.scss";
import GithubIcon from "./social-media-icons/github-icon/GithubIcon";
import LinkedInIcon from "./social-media-icons/linkedin-icon/LinkedIn";
import WhatsAppIcon from "./social-media-icons/whatsapp-icon/WhatsAppIcon";
import InstagramIcon from "./social-media-icons/instagram-icon/InstagramIcon";

function SocialMediaLinks() {
    return (
        <>
            <div className="social-media">
                <ul>
                    <li>
                        <a href="https://github.com/VictorGabriellTS" target="_blank">
                            <GithubIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/victor-tavares-a46078279/" target="_blank">
                            <LinkedInIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://wa.me/5585988813415" target="_blank">
                            <WhatsAppIcon />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/r.victor_r/" target="_blank">
                            <InstagramIcon />
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default SocialMediaLinks;
