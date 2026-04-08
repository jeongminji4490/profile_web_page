import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import MenuButton from "./MenuButton";
import theme from "../Theme";
import { FaHome, FaBars, FaAngleDoubleRight } from "react-icons/fa";
import LaunguageSwitcher from "./LanguageSwitcher";

export default function Layout() {
    const [isOpen, setIsOpen] = useState(true);

    const toggleDrawer = () => setIsOpen(!isOpen);

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
                    flex: 1,
                    height: '100vh',
                    backgroundColor: theme.indigoBlue,
                    color: theme.white,
                    padding: '40px',
                    overflowY: 'auto',
                    boxSizing: 'border-box',
                    overscrollBehaviorY: 'contain',
                    transition: 'all 0.3s ease'
                }}>
                <Outlet />
            </div>

            <nav style={{
                width: isOpen ? '250px' : '0px',
                opacity: isOpen ? 1 : 0,
                visibility: isOpen ? 'visible' : 'hidden',
                height: '100vh',
                display: 'flex',
                flexDirection: 'column',
                gap: '15px',
                padding: isOpen ? '60px 0px 0px 0px' : '0px',
                backgroundColor: theme.gray,
                position: 'relative',
                boxSizing: 'border-box',
                transition: 'all 0.3s ease',
                overflow: 'hidden'
            }}>
                <button
                    onClick={toggleDrawer}
                    style={{
                        position: 'absolute',
                        top: '20px',
                        left: '20px',
                        background: 'none',
                        border: 'none',
                        color: theme.white,
                        fontSize: '30px',
                        cursor: 'pointer'
                    }}
                >
                    <FaAngleDoubleRight />
                </button>

                <MenuButton to="/profile">Profile</MenuButton>
                <MenuButton to="/career" text="Career">Career</MenuButton>
                <MenuButton to="/project" text="Toy Project">Project</MenuButton>
                <MenuButton to="/study" text="Study">Study</MenuButton>

                <LaunguageSwitcher />

                <div style={{
                    position: 'absolute',
                    bottom: '10px',
                    left: '0',
                    right: '20px',
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    gap: '15px',
                    pointerEvents: 'none',
                    whiteSpace: 'nowrap'
                }}>
                    <span style={{
                        color: theme.black,
                        fontSize: '11px',
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

            {!isOpen && (
                <button
                    onClick={toggleDrawer}
                    style={{
                        position: 'fixed',
                        top: '20px',
                        right: '20px',
                        zIndex: 100,
                        backgroundColor: theme.gray,
                        border: 'none',
                        borderRadius: '5px',
                        padding: '10px',
                        cursor: 'pointer',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <FaBars size={24} color={theme.white} />
                </button>
            )}
        </div>
    );
}