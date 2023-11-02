import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import StickyBox from "react-sticky-box";
import { home_icon } from "../../components/imagepath";
import { Sidebar } from '../sidebar';
import { useEnumsContext } from "../../../context/EnumsContext";
import { useUserContext } from "../../../context/UserContext";
import Avatar from "../../components/common/Avatar";
import { Post } from "../../../services/Api";
import Select from "../../components/Select";

function findObjectDifferences(obj1, obj2) {
  const diffs = {};

  for (const key in obj1) {
    if (obj1.hasOwnProperty(key)) {
      if (typeof obj1[key] === 'object' && typeof obj2[key] === 'object') {
        const nestedDiffs = findObjectDifferences(obj1[key], obj2[key]);
        if (Object.keys(nestedDiffs).length > 0) {
          diffs[key] = nestedDiffs;
        }
      } else if (obj1[key] !== obj2[key]) {
        // diffs[key] = { obj1: obj1[key], obj2: obj2[key] };
        diffs[key] = obj2[key];
      }
    }
  }

  for (const key in obj2) {
    if (obj2.hasOwnProperty(key) && !obj1.hasOwnProperty(key)) {
      // diffs[key] = { obj1: undefined, obj2: obj2[key] };
      diffs[key] = obj2[key];
    }
  }
  console.log('diffs', diffs);
  return diffs;
}
const Settings = (props) => {
  const { enumsState = { UserRoles: [], UserCategories: [], Language: [], Gender: [] } } = useEnumsContext();
  console.log('enumsState', enumsState);
  const { state, dispatch } = useUserContext();
  const [userProfile, setUserProfile] = React.useState(state.user);
  // console.log('userProfile', userProfile);
  useEffect(() => {
    setUserProfile(pre => ({ ...pre, ...state.user }))
  }, [state.user])
  useEffect(() => {
    document.body.className = 'dashboard-page';
    return () => { document.body.className = ''; }
  });
  const onChange = e => {
    const targetId = e.target.id;
    if (targetId === 'picture') {
      const File = e.target.files[0]
      setUserProfile(pre => ({ ...pre, File, picture: URL.createObjectURL(File) }))
    } else {
      setUserProfile(pre => ({ ...pre, [e.target.id]: e.target.value }))
    }
  }
  const onSubmit = async () => {
    try {
      const diffs = findObjectDifferences(state.user, userProfile);
      if (Object.keys(diffs).length) {
        const payload = {
          ...diffs,
          _id: userProfile.profileId
        };
        if (userProfile.File) {
          const fd = new FormData();
          fd.append("file", userProfile.File)
          const doc = (await Post(`api/v1/files/upload`, fd, {
            'content-type': 'multipart/form-data'
          })).doc;
          payload.picture = doc._id;
        }
        await Post('/api/v1/users/profile', payload)
        dispatch({ type: 'LOGIN', payload: { ...payload, picture: userProfile.picture } });
      }
    } catch (error) {

    }

  }
  return (
    <>
      {/* Breadcrumb */}
      <div className="bread-crumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <div className="breadcrumb-list">
                <nav aria-label="breadcrumb" className="page-breadcrumb">
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="#"><img src={home_icon} alt="Post Author" /> Home</Link></li>
                    <li className="breadcrumb-item" aria-current="page">{(enumsState.UserRoles && userProfile.userType) ? (enumsState.UserRoles || []).find(e => e.value === userProfile.userType).text : ''}</li>
                    <li className="breadcrumb-item" aria-current="page">Settings</li>
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content content-page">
        <div className="container-fluid">
          <div className="row">
            {/* sidebar */}
            <div className="col-xl-3 col-md-4 theiaStickySidebar">
              <StickyBox offsetTop={20} offsetBottom={20}>
                <Sidebar userProfile={state.user} />
              </StickyBox>
            </div>
            {/* /sidebar */}
            <div className="col-xl-9 col-md-8">
              <div className="pro-pos">
                <nav className="user-tabs mb-4">
                  <ul className="nav nav-tabs nav-tabs-bottom nav-justified">
                    <li className="nav-item">
                      <Link className="nav-link active" to="/profile-settings">
                        Basic Settings
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/change-password">
                        Change Password
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/delete-account">
                        Delete Account
                      </Link>
                    </li>
                  </ul>
                </nav>
                <div className="setting-content">
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        Profile Basics{" "}
                      </h3>
                    </div>
                    <form >
                      <div className="pro-body p-0">
                        <div className="form-row pro-pad">
                          <div className="form-group col-md-6">
                            <label>Username</label>
                            <input onChange={onChange} type="text" className="form-control" disabled defaultValue={userProfile.username} />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Email Address</label>
                            <input onChange={onChange} id="email" type="email" className="form-control" disabled defaultValue={userProfile.email} />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Dispaly Name</label>
                            <input onChange={onChange} id="displayName" type="text" className="form-control" defaultValue={userProfile.displayName} />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Tagline</label>
                            <input onChange={onChange} id="tagline" type="text" className="form-control" defaultValue={userProfile.tagline} />
                          </div>
                          <div className="form-group col-md-6">
                            <label>Contact Number</label>
                            <input onChange={onChange} id="contactNo" type="text" className="form-control" defaultValue={userProfile.contactNo} />
                          </div>
                          <Select
                            label="Category"
                            id={"category"}
                            defaultValue={userProfile.category}
                            onChange={onChange}
                            options={enumsState.UserCategories}
                          />
                          <Select
                            label="Gender"
                            id={"gender"}
                            defaultValue={userProfile.gender}
                            onChange={onChange}
                            options={enumsState.Gender}
                          />

                          <Select
                            label="Language"
                            id={"language"}
                            defaultValue={userProfile.language}
                            onChange={onChange}
                            options={enumsState.Language}
                          />
                        </div>
                        <div className="form-row pro-pad pt-0">
                          <div className="form-group col-md-6 pro-pic">
                            <label>Profile Picture</label>
                            <div className="d-flex align-items-center">
                              <div className="upload-images">
                                <Avatar uri={userProfile.picture} />
                                <div
                                  className="btn btn-icon btn-danger btn-sm"
                                >
                                  <i className="far fa-trash-alt" />
                                </div>
                              </div>
                              <label className="file-upload image-upbtn ms-3">
                                Change Image <input onChange={onChange} id="picture" type="file" />
                              </label>
                            </div>
                            {/* <p>Image size 300*300</p> */}
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">Location</h3>
                    </div>
                    <div className="pro-body">
                      <div className="row">
                        <div className="form-group col-md-12">
                          <label>Address</label>
                          <input onChange={onChange} id="addressLine" type="text" className="form-control" defaultValue={userProfile.addressLine} />
                        </div>
                        <div className="form-group col-md-6">
                          <label>State</label>
                          <input onChange={onChange} id="state" type="text" className="form-control" defaultValue={userProfile.state} />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Zipcode</label>
                          <input onChange={onChange} id="zipCode" type="text" className="form-control" defaultValue={userProfile.zipCode} />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Country</label>
                          <select onChange={onChange} id="country" className="form-control select" defaultValue={userProfile.country}>
                            <option value={0}>Pakistan</option>
                            <option value={1}>United Kindom</option>
                            <option value={2}>USA</option>

                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">Overview</h3>
                    </div>
                    <div className="pro-body">
                      <div className="row">
                        <div className="form-group col-md-12">
                          <textarea
                            id="overview"
                            className="form-control"
                            rows={5}
                            defaultValue={userProfile.overview}
                            onChange={onChange}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="pro-head">
                      <h3 className="pro-title without-border mb-0">
                        Social Links
                      </h3>
                    </div>
                    <div className="pro-body">
                      <div className="row">
                        <div className="form-group col-md-6">
                          <label>Facebook</label>
                          <input onChange={onChange} id="facebook" type="text" className="form-control" defaultValue={userProfile.facebook} />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Dribble</label>
                          <input onChange={onChange} id="dribble" type="text" className="form-control" defaultValue={userProfile.dribble} />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Twitter</label>
                          <input onChange={onChange} id="twitter" type="text" className="form-control" defaultValue={userProfile.twitter} />
                        </div>
                        <div className="form-group col-md-6">
                          <label>LinkedIn</label>
                          <input onChange={onChange} id="likedin" type="text" className="form-control" defaultValue={userProfile.likedin} />
                        </div>
                        <div className="form-group col-md-6">
                          <label>Behance</label>
                          <input onChange={onChange} id="behance" type="text" className="form-control" defaultValue={userProfile.behance} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="card">
                    <div className="text-end">
                      <div className="pro-body">
                        <button
                          className="btn btn-secondary click-btn btn-plan"
                          type="submit"
                        >
                          Cancel
                        </button>&nbsp;
                        <button
                          className="btn btn-primary click-btn btn-plan"
                          type="button"
                          onClick={onSubmit}
                        >
                          Update
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* /Page Content */}
    </>
  )

}
export default Settings;