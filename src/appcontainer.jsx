import React from "react";
import config from "config";

import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import PostProject from "./components/postproject";

//home

//For Employee
import DeveloperDetails from "./components/foremployers/talent/talentDetails";
import Dashboard from "./components/foremployers/dashboard";
import EditProject from "./components/foremployers/editproject";
import Manageprojects from "./components/foremployers/manageprojects";
import Pendingprojects from "./components/foremployers/pendingprojects";
import OngoingProjects from "./components/foremployers/ongoingprojects";
import CompletedProjects from "./components/foremployers/completedprojects";
import CancelledProjects from "./components/foremployers/cancelledprojects";
import ViewProjectdetails from "./components/foremployers/viewprojectdetails";
import Milestone from "./components/foremployers/milestone";
import Task from "./components/foremployers/task";
import File from "./components/foremployers/file";
import Payment from "./components/foremployers/payment";
import Favourites from "./components/foremployers/favourites";
import Invitations from "./components/foremployers/invitations";
import Membership from "./components/foremployers/membership";
import Review from "./components/foremployers/review";
import DepositFunds from "./components/foremployers/depositfunds";
import Withdrawmoney from "./components/foremployers/withdrawmoney";
import Transactionhistory from "./components/foremployers/transactionhistory";
import Settings from "./pages/settings";
import ChangePassword from "./components/foremployers/changepassword";
import DeleteAccount from "./components/foremployers/deleteaccount";
import VerifyIdentity from "./components/foremployers/verifyidentity";
import Projectproposal from "./components/foremployers/projectproposal";


//For freelancer
import Project from "./components/forfreelancer/projects/project";
import ProjectDetails from "./components/forfreelancer/projects/project_details";
import ViewProposals from "./components/forfreelancer/projectproposal/viewproposal";
import FreelancerDashboard from "./components/forfreelancer/dashboard";
import FreelancerProjectproposal from "./components/forfreelancer/projectproposal";
import FreelacerCompletedProjects from "./components/forfreelancer/completedprojects";
import FreelacerOngoingProjects from "./components/forfreelancer/ongoingprojects";
import FreelacerCancelledProjects from "./components/forfreelancer/cancelledprojects";
import FreelancerViewProjectdetails from "./components/forfreelancer/viewprojectdetails";
import FreelancerMilestone from "./components/forfreelancer/milestone";
import Freelancertask from "./components/forfreelancer/task";
import FreelancerFile from "./components/forfreelancer/file";
import FreelancerPayment from "./components/forfreelancer/payment";
import FreelancerFavourites from "./components/forfreelancer/favourites";
import FreelancerInvitations from "./components/forfreelancer/invitations";
import FreelancerMembership from "./components/forfreelancer/membership";
import FreelancerChangePassword from "./components/forfreelancer/changepassword";
import FreelancerProfile from "./components/forfreelancer/profile";
import FreelancerDeleteAccount from "./components/forfreelancer/deleteaccount";
import FreelancerSettings from "./components/forfreelancer/settings";
import Chats from "./components/forfreelancer/chats";
import FreelancerReview from "./components/forfreelancer/review";
import FreelancerPortfolio from "./components/forfreelancer/portfolio";
import FreelancerWithdrawmoney from "./components/forfreelancer/withdrawmoney";
import FreelancerTransactionhistory from "./components/forfreelancer/transactionhistory";
import FreelancerVerifyIdentity from "./components/forfreelancer/verifyidentity";
import Invoices from "./components/pages/invoices/invoices";
import InvoiceView from "./components/pages/invoices/invoice_view";

//Pages
import Aboutus from "./components/pages/aboutus";
import BlankPage from "./components/pages/blank_page";
import Page404 from "./components/pages/page_404";
// import UserDetails from "./components/pages/user_details";
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";
import ForgotPassword from "./components/pages/forgot_password";

//Blog
import BlogList from "./components/blog/blog_list";
import BlogGrid from "./components/blog/blog_grid";
import BlogDetails from "./components/blog/blog_details";

