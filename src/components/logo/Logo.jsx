import "./Logo.scss";

function Logo() {
    return (
        <>
            <div className="logo">
                <div className="cube">
                    <span className="face face--front"></span>
                    <span className="face face--right"></span>
                    <span className="face face--back"></span>
                    <span className="face face--left"></span>
                    <span className="face face--top"></span>
                    <span className="face face--bottom"></span>
                </div>
            </div>
        </>
    );
}

export default Logo;
