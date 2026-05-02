import { NavLink } from "react-router-dom";

function MenuButton({
    children,
    text = "Profile",
    to = "/profile"
}) {
    const getButtonStyle = ({ isActive }) => ({
        width: '263px',
        height: '83px',
        fontFamily: "'BJCree', serif",
        fontSize: '40px',
        fontWeight: '500',
        border: 'none',
        cursor: 'pointer',
        color: isActive ? '#9f9f9f' : '#ffffff',
        textDecoration: 'none',
        display: 'flex',
        alignItems: 'center',
        marginTop: '10px',
        paddingLeft: '25px',
        transition: 'all 0.3s ease'
    });

    return (
        <NavLink to={to} style={getButtonStyle}>
            {text || children}
        </NavLink>
    );
}

export default MenuButton;