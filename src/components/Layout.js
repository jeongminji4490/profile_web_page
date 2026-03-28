import { Outlet, Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import theme from "../Theme";
import { FaHome } from "react-icons/fa";

export default function Layout() {
    return (
        <div style={{
            display: 'flex',
            height: '100vh',
            width: '100vw',
            overflow: 'hidden'
        }}>
            <div style={{
                width: '75.00vw',
                height: '100vh',
                backgroundColor: theme.black,
                color: theme.white,
                padding: '40px',
                overflowY: 'auto',
                boxSizing: 'border-box'
            }}>
                <Outlet />
            </div>

            <nav style={{
                flex: 1,
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                paddingRight: '20px',
                backgroundColor: theme.white,
                position: 'relative',
                boxSizing: 'border-box'
            }}>
                <MenuButton to="/profile">Profile</MenuButton>
                <MenuButton to="/career" bgColor={theme.black} text="Career" textColor={theme.white}  >Career</MenuButton>
                <MenuButton to="/project" text="Project" >Project</MenuButton>
                <MenuButton to="/study" bgColor={theme.black} text="Study" textColor={theme.gray} >Study</MenuButton>

                <Link to="/" style={{
                    position: 'absolute',
                    bottom: '10px',
                    right: '30px',
                    color: theme.black,
                    fontSize: '40px',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                }}>
                    <FaHome />
                </Link>
            </nav>
        </div>
    );
}