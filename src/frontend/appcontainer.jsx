import React, { Component } from "react";
import config from "config";

import { Route, Redirect, BrowserRouter as Router, Switch, Link } from "react-router-dom";
import Header from "./components/header";
import Footer from "./components/footer";
import PostProject from "./components/postproject";

//home
import Home from "./components/home";

//For Employee
import AdvocateTalents from "./components/foremployers/talent/talent";
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
import Settings from "./components/foremployers/settings";
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
import UserDetails from "./components/pages/user_details";
import Login from "./components/login";
import Register from "./components/register";
import ForgotPassword from "./components/pages/forgot_password";
import onboardScreen from "./components/pages/onboardScreen";

//Blog
import BlogList from "./components/blog/blog_list";
import BlogGrid from "./components/blog/blog_grid";
import BlogDetails from "./components/blog/blog_details";

import PrivacyPolicy from "./components/privacyPages/privacy_policy";
import TermsCondition from "./components/privacyPages/term_condition";
import Home2 from "./components/home/index-two";
import Home3 from "./components/home/index-three";
import Home4 from "./components/home/index-four";
import Home5 from "./components/home/index-five";
import DeveloperProfile from "./components/forfreelancer/developerprofile"
import CompanyProfile from './components/forfreelancer/companyprofile/index'
import CompanyProject from './components/forfreelancer/companyproject/index'
import AppUniversal from "../admin/app-universal";
import Users from './components/users/Users';
import CommonUserDetails from './components/users/UserDetails';
import jwtDecode from 'jwt-decode';

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
import { useUserContext } from "../context/UserContext";
import ProtectedRoute from "./ProtectedRoute";
import { PreferencesKeys, getItem } from "../preferences/Preferences";
import Messges from "./components/messages";
// import PostJob from "./components/jobs/post-job";
import Socket from "../socket/Socket";
if (
  !window.location.pathname.includes("admin")

) {
  require('./assets/js/bootstrap.min.js');
  require("./assets/css/style.css");
}
const AppContainer = function (props) {
  const history = useHistory();
  const { state, dispatch } = useUserContext();
  const isLoggedIn = state.isLoggedIn;
  // console.log('userState', state);
  if (props) {
    const location = history.location.pathname.split("/")[1];
    // console.log('location', location);
    const getSetuser = async () => {
      const userAuth = await getItem(PreferencesKeys.authKey);
      // console.log('userAuth', userAuth);
      if (userAuth) {
        Socket.init(userAuth.token)
        const decoded = jwtDecode(userAuth.token);
        dispatch({ type: 'LOGIN', payload: decoded });
        console.log('User session initiated.');
      }
    }
    // console.log('Socket', socket);
    React.useEffect(() => {
      getSetuser();
    }, [])
    return (
      <Router basename={`${config.publicPath}`}>
        {
          location === "admin" ? (
            <div>
              <Switch>
                <Route path="/admin/index" component={AppUniversal} />
                <Route path="/admin/categories" component={AppUniversal} />
                <Route path="/admin/data-tables" component={AppUniversal} />
                <Route path="/admin/projects" component={AppUniversal} />
                <Route path="/admin/profile" component={AppUniversal} />
                <Route path="/admin/providers" component={AppUniversal} />
                <Route path="/admin/subscription" component={AppUniversal} />
                <Route path="/admin/subscripe-freelancer" component={AppUniversal} />
                <Route path="/admin/view-price-employe" component={AppUniversal} />
                <Route path="/admin/view-price-freelance" component={AppUniversal} />
                <Route path="/admin/freelance-list" component={AppUniversal} />
                <Route path="/admin/employe-list" component={AppUniversal} />
                <Route path="/admin/users" component={AppUniversal} />
                <Route path="/admin/user-active" component={AppUniversal} />
                <Route path="/admin/user-inactive" component={AppUniversal} />
                <Route path="/admin/user-administrator" component={AppUniversal} />
                <Route path="/admin/user-suspended" component={AppUniversal} />
                <Route path="/admin/deposit" component={AppUniversal} />
                <Route path="/admin/deposit-pending" component={AppUniversal} />
                <Route path="/admin/deposit-hold" component={AppUniversal} />
                <Route path="/admin/deposit-cancelled" component={AppUniversal} />
                <Route path="/admin/deposit-completed" component={AppUniversal} />
                <Route path="/admin/user-profile" component={AppUniversal} />
                <Route path="/admin/login" component={AppUniversal} />
                <Route path="/admin/withdrawn" component={AppUniversal} />
                <Route path="/admin/withdrawn-pending" component={AppUniversal} />
                <Route path="/admin/withdrawn-cancelled" component={AppUniversal} />
                <Route path="/admin/withdrawn-completed" component={AppUniversal} />
                <Route path="/admin/transaction" component={AppUniversal} />
                <Route path="/admin/transaction-withdraw" component={AppUniversal} />
                <Route path="/admin/transaction-deposit" component={AppUniversal} />
                <Route path="/admin/transaction-pending" component={AppUniversal} />
                <Route path="/admin/transaction-onhold" component={AppUniversal} />
                <Route path="/admin/transaction-completed" component={AppUniversal} />
                <Route path="/admin/roles" component={AppUniversal} />
                <Route path="/admin/roles-permission" component={AppUniversal} />
                <Route path="/admin/skills" component={AppUniversal} />
                <Route path="/admin/activities" component={AppUniversal} />
                <Route path="/admin/profile-transactions" component={AppUniversal} />
                <Route path="/admin/form-basic-inputs" component={AppUniversal} />
                <Route path="/admin/form-input-groups" component={AppUniversal} />
                <Route path="/admin/form-horizontal" component={AppUniversal} />
                <Route path="/admin/form-vertical" component={AppUniversal} />
                <Route path="/admin/form-mask" component={AppUniversal} />
                <Route path="/admin/form-validation" component={AppUniversal} />
                <Route path="/admin/verify-identity" component={AppUniversal} />
                <Route path="/admin/forgot-password" component={AppUniversal} />
                <Route path="/admin/register" component={AppUniversal} />
                <Route path="/admin/tables-basic" component={AppUniversal} />
                <Route path="/admin/components" component={AppUniversal} />
                <Route path="/admin/settings" component={AppUniversal} />
                <Route path="/admin/localization-details" component={AppUniversal} />
                <Route path="/admin/payment-settings" component={AppUniversal} />
                <Route path="/admin/email-settings" component={AppUniversal} />
                <Route path="/admin/social-settings" component={AppUniversal} />
                <Route path="/admin/social-links" component={AppUniversal} />
                <Route path="/admin/seo-settings" component={AppUniversal} />
                <Route path="/admin/others-settings" component={AppUniversal} />
                <Route path="/admin/reports" component={AppUniversal} />
                <Route path="/admin/project-bidding" component={AppUniversal} />
                <Route path="/admin/project-invoice" component={AppUniversal} />
                <Route path="/admin/project-earnings" component={AppUniversal} />
                <Route path="/admin/earning-employer" component={AppUniversal} />
                <Route path="/admin/earning-freelancer" component={AppUniversal} />
                <Route path="/admin/bid-fees" component={AppUniversal} />
                <Route path="/admin/contest-entry-fees" component={AppUniversal} />
                <Route path="/admin/contests-fees" component={AppUniversal} />
                <Route path="/admin/change-password" component={AppUniversal} />
                <Route path="/admin/delete-account" component={AppUniversal} />
                <Route path="/admin/tax-types" component={AppUniversal} />
                <Route path="/admin/sub-category" component={AppUniversal} />
                <Route path="/admin/projects-fees" component={AppUniversal} />
              </Switch>
            </div>
          ) :

            (
              <>
                <Header {...props} userState={state} />
                <Switch>
                  {/* home */}
                  <Route exact path="/" component={Home3} />
                  <Route exact path="/index-two" component={Home2} />
                  <Route exact path="/index-three" component={Home3} />
                  <Route exact path="/index-four" component={Home4} />
                  <Route exact path="/index-five" component={Home5} />
                  <Route exact path="/developer-profile" component={DeveloperProfile} />
                  <Route exact path="/company-profile" component={CompanyProfile} />
                  <Route exact path="/post-project" component={PostProject} />
                  <Route exact path="/company-project" component={CompanyProject} />
                  {/* For Employer */}
                  <Route exact path="/search/talent/:query" component={Users} />
                  <Route exact path="/developer-details/:userId" component={DeveloperDetails} />
                  <Route exact path="/search/talent/:query/developer-list" component={TalentList} />
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
                  <ProtectedRoute isLoggedIn={isLoggedIn} exact path="/messages" component={Messges} />
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
                  {/* For Freelancer */}
                  <Route exact path="/search/parent/:query" component={Users} />
                  <Route exact path="/userDetails/:userId" component={CommonUserDetails} />
                  <Route exact path="/search/education/:query" component={Project} />
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
                  <Route exact path="/messges" component={Messges} />
                  <Route exact path="/freelancer-review" component={FreelancerReview} />
                  <Route exact path="/freelancer-portfolio" component={FreelancerPortfolio} />
                  <Route exact path="/freelancer-withdraw-money" component={FreelancerWithdrawmoney} />
                  <Route exact path="/freelancer-transaction-history" component={FreelancerTransactionhistory} />
                  <Route exact path="/freelancer-verify-identity" component={FreelancerVerifyIdentity} />
                  {/* Pages */}
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

                  {/* Blogs */}
                  <Route exact path="/blog-list" component={BlogList} />
                  <Route exact path="/blog-grid" component={BlogGrid} />
                  <Route exact path="/blog-details" component={BlogDetails} />
                  {/* Privacy Pages */}
                  <Route exact path="/privacy-policy" component={PrivacyPolicy} />
                  <Route exact path="/term-condition" component={TermsCondition} />
                  {/* Jobs*/}
                  <Route exact path="/post-job" component={PostJob} />
                  {/* Faq */}
                  <Route exact path="/faq" component={Faq} />
                  {/* Edit Project */}
                  <Route exact path="/edit-project" component={EditProject} />

                </Switch>
                <Route render={(props) => <Footer {...props} />} />
                {/* <Route render={(props) => <FooterTwo {...props} />} /> */}
              </>
            )}
      </Router>
    );
  };
  return null;
};

export default AppContainer;
