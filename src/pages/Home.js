import logo from "../assets/logo.svg";
import { Link } from "react-router-dom"
import '../App.css';

export default function Home() {
    return (
        <div className="Home">
            <Link to="/profile">
                <img src={logo} alt="logo" />
            </Link>
        </div>
    );
}