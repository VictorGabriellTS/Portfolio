import Logo from "../logo/Logo";
import PageLinks from "../page-links/PageLinks";
import "./Header.scss";
import HmBtn from "./hm-btn/HmBtn";

function Header() {
    return (
        <>
            <header className="header">
                <Logo />
                <PageLinks />
                <HmBtn />
            </header>
        </>
    );
}

export default Header;