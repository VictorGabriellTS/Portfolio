import DefaultBtn from "../../default-btn/DefaultBtn";
import "./HmBtn.scss"

function HmBtn() {
    function openLinkedIn() {
        window.open("https://www.linkedin.com/in/victor-tavares-a46078279/", "_blank")
    }

    return (
        <>
            <div className="hm-btn-container">
                <DefaultBtn label="Hire Me" className="default-btn hm-btn" onClick={openLinkedIn}/>
            </div>
        </>
    );
}

export default HmBtn;
