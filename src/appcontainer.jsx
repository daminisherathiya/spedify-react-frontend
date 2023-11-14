import React from "react";

import { Route, Routes, } from "react-router-dom";

import Manageprojects from "./pages/manageprojects";
import Favourites from "./pages/favourites";
import Review from "./pages/review";
import Settings from "./pages/settings";
import Project from "./pages/projects/project";
import ProjectDetails from "./pages/projects/project_details";
import PostProject from "./pages/postproject";
import Aboutus from "./pages/about";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import Faq from "./pages/faq";
import Messges from "./pages/messages";
import BlogList from "./pages/blog";
import Providers from './pages/providers/Providers';
import UserDetails from './pages/profile/UserDetails';
import Home from "./pages/home/Home";
import BlankPage from "./pages/blank_page";
import Page404 from "./pages/page_404";



import ProtectedRoute from "./ProtectedRoute";
import AuthRoute from "./AuthRoute";

// CSS Files
// Bootstrap CSS
import './assets/css/bootstrap.min.css';
// Custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Font Awesome
// import "./assets/plugins/fontawesome/css/fontawesome.min.css";
// import "./assets/plugins/fontawesome/css/all.min.css";
// Select2 CSS
import './assets/plugins/select2/css/select2.min.css';
//Fancybox JS
import './assets/plugins/fancybox/jquery.fancybox.min.css';
import './assets/plugins/datatables/datatables.min.css';
import './assets/plugins/feather/feather.css';
import './assets/js/profile-settings.js';
import './assets/js/slick.js';
//animate css
import './assets/css/animate.css';
import './assets/css/animate.min.css';
//owl css
import './assets/css/owl.theme.default.css';
import './assets/css/owl.theme.default.min.css';
import 'react-toastify/dist/ReactToastify.css';

// import PostJob from "./components/jobs/post-job";
import { createBrowserHistory } from 'history'
import useUserSession from "./hooks/useUserSession";
if (
  !window.location.pathname.includes("admin")

) {
  require('./assets/js/bootstrap.min.js');
  require("./assets/css/style.css");
}
const history = createBrowserHistory();
const AppContainer = function (props) {
  useUserSession();
  const loader = document.getElementById("global-loader");
  if (loader?.style?.display === 'none')
    return (
      <Routes>
        <Route exact path="/login" element={<AuthRoute><Login /></AuthRoute>} />
        <Route exact path="/register" element={<AuthRoute><Register /></AuthRoute>} />

        <Route exact path="/messages" element={<ProtectedRoute><Messges /></ProtectedRoute>} />
        <Route exact path="/post-project" element={<ProtectedRoute><PostProject /></ProtectedRoute>} />

        <Route exact path="/" Component={Home} />
        <Route exact path="/manage-projects" Component={Manageprojects} />
        <Route exact path="/favourites" Component={Favourites} />
        <Route exact path="/review" Component={Review} />
        <Route exact path="/profile-settings" Component={Settings} />
        <Route exact path="/search/work" Component={Project} />
        <Route exact path="/project-details" Component={ProjectDetails} />
        <Route exact path="/about" Component={Aboutus} />
        <Route exact path="/faq" Component={Faq} />
        <Route exact path="/blank-page" Component={BlankPage} />
        <Route exact path="/404-page" Component={Page404} />
        <Route exact path="/search/providers" Component={Providers} />
        <Route exact path="/blog-list" Component={BlogList} />
        <Route exact path="/userDetails/:userId" Component={UserDetails} />
      </Routes>
    );
};

export default AppContainer;
