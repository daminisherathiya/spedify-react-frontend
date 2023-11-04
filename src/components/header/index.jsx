import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Logo, Img_04, avatar_1, Avatar_1, Top_icon, Reg_icon, Lock_icon, loader_icon, Logo_img, Spedify_Logo } from '../imagepath';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faTimes } from '@fortawesome/free-solid-svg-icons';
import { BASE_URL, ME } from "../.././keys";
import { useHistory } from "react-router-dom";
import { useUserContext } from "../.././context/UserContext";
import Socket from "../.././socket/Socket";
import Avatar from "../common/Avatar";


const Header = (props) => {
  const history = useHistory();
  const { state } = useUserContext();
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenu1, setSideMenu1] = useState("");
  const [isSideMenu2, setSideMenu2] = useState("");
  const [isSideMenu3, setSideMenu3] = useState("");
  const toggleSidebar = (value) => {
    setSideMenu(value)
  }
  const toggleSidebar1 = (value) => {
    setSideMenu1(value)
  }
  const toggleSidebar2 = (value) => {
    setSideMenu2(value)
  }
  const toggleSidebar3 = (value) => {
    setSideMenu3(value)
  }
  const onHandleMobileMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.add("menu-opened");
  };

  const onhandleCloseMenu = () => {
    var root = document.getElementsByTagName("html")[0];
    root.classList.remove("menu-opened");
  };

  const pathname = history.location.pathname.split("/")[1];
  // console.log('[header].pathname', pathname);
  // const exclusionArray = [
  //   "/onboard-screen",
  //   "/onboard-screen-employer"
  // ];

  // if (exclusionArray.indexOf(props.location.pathname) >= 0) {
  //   return "";
  // }
  // console.log(props.location, "location")

  //nav transparent

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
  const [navbar, setNavbar] = useState(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const Reload = () => {
    window.location.reload(false);
  }

  useEffect(() => {
    showButton();
  }, []);
  window.addEventListener('resize', showButton);

  const changeBackground = () => {
    if (window.scrollY >= 95) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  window.addEventListener('scroll', changeBackground);
  // console.log('[Header].UserContext', state);
  const isLoggedIn = state.isLoggedIn;
  const currentUser = isLoggedIn ? state.user : {};
  const onLogout = () => {
    localStorage.clear();
    Socket.disconnect();
    window.location.href = '/';
  }
  return (
    <>

      {/* Header */}
      {!props.location.pathname.includes("onboard-screen") && !props.location.pathname.includes("onboard-screen-employer") && (!props.location.pathname.includes("/index-two") && !props.location.pathname.includes("/index-three") && !props.location.pathname.includes("/index-four") && !props.location.pathname.includes("/index-five")) &&
        <header className={`header ${navbar ? 'sticky' : ''} header-bg`}>
          <nav className="navbar navbar-expand-lg header-nav">
            <div className="navbar-header">
              <Link id="mobile_btn" to="#" onClick={() => onHandleMobileMenu()}>
                <span className="bar-icon">
                  <span />
                  <span />
                  <span />
                </span>
              </Link>
              <Link to="/" className="navbar-brand logo" style={{ height: '80px', width: "80px", overflow: 'hidden' }}>
                <img src={Spedify_Logo} className="img-fluid" alt="Logo" style={{ borderRadius: 40 }} />
              </Link>
            </div>
            <div className="main-menu-wrapper">
              <div className="menu-header">
                <Link to="/" className="menu-logo" style={{ height: '80px', width: "80px", overflow: 'hidden' }}>
                  <img src={Spedify_Logo} className="img-fluid" alt="Logo" style={{ borderRadius: 40 }} />
                </Link>
                <Link id="menu_close" className="menu-close" to="#" onClick={() => onhandleCloseMenu()}>
                  <i><FontAwesomeIcon icon={faTimes} /></i>
                </Link>
              </div>
              <ul className="main-nav">

                <li className={pathname === "about" ? "active" : ""}>
                  <Link to="/about">About us</Link>
                </li>

                <li className={pathname === "blog-grid" ? "active" : ""}>
                  <Link to="/blog-grid">Blogs</Link>
                </li>
                <li className={pathname === "faq" ? "active" : ""}>
                  <Link to="/faq">FAQ</Link>
                </li>
                {
                  isLoggedIn &&
                  <li className={pathname === "messages" ? "active" : ""}>
                    <Link to="/messages">Messages</Link>
                  </li>
                }
              </ul>
            </div>
            {
              isLoggedIn ?
                <ul className="nav header-navbar-rht">
                  <li className="nav-item dropdown has-arrow account-item">
                    <Link to="#" className="dropdown-toggle nav-link" data-bs-toggle="dropdown">
                      <span className="user-img">
                        <Avatar />
                      </span>
                      <span>{currentUser.username || ''}</span>
                    </Link>
                    <div className="dropdown-menu emp">
                      <div className="drop-head">Account Details</div>
                      <Link className="dropdown-item" to="/user-account-details">
                        <i className="material-icons">verified_user</i> View profile
                      </Link>
                      <div className="drop-head">Projects Settings</div>
                      <Link className="dropdown-item" to="/manage-projects">
                        <i className="material-icons">business_center</i> Projects
                      </Link>
                      <Link className="dropdown-item" to="/favourites">
                        <i className="material-icons">local_play</i> Favourites
                      </Link>
                      <Link className="dropdown-item" to="/review">
                        <i className="material-icons">pie_chart</i> Reviews
                      </Link>
                      <div className="drop-head">Account Details</div>
                      <Link className="dropdown-item" to="/profile-settings">
                        {" "}
                        <i className="material-icons">settings</i> Profile Settings
                      </Link>
                      <div className="dropdown-item" onClick={onLogout} style={{ cursor: 'pointer' }}>
                        <i className="material-icons">power_settings_new</i> Logout
                      </div>
                    </div>
                  </li>
                </ul>
                :
                <ul className="nav header-navbar-rht reg-head">
                  <li><Link to="/register" className="reg-btn"><img src={Reg_icon} className="me-1" alt="icon" />{" "} Register</Link></li>
                  <li><Link to="/login" className="log-btn"> <img src={Lock_icon} className="me-1" alt="icon" />{" "}Login</Link></li>
                  {/* <li><Link to="post-project" className="login-btn">Post a Project{" "} </Link></li> */}
                </ul>
            }
          </nav>
        </header>

      }
      {/* /Header */}

    </>
  );

}

export default Header;
