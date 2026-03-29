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
            overflow: 'hidden',
        }}>
            <div
                className="scroll-hide"
                style={{
                    width: '80vw',
                    height: '100vh',
                    backgroundColor: theme.black,
                    color: theme.white,
                    padding: '40px',
                    overflowY: 'auto',
                    boxSizing: 'border-box',
                    overscrollBehaviorY: 'contain'
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
                backgroundColor: '#1e1d54',
                position: 'relative',
                boxSizing: 'border-box'
            }}>
                <MenuButton to="/profile">Profile</MenuButton>
                <MenuButton to="/career" text="Career"   >Career</MenuButton>
                <MenuButton to="/project" text="Project" >Project</MenuButton>
                <MenuButton to="/study" text="Study" >Study</MenuButton>

                <div style={{
                    position: 'absolute',
                    bottom: '20px',
                    left: '0',
                    right: '20px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '15px',
                    pointerEvents: 'none'
                }}>
                    <span style={{
                        color: theme.gray,
                        fontSize: '13px',
                        textAlign: 'right',
                        lineHeight: '1.4'
                    }}>
                        © 2026. Minji Jeong.<br />
                        All rights reserved.
                    </span>

                    <Link to="/" style={{
                        color: theme.white,
                        fontSize: '35px',
                        cursor: 'pointer',
                        pointerEvents: 'auto',
                        display: 'flex'
                    }}>
                        <FaHome />
                    </Link>
                </div>
            </nav>
        </div>
    );
}