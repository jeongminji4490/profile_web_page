import { Link } from "react-router-dom";

function MenuButton({
    children,
    bgColor = '#DBDBDB',
    textColor = "#000000",
    text = "Profile",
    to = "/profile"
}) {
    const buttonStyle = {
        width: '263px',
        height: '83px',
        fontFamily: "'Anton SC', sans-serif",
        fontSize: '40px',
        fontWeight: '500',
        border: 'none',
        cursor: 'pointer',
        backgroundColor: bgColor,
        color: textColor,
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center'
    };

    return (
        <Link to={to} style={buttonStyle}>
            {text || children}
        </Link>
    );
}

export default MenuButton;