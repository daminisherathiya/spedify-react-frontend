import React from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";

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

import Loader from "./components/loader";
import Header from "./components/header";
import Footer from "./components/footer";

import ProtectedRoute from "./ProtectedRoute";

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

import { useUserContext } from "./context/UserContext";
// import PostJob from "./components/jobs/post-job";
import userSession from "./hooks/useUserSession";
import { createBrowserHistory } from 'history'
if (
  !window.location.pathname.includes("admin")

) {
  require('./assets/js/bootstrap.min.js');
  require("./assets/css/style.css");
}
const history = createBrowserHistory();
const AppContainer = function (props) {
  const { dispatch } = useUserContext();
  userSession(dispatch, history);
  if (props) {
    return (
      <Router basename={`${config.publicPath}`} history={history}>
        <Loader />
        <Header {...props} />
        <Switch>
          <ProtectedRoute exact path="/messages"><Messges /></ProtectedRoute>
          <ProtectedRoute exact path="/post-project"><PostProject /></ProtectedRoute>
          <Route exact path="/" component={Home} />
          <Route exact path="/manage-projects" component={Manageprojects} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/profile-settings" component={Settings} />
          <Route exact path="/search/work" component={Project} />
          <Route exact path="/project-details" component={ProjectDetails} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/blank-page" component={BlankPage} />
          <Route exact path="/404-page" component={Page404} />
          <Route exact path="/search/providers" component={Providers} />
          <Route exact path="/blog-list" component={BlogList} />
          <Route exact path="/userDetails/:userId" component={UserDetails} />
        </Switch>
        <Route render={(props) => <Footer {...props} />} />
      </Router>
    );
  };
  return null;
};

export default AppContainer;
