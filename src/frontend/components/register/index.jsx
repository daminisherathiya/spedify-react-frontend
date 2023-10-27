import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Logo_01 } from "../imagepath";
import Axios from '../../../apiClient';
import { PreferencesKeys, setItem } from '../../../preferences/Preferences';
import { useEnumsContext } from '../../../context/EnumsContext';

const Register = (props) => {
  // console.log('[props]', props);
  const { history } = props;
  const { enumsState } = useEnumsContext();
  const [user, setUser] = React.useState({});
  const [userRoles, setUserRoles] = React.useState([]);
  console.log('[userRoles]', userRoles);
  useEffect(() => {
    document.body.className = 'account-page';
    return () => { document.body.className = ''; }
  });
  useEffect(() => {
    if (enumsState.UserRoles) setUserRoles(enumsState.UserRoles)
  }, [enumsState]);
  const onChange = e => {
    e.persist();
    setUser({ ...user, [e.target.id]: e.target.value })
  }
  const enumSelection = (enumIndex) => {
    setUserRoles([...userRoles].map((en, j) => {
      if (j === enumIndex) return { ...en, active: true }
      return { ...en, active: false };
    }))
  }
  const onSubmit = async () => {
    try {
      const response = await Axios.post('api/v1/users/signup', user);
      if (response.data.statusCode === 200) {
        const myData = response.data.doc;
        await setItem(PreferencesKeys.authKey, myData)
        history.push('/')
      }
    } catch (error) {
      console.log('[onSubmit].error', error)
    }
  }
  return (
    <>
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-6 offset-md-3">
              {/* Register Tab Content */}
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
                      <h3>Join Spedify</h3>
                      <p>Make the most of your professional life</p>
                    </div>
                    <nav className="user-tabs mb-4">
                      <ul role="tablist" className="nav nav-pills nav-justified">
                        {
                          (userRoles || []).map((role, index) => (
                            <li
                              key={`role-index-${index}`}
                              className={`nav-item nav-link ${role.active ? "active" : ''}`}
                              style={{ cursor: 'pointer' }}
                              onClick={() => enumSelection(index)}>
                              {role.text}
                            </li>
                          ))
                        }
                      </ul>
                    </nav>
                    <div className="tab-content pt-0">
                      <div
                        role="tabpanel"
                        id="developer"
                        className="tab-pane fade active show"
                      >
                        <form>
                          <div className="form-group form-focus">
                            <input type="email" className="form-control floating" id="username" onChange={onChange} />
                            <label className="focus-label">User Name</label>
                          </div>
                          <div className="form-group form-focus">
                            <input type="email" className="form-control floating" id="email" onChange={onChange} />
                            <label className="focus-label">Email </label>
                          </div>
                          <div className="form-group form-focus">
                            <input
                              type="password"
                              className="form-control floating"
                              id="password"
                              onChange={onChange}
                            />
                            <label className="focus-label">Password</label>
                          </div>
                          <div className="form-group form-focus mb-0">
                            <input
                              type="password"
                              className="form-control floating"
                              id="confirmPassword"
                              onChange={onChange}
                            />
                            <label className="focus-label">Confirm Password</label>
                          </div>
                          <div className="dont-have">
                            <label className="custom_check">
                              <input
                                type="checkbox"
                                name="rem_password"
                                id="agree"
                                onChange={onChange}
                              />
                              <span className="checkmark" /> You agree to the
                              Spedify{" "}
                              <Link to="/privacy-policy">
                                User Agreement, Privacy Policy,
                              </Link>{" "}
                              and <Link to="/privacy-policy">Cookie Policy</Link>.
                            </label>
                          </div>
                          <button
                            className="btn btn-primary btn-block btn-lg login-btn"
                            type="button"
                            onClick={onSubmit}
                          >
                            Agree TO JOIN
                          </button>
                          <div className="login-or">
                            <p>Or login with</p>
                          </div>
                          <div className="row social-login">
                            <div className="col-4">
                              <Link to="#" className="btn btn-twitter btn-block">
                                {" "}
                                Twitter
                              </Link>
                            </div>
                            <div className="col-4">
                              <Link to="#" className="btn btn-facebook btn-block">
                                {" "}
                                Facebook
                              </Link>
                            </div>
                            <div className="col-4">
                              <Link to="#" className="btn btn-google btn-block">
                                {" "}
                                Google
                              </Link>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-6 text-start">
                              <Link
                                className="forgot-link"
                                to="/forgot-password"
                              >
                                Forgot Password ?
                              </Link>
                            </div>
                            <div className="col-6 text-end dont-have">
                              Already on Spedify <Link to="/login">Click here</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                      <div role="tabpanel" id="company" className="tab-pane fade">
                        <form >
                          <div className="form-group form-focus">
                            <input type="email" className="form-control floating" />
                            <label className="focus-label">User Name</label>
                          </div>
                          <div className="form-group form-focus">
                            <input type="email" className="form-control floating" />
                            <label className="focus-label">Email </label>
                          </div>
                          <div className="form-group form-focus">
                            <input
                              type="password"
                              className="form-control floating"
                            />
                            <label className="focus-label">Password</label>
                          </div>
                          <div className="form-group form-focus mb-0">
                            <input
                              type="password"
                              className="form-control floating"
                            />
                            <label className="focus-label">Confirm Password</label>
                          </div>
                          <div className="dont-have">
                            <label className="custom_check">
                              <input type="checkbox" name="rem_password" />
                              <span className="checkmark" /> You agree to the
                              Spedify{" "}
                              <Link to="/privacy-policy">
                                User Agreement, Privacy Policy,
                              </Link>{" "}
                              and <Link to="/privacy-policy">Cookie Policy</Link>.
                            </label>
                          </div>
                          <button
                            className="btn btn-primary btn-block btn-lg login-btn"
                            type="submit"
                          >
                            Agree TO JOIN
                          </button>
                          <div className="login-or">
                            <p>Or login with</p>
                          </div>
                          <div className="row form-row social-login">
                            <div className="col-4">
                              <Link to="#" className="btn btn-twitter btn-block">
                                {" "}
                                Twitter
                              </Link>
                            </div>
                            <div className="col-4">
                              <Link to="#" className="btn btn-facebook btn-block">
                                {" "}
                                Facebook
                              </Link>
                            </div>
                            <div className="col-4">
                              <Link to="#" className="btn btn-google btn-block">
                                {" "}
                                Google
                              </Link>
                            </div>
                          </div>
                          <div className="row form-row">
                            <div className="col-6 text-start">
                              <Link
                                className="forgot-link"
                                to="/forgot-password"
                              >
                                Forgot Password ?
                              </Link>
                            </div>
                            <div className="col-6 text-end dont-have">
                              Already on Spedify <Link to="/login">Click here</Link>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* /Register Tab Content */}
            </div>
          </div>
        </div>
      </div >
      {/* /Page Content */}
    </>
  )

}
export default Register;