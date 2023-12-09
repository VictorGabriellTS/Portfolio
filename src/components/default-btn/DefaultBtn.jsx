import "./DefaultBtn.scss";

function DefaultBtn({
    type = "button",
    label = "btn",
    className = "default-btn",
    onClick,
}) {
    return (
        <button type={type} className={className} onClick={onClick}>
            {label}
        </button>
    );
}

export default DefaultBtn;