import PrivacyPolicy from "./components/privacyPages/privacy_policy";
import TermsCondition from "./components/privacyPages/term_condition";
import Home from "./pages/home/Home";
import DeveloperProfile from "./components/forfreelancer/developerprofile"
import CompanyProfile from './components/forfreelancer/companyprofile/index'
import CompanyProject from './components/forfreelancer/companyproject/index'
import Providers from './pages/providers/Providers';
import UserDetails from './pages/providers/UserDetails';

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

import FreelancerDetails from "./components/freelancer-details";
import CompanyDetails from "./components/CompanyDetails";
import OnboardScreenEmployer from "./components/pages/onboardScreen/onboard-screen-employer";
import CompanyGallery from "./components/CompanyDetails/company-gallery";
import CompanyReview from "./components/CompanyDetails/companyreview";
import TalentList from "./components/foremployers/talent/talentList";
import PostJob from "./components/jobs/post_job";
import Faq from "./components/faq/faq";
import Favouritelist from "./components/foremployers/favourites/favouritelist";
import OnboardScreen from "./components/pages/onboardScreen";
import { useHistory } from 'react-router-dom';
import { useUserContext } from "./context/UserContext";
import ProtectedRoute from "./ProtectedRoute";
import Messges from "./pages/messages";
// import PostJob from "./components/jobs/post-job";
import userSession from "./hooks/userSession";
import { getSetuser } from "./helpers";
import { createBrowserHistory } from 'history'
if (
  !window.location.pathname.includes("admin")

) {
  require('./assets/js/bootstrap.min.js');
  require("./assets/css/style.css");
}
const history = createBrowserHistory();
const AppContainer = function (props) {
  userSession();
  const history = useHistory();
  const { state, dispatch } = useUserContext();
  const isLoggedIn = state.isLoggedIn;
  console.log('isLoggedIn', isLoggedIn);
  React.useEffect(() => {
    getSetuser(dispatch);
  }, [])
  if (props) {
    return (
      <Router basename={`${config.publicPath}`} history={history}>
        <Header {...props} />
        <Switch>
          <ProtectedRoute isLoggedIn={isLoggedIn} exact path="/post-project" component={PostProject} />
          <ProtectedRoute isLoggedIn={isLoggedIn} exact path="/messages" component={Messges} />
          <Route exact path="/" component={Home} />
          <Route exact path="/developer-profile" component={DeveloperProfile} />
          <Route exact path="/company-profile" component={CompanyProfile} />
          <Route exact path="/company-project" component={CompanyProject} />
          <Route exact path="/search/providers" component={Providers} />
          <Route exact path="/provider-details/:userId" component={DeveloperDetails} />
          <Route exact path="/search/providers/:query/developer-list" component={TalentList} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route exact path="/edit-project" component={EditProject} />
          <Route exact path="/manage-projects" component={Manageprojects} />
          <Route exact path="/pending-projects" component={Pendingprojects} />
          <Route exact path="/completed-projects" component={CompletedProjects} />
          <Route exact path="/ongoing-projects" component={OngoingProjects} />
          <Route exact path="/cancelled-projects" component={CancelledProjects} />
          <Route exact path="/view-project-detail" component={ViewProjectdetails} />
          <Route exact path="/milestones" component={Milestone} />
          <Route exact path="/tasks" component={Task} />
          <Route exact path="/files" component={File} />
          <Route exact path="/project-payment" component={Payment} />
          <Route exact path="/favourites" component={Favourites} />
          <Route exact path="/favourites-list" component={Favouritelist} />
          <Route exact path="/invited-favourites" component={Invitations} />
          <Route exact path="/membership-plans" component={Membership} />
          <Route exact path="/review" component={Review} />
          <Route exact path="/deposit-funds" component={DepositFunds} />
          <Route exact path="/withdraw-money" component={Withdrawmoney} />
          <Route exact path="/transaction-history" component={Transactionhistory} />
          <Route exact path="/profile-settings" component={Settings} />
          <Route exact path="/change-password" component={ChangePassword} />
          <Route exact path="/delete-account" component={DeleteAccount} />
          <Route exact path="/verify-identity" component={VerifyIdentity} />
          <Route exact path="/project-proposals" component={Projectproposal} />
          <Route exact path="/company-details" component={CompanyDetails} />
          <Route exact path="/company-gallery" component={CompanyGallery} />
          <Route exact path="/company-review" component={CompanyReview} />
          <Route exact path="/profileDetails/:userId" component={UserDetails} />
          <Route exact path="/search/work" component={Project} />
          <Route exact path="/project-details" component={ProjectDetails} />
          <Route exact path="/freelancer-dashboard" component={FreelancerDashboard} />
          <Route exact path="/freelancer-project-proposals" component={FreelancerProjectproposal} />
          <Route exact path="/view-proposals" component={ViewProposals} />
          <Route exact path="/freelancer-completed-projects" component={FreelacerCompletedProjects} />
          <Route exact path="/freelancer-ongoing-projects" component={FreelacerOngoingProjects} />
          <Route exact path="/freelancer-cancelled-projects" component={FreelacerCancelledProjects} />
          <Route exact path="/freelancer-view-project-detail" component={FreelancerViewProjectdetails} />
          <Route exact path="/freelancer-files" component={FreelancerFile} />
          <Route exact path="/freelancer-payment" component={FreelancerPayment} />
          <Route exact path="/freelancer-milestones" component={FreelancerMilestone} />
          <Route exact path="/freelancer-task" component={Freelancertask} />
          <Route exact path="/freelancer-favourites" component={FreelancerFavourites} />
          <Route exact path="/freelancer-invitations" component={FreelancerInvitations} />
          <Route exact path="/freelancer-membership" component={FreelancerMembership} />
          <Route exact path="/freelancer-change-password" component={FreelancerChangePassword} />
          <Route exact path="/freelancer-profile-settings" component={FreelancerSettings} />
          <Route exact path="/freelancer-delete-account" component={FreelancerDeleteAccount} />
          <Route exact path="/freelancer-profile" component={FreelancerProfile} />
          <Route exact path="/freelancer-details" component={FreelancerDetails} />
          <Route exact path="/freelancer-chats" component={Chats} />
          <Route exact path="/freelancer-review" component={FreelancerReview} />
          <Route exact path="/freelancer-portfolio" component={FreelancerPortfolio} />
          <Route exact path="/freelancer-withdraw-money" component={FreelancerWithdrawmoney} />
          <Route exact path="/freelancer-transaction-history" component={FreelancerTransactionhistory} />
          <Route exact path="/freelancer-verify-identity" component={FreelancerVerifyIdentity} />
          <Route exact path="/about" component={Aboutus} />
          <Route exact path="/blank-page" component={BlankPage} />
          <Route exact path="/404-page" component={Page404} />
          <Route exact path="/user-account-details" component={UserDetails} />
          <Route exact path="/freelancer-invoices" component={Invoices} />
          <Route exact path="/view-invoice" component={InvoiceView} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/onboard-screen" component={OnboardScreen} />
          <Route exact path="/onboard-screen-employer" component={OnboardScreenEmployer} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/forgot-password" component={ForgotPassword} />

          <Route exact path="/blog-list" component={BlogList} />
          <Route exact path="/blog-grid" component={BlogGrid} />
          <Route exact path="/blog-details" component={BlogDetails} />
          <Route exact path="/privacy-policy" component={PrivacyPolicy} />
          <Route exact path="/term-condition" component={TermsCondition} />
          <Route exact path="/post-job" component={PostJob} />
          <Route exact path="/faq" component={Faq} />
          <Route exact path="/edit-project" component={EditProject} />
        </Switch>
        <Route render={(props) => <Footer {...props} />} />
      </Router>
    );
  };
  return null;
};

export default AppContainer;
