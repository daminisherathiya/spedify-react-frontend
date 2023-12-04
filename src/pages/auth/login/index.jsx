import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Logo_01 } from "../../../components/imagepath";
import { useUserContext } from '../../../context/UserContext';
import { PreferencesKeys, setItem } from '../../../preferences/Preferences';
import { getSetUser } from '../../../helpers';
import UserRoles from '../components/UserRoles';
import { Post } from '../../../services/Api';
import GoogleAuth from '../components/GoogleAuth';

const Login = ({ history }) => {
  const { dispatch } = useUserContext();
  const [user, setUser] = React.useState({});

  const onChange = e => {
    e.persist();
    setUser({ ...user, [e.target.id]: e.target.value })
  }
  const onSubmit = async () => {
    try {
      const data = await Post('api/v1/users/login', { ...user, userType: user.userType || 1, loginMethodType: 1 });
      if (data.statusCode === 200) {
        await setItem(PreferencesKeys.authKey, data.doc);
        await getSetUser(dispatch)
        history.push('/')
      }
    } catch (error) {
      console.log('[onSubmit].error', error)
    }
  }
  const onRoleChange = userType => setUser(pre => ({ ...pre, userType }))
  useEffect(() => {

    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });

  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              {/* Login Content */}
              <div className="account-content">
                <div className="align-items-center justify-content-center">
                  <div className="login-right">
                    <div className="login-header text-center">
                      <Link to="/">
                        <img
                          src={Logo_01}
                          alt="logo"
                          className="img-fluid"
                        />
                      </Link>
                      <h3>Welcome Back</h3>
                      <p>
                        Don't miss your next opportunity. Sign in to stay updated on
                        your professional world.
                      </p>
                    </div>
                    <form>
                      <UserRoles onChange={onRoleChange} />
                      <div className="form-group form-focus">
                        <input type="text" className="form-control floating" id='usernameOrEmail' onChange={onChange} />
                        <label className="focus-label">Email or Username</label>
                      </div>
                      <div className="form-group form-focus">
                        <input type="password" className="form-control floating" id="password" onChange={onChange} />
                        <label className="focus-label">Password</label>
                      </div>
                      {/* <div className="form-group">
                        <label className="custom_check">
                          <input type="checkbox" name="rem_password" />
                          <span className="checkmark" /> Remember password
                        </label>
                      </div> */}
                      <button
                        className="btn btn-primary btn-block btn-lg login-btn"
                        type="button"
                        onClick={onSubmit}
                      >
                        Login
                      </button>
                      <div className="login-or">
                        <p>Or login with</p>
                      </div>
                      <GoogleAuth />
                      <div className="row">
                        <div className="col-6 text-start">
                          <Link className="forgot-link" to="/forgot-password">
                            Forgot Password ?
                          </Link>
                        </div>
                        <div className="col-6 text-end dont-have">
                          New to Spedify? <Link to="/register">Click here</Link>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              {/* /Login Content */}
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  )

}
export default Login;