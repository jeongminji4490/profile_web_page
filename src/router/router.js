import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";
import Career from "../pages/Career";
import Project from "../pages/Project";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>
                    <Route path="/" element={<Profile />} />
                    <Route path="career" element={<Career />} />
                    <Route path="project" element={<Project />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}