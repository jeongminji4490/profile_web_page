import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Layout from "../components/Layout";
import Profile from "../pages/Profile";
import Career from "../pages/Career";
import Project from "../pages/Project";
// import Study from "../pages/Study";

export default function Router() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />

                <Route element={<Layout />}>
                    <Route path="profile" element={<Profile />} />
                    <Route path="career" element={<Career />} />
                    <Route path="project" element={<Project />} />
                    {/* <Route path="study" element={<Study />} /> */}
                </Route>
            </Routes>
        </BrowserRouter>
    );
}