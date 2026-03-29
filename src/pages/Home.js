import logo from "../assets/logo.svg";
import { Link } from "react-router-dom"
import '../App.css';

export default function Home() {
    const homeStyle = {
        backgroundColor: "#1e1d54"
    };

    return (
        <div className="Home" style={homeStyle} >
            <Link to="/profile">
                <img src={logo} alt="logo" />
            </Link>
        </div>
    );
}