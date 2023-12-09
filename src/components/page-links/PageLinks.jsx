import ContactIcon from "../icons-components/contact-icon/ContactIcon";
import FolderIcon from "../icons-components/folder-icon/FolderIcon";
import HomeIcon from "../icons-components/home-icon/HomeIcon";
import StarIcon from "../icons-components/star-icon/StarIcon";
import UserIcon from "../icons-components/user-icon/UserIcon";

function PageLinks() {
    return (
        <>
            <div className="page-links">
                <ul>
                    <li>
                        <a href="#">
                            <div className="content">
                                <HomeIcon /> Home
                            </div>
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="content">
                                <UserIcon />
                                About Me
                            </div>
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="content">
                                <StarIcon /> Skills
                            </div>
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="content">
                                <FolderIcon /> Projects
                            </div>
                            <span></span>
                        </a>
                    </li>
                    <li>
                        <a href="#">
                            <div className="content">
                                <ContactIcon /> Contact
                            </div>
                            <span></span>
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
}

export default PageLinks;
