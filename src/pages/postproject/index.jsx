import React from "react";
import { Link } from "react-router-dom";
import { useEnumsContext } from "../../context/EnumsContext";
import { Post } from "../../services/Api";
import { useUserContext } from "../../context/UserContext";
import Price from "./components/Price";
// import ReactSummernote from 'react-summernote';
// import 'react-summernote/dist/react-summernote.css'; 
const SelectedSkills = ({ selectedSkills = [], onSkillSelect = () => { } }) => {
  if (!selectedSkills.length) return null;
  return <div style={{ margin: 10, }}>
    {
      selectedSkills.map((s, i) => (
        <span key={`selected-skill-${i}`} className="mb-0" style={{ cursor: "pointer", textAlign: 'center', padding: 10, borderRadius: 5, backgroundColor: "#d3dded", margin: 5, }}
          onClick={() => onSkillSelect(s)}
        >
          {s.name}
        </span>
      ))
    }
  </div>
}
const initState = {
  "_id": "",
  "title": "",
  "description": "",
  "supportType": 0,
  "pricingType": 0,
  "skills": [],
  "deliveryStamp": 0,
  "deliveryType": 0,
  "location": '',
  "fixedPrice": 0,
  "hourlyMin": 0,
  "hourlyMax": 0,
}
const PostProject = (props) => {
  const { enumsState } = useEnumsContext();
  const { state } = useUserContext();
  const currentUser = state.user;
  const [payload, setPayload] = React.useState(initState);
  console.log('payload', payload);
  const [skills, setSkills] = React.useState([]);
  const onSkillSelect = (skill) => {
    setSkills([...skills].map((sk, j) => {
      if (sk._id === skill._id) return { ...sk, selected: !sk.selected }
      else return sk;
    }))
  }

  const onChange = e => {
    const id = e.target.id;
    const value = e.target.value;
    setPayload(pre => ({
      ...pre,
      [id]: value
    }))
  };
  const onSubmit = async () => {
    try {
      const data = await Post('api/v1/project/createUpdate', { ...payload, skills: skills.filter(s => s.selected)?._id, "location": `${currentUser.addressLine}, ${currentUser.state}` })
      setPayload(initState)
      alert(data.doc.message)
    } catch (error) {

    }
  }
  const getSkills = async () => {
    const data = await Post('api/v1/skill/search', { searchQuery: `` });
    // console.log('[onChangeSkills].data', data);
    if (data.statusCode === 200) {
      setSkills(data.doc.skills)
    }
  }
  React.useEffect(() => {
    getSkills()
  }, [])
  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-bar">
        <div className="container">
          <div className="row align-items-center inner-banner">
            <div className="col-md-12 col-12 text-center">
              <h2 className="breadcrumb-title">Post a Support</h2>
              <nav aria-label="breadcrumb" className="page-breadcrumb">
                <ol className="breadcrumb">
                  <li className="breadcrumb-item">
                    <Link to="/">Home</Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {" "}
                    Post a Request for Live Support
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </div>
      {/* /Breadcrumb */}
      {/* Page Content */}
      <div className="content">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="select-project mb-4">
                <form>
                  <div className="title-box widget-box">
                    <div className="row">

                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Title of Support Request</h3>
                          <div className="form-group mb-0">
                            <input
                              type="text"
                              className="form-control"
                              placeholder="Enter Support title"
                              id="title"
                              onChange={onChange}
                            />
                          </div>
                        </div>
                      </div>

                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Support Type</h3>
                          <div className="form-group mb-0">
                            <select className="form-control select" id="supportType" onChange={onChange}>
                              <option value={0}>Select</option>
                              {(enumsState.SupportTypes || []).map((supportType, index) => {
                                return <option value={supportType.value} key={`support-key-${index}`}>{supportType.text}</option>
                              })}

                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Support Needed By</h3>
                          <div className="form-group mb-0">
                            <select className="form-control select" id="deliveryType" onChange={onChange}>
                              <option value={0}>Select</option>
                              {(enumsState.DeliveryTypes || []).map((supportType, index) => {
                                return <option value={supportType.value} key={`support-key-${index}`}>{supportType.text}</option>
                              })}

                            </select>
                          </div>
                        </div>
                      </div>


                    </div>

                    <div className="row">

                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Pricing Type</h3>
                          <div className="form-group price-cont mb-0" id="price_type">
                            <select name="price" className="form-control select" id="pricingType" onChange={onChange}>
                              <option value={0}>Select</option>
                              {(enumsState.PricingTypes || []).map((pricingType, index) => {
                                return <option value={pricingType.value} key={`support-key-${index}`}>{pricingType.text}</option>
                              })}
                            </select>
                          </div>
                        </div>
                      </div>

                      <Price onChange={onChange} pricingType={payload.pricingType} />

                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Desired areas of expertise </h3>
                          <div className="form-group mb-0">
                            <select name="price" className="form-control select" onChange={e => {
                              onSkillSelect(skills.find(s => s._id === e.target.value))
                            }}>
                              <option value={0}>Select</option>
                              {(skills || []).map((skill, index) => {
                                return <option value={skill._id} key={`support-key-${index}`}>{skill.name}</option>
                              })}
                            </select>
                            <SelectedSkills selectedSkills={skills.filter(s => s.selected)} onSkillSelect={onSkillSelect} />
                          </div>
                        </div>
                      </div>

                    </div>



                    <div className="title-content pb-0">
                      <div className="title-detail">
                        <h3>Describe the concern(s) for which you are seeking support </h3>
                        <div className="form-group mb-0">
                          {/* <RichTextEditor
                          value="Default value"
                          options={{
                            lang: 'ru-RU',
                            height: 350,
                            dialogsInBody: true,
                            toolbar: [
                              ['style', ['style']],
                              ['font', ['bold', 'underline', 'clear']],
                              ['fontname', ['fontname']],
                              ['para', ['ul', 'ol', 'paragraph']],
                              ['table', ['table']],
                              ['insert', ['link', 'picture', 'video']],
                              ['view', ['fullscreen', 'codeview']]
                            ]
                          }}
                        /> */}
                          <textarea onChange={onChange} id="description" className="form-control summernote" rows={5} defaultValue={""} />
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: 20 }}>
                      <p>
                        <p>Disclaimer:</p>
                        Your support request will be posted and accessible by eligible provoiders on our site.  While the providers are verified, it is best to avoid sharing any personally identifying details at this juncture.  Once you connect with a provider, you will have the ability to securely transmit personally identifiable information
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-md-12 text-end">
                        <div className="btn-item">
                          <button type="button" className="btn next-btn" onClick={onSubmit}>
                            Submit
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )

}
export default PostProject;