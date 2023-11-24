import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useEnumsContext } from "../../context/EnumsContext";
import { Post } from "../../services/Api";
import { useUserContext } from "../../context/UserContext";
import Price from "./components/Price";
import { IoCloseSharp } from "react-icons/io5";
import { DatePicker, Input } from "antd";
import moment from "moment/moment";
import { TextField } from "@material-ui/core";
// import ReactSummernote from 'react-summernote';
// import 'react-summernote/dist/react-summernote.css';
const SelectedSkills = ({
  selectedSkills = [],
  onSkillSelect = () => {},
  handleRemoveSkills,
}) => {
  if (!selectedSkills.length) return null;
  // const removeSkills = (removedSkill) => {
  //   const updatedSkills = selectedSkills.filter(
  //     (skill) => skill?._id !== removedSkill?._id
  //   );
  //   onSkillSelect(updatedSkills);
  // };
  return (
    <div style={{ margin: 10, display: "flex", flexWrap: "wrap" }}>
      {selectedSkills.map((s, i) => (
        <>
          <span
            key={`selected-skill-${i}`}
            className="mb-0 position-relative"
            style={{
              cursor: "pointer",
              textAlign: "center",
              padding: 10,
              borderRadius: 5,
              backgroundColor: "#d3dded",
              margin: 10,
            }}
            onClick={() => onSkillSelect(s)}
          >
            {s.name}
            <IoCloseSharp
              size={10}
              onClick={() => handleRemoveSkills(s)}
              style={{
                backgroundColor: "#fff",
                position: "absolute",
                top: "-10px",
                right: "-10px",
                // paddingTop: "10px",
                borderRadius: "50%",
                width: "20px",
                height: "20px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            />
          </span>
        </>
      ))}
    </div>
  );
};
const initState = {
  _id: "",
  title: "",
  description: "",
  supportType: 0,
  pricingType: 0,
  skills: [],
  deliveryStamp: 0,
  deliveryType: 0,
  location: "",
  fixedPrice: 0,
  hourlyMin: 0,
  hourlyMax: 0,
};
const PostProject = (props) => {
  const { enumsState } = useEnumsContext();
  const { state } = useUserContext();
  const currentUser = state.user;
  const [payload, setPayload] = React.useState(initState);
  // const [selectedOption, setSelectedOption] = React.useState("Select");
  // const [selectedDate, setSelectedDate] = React.useState(null);

  const handleDateChange = (date, dateString) => {
    // setSelectedOption(dateString);
    enumsState.DeliveryTypes[1] = { text: date.target.value, value: 2 };
    setPayload((pre) => ({
      ...pre,
      deliveryStamp: new Date(date.target.value).getTime(),
    }));
  };
  console.log("payload", payload, enumsState);
  const [skills, setSkills] = React.useState([]);
  const onSkillSelect = (skill) => {
    setSkills(
      [...skills].map((sk, j) => {
        if (sk._id === skill._id) return { ...sk, selected: !sk.selected };
        else return sk;
      })
    );
  };
  const handleRemoveSkills = (removeSkill) => {
    setSkills(
      [...skills].filter((singleSkill) => singleSkill?._id !== removeSkill?._id)
    );
  };

  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    // setSelectedOption(value);
    setPayload((pre) => ({
      ...pre,
      [id]: value,
    }));
  };
  const onSubmit = async () => {
    try {
      const data = await Post("api/v1/project/createUpdate", {
        ...payload,
        skills: skills.filter((s) => s.selected)?._id,
        location: `${currentUser.addressLine}, ${currentUser.state}`,
      });
      setPayload(initState);
      alert(data.doc.message);
      console.log(data);
    } catch (error) {}
  };
  const getSkills = async () => {
    const data = await Post("api/v1/skill/search", { searchQuery: `` });
    // console.log('[onChangeSkills].data', data);
    if (data.statusCode === 200) {
      setSkills(data.doc.skills);
    }
  };
  React.useEffect(() => {
    getSkills();
  }, []);
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
                          <div className="form-group mb-0 pr-md-3">
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
                          <div className="form-group mb-0 pr-md-3">
                            <select
                              className="form-control select"
                              id="supportType"
                              onChange={onChange}
                            >
                              <option value={0}>Select</option>
                              {(enumsState.SupportTypes || []).map(
                                (supportType, index) => {
                                  return (
                                    <option
                                      value={supportType.value}
                                      key={`support-key-${index}`}
                                    >
                                      {supportType.text}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Support Needed By</h3>
                          <div className="form-group mb-0  px-md-3 row gap-3">
                            {payload.deliveryType === "2" ? (
                              <>
                                <select
                                  className="form-control select col-5"
                                  id="deliveryType"
                                  onChange={onChange}
                                >
                                  <option value={0}>Select</option>
                                  {(enumsState.DeliveryTypes || []).map(
                                    (supportType, index) => {
                                      return (
                                        <option
                                          value={supportType.value}
                                          key={`support-key-${index}`}
                                        >
                                          {supportType.text}
                                        </option>
                                      );
                                    }
                                  )}
                                </select>
                                {/* <Input
                                  type="date"
                                  required
                                  min={new Date().toJSON().slice(0, 10)}
                                  className="form-control input col-6"
                                  onChange={handleDateChange}
                                  value={payload.deliveryStamp}
                                /> */}
                                <TextField
                                  id="date"
                                  label="Pick Time"
                                  type="date"
                                  onChange={handleDateChange}
                                  value={payload.deliveryStamp}
                                  InputProps={{
                                    inputProps: {
                                      min: new Date().toJSON().slice(0, 10),
                                    },
                                  }}
                                  className="form-control input col-6"
                                  InputLabelProps={{
                                    shrink: true,
                                  }}
                                />
                              </>
                            ) : (
                              <select
                                className="form-control select"
                                id="deliveryType"
                                onChange={onChange}
                              >
                                <option value={0}>Select</option>
                                {(enumsState.DeliveryTypes || []).map(
                                  (supportType, index) => {
                                    return (
                                      <option
                                        value={supportType.value}
                                        key={`support-key-${index}`}
                                      >
                                        {supportType.text}
                                      </option>
                                    );
                                  }
                                )}
                              </select>
                            )}
                            {/* <select
                              className="form-control select"
                              id="deliveryType"
                              onChange={onChange}
                            >
                              <option value={0}>Select</option>
                              {(enumsState.DeliveryTypes || []).map(
                                (supportType, index) => {
                                  return (
                                    <option
                                      value={supportType.value}
                                      key={`support-key-${index}`}
                                    >
                                      {supportType.text}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                            {payload.deliveryType === "2" && (
                              // <DatePicker
                              //   onChange={handleDateChange}
                              //   value={
                              //     payload.deliveryType &&
                              //     moment(payload.deliveryType)
                              //   }
                              // />
                              <input
                                type="date"
                                className="form-control select"
                                onChange={handleDateChange}
                                value={
                                  payload.deliveryType &&
                                  moment(payload.deliveryType)
                                }
                              />
                            )} */}
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Pricing Type</h3>
                          <div
                            className="form-group price-cont mb-0 pr-md-3"
                            id="price_type"
                          >
                            <select
                              name="price"
                              className="form-control select"
                              id="pricingType"
                              onChange={onChange}
                            >
                              <option value={0}>Select</option>
                              {(enumsState.PricingTypes || []).map(
                                (pricingType, index) => {
                                  return (
                                    <option
                                      value={pricingType.value}
                                      key={`support-key-${index}`}
                                    >
                                      {pricingType.text}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>

                      <Price
                        onChange={onChange}
                        pricingType={payload.pricingType}
                      />

                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Desired areas of expertise </h3>
                          <div className="form-group mb-0">
                            <select
                              name="price"
                              className="form-control select"
                              onChange={(e) => {
                                onSkillSelect(
                                  skills.find((s) => s._id === e.target.value)
                                );
                              }}
                            >
                              <option value={0}>Select</option>
                              {(skills || []).map((skill, index) => {
                                return (
                                  <option
                                    value={skill._id}
                                    key={`support-key-${index}`}
                                  >
                                    {skill.name}
                                  </option>
                                );
                              })}
                            </select>
                            <SelectedSkills
                              selectedSkills={skills.filter((s) => s.selected)}
                              onSkillSelect={onSkillSelect}
                              handleRemoveSkills={handleRemoveSkills}
                            />
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Project Durtion</h3>
                          <div className="form-group mb-0 pr-md-3">
                            <select
                              className="form-control select"
                              id="projectDuration"
                              onChange={onChange}
                            >
                              <option value={0}>Select</option>
                              {(enumsState.ProjectDurations || []).map(
                                (projectDuration, index) => {
                                  return (
                                    <option
                                      value={projectDuration.value}
                                      key={`support-key-${index}`}
                                    >
                                      {projectDuration.text}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>

                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Level</h3>
                          <div className="form-group mb-0 pr-md-3">
                            <select
                              className="form-control select"
                              id="supportLevel"
                              onChange={onChange}
                            >
                              <option value={0}>Select</option>
                              {(enumsState.SupportLevels || []).map(
                                (supportLevel, index) => {
                                  return (
                                    <option
                                      value={supportLevel.value}
                                      key={`support-key-${index}`}
                                    >
                                      {supportLevel.text}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Job type</h3>
                          <div className="form-group mb-0 pr-md-3">
                            <select
                              className="form-control select"
                              id="providerType"
                              onChange={onChange}
                            >
                              <option value={0}>Select</option>
                              {(enumsState.ProviderTypes || []).map(
                                (providerType, index) => {
                                  return (
                                    <option
                                      value={providerType.value}
                                      key={`support-key-${index}`}
                                    >
                                      {providerType.text}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Experience</h3>
                          <div className="form-group mb-0 pr-md-3">
                            <select
                              className="form-control select"
                              id="experienceLevel"
                              onChange={onChange}
                            >
                              <option value={0}>Select</option>
                              {(enumsState.ExperienceLevels || []).map(
                                (experienceLevel, index) => {
                                  return (
                                    <option
                                      value={experienceLevel.value}
                                      key={`support-key-${index}`}
                                    >
                                      {experienceLevel.text}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                      <div className="title-content col-md-4">
                        <div className="title-detail">
                          <h3>Qualification</h3>
                          <div className="form-group mb-0 pr-md-3">
                            <select
                              className="form-control select"
                              id="qualificationType"
                              onChange={onChange}
                            >
                              <option value={0}>Select</option>
                              {(enumsState.QualificationTypes || []).map(
                                (qualificationType, index) => {
                                  return (
                                    <option
                                      value={qualificationType.value}
                                      key={`support-key-${index}`}
                                    >
                                      {qualificationType.text}
                                    </option>
                                  );
                                }
                              )}
                            </select>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="title-content pb-0">
                      <div className="title-detail">
                        <h3>
                          Describe the concern(s) for which you are seeking
                          support{" "}
                        </h3>
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
                          <textarea
                            onChange={onChange}
                            id="description"
                            className="form-control summernote"
                            rows={5}
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: 20 }}>
                      <p>
                        <p>Disclaimer:</p>
                        Your support request will be posted and accessible by
                        eligible provoiders on our site. While the providers are
                        verified, it is best to avoid sharing any personally
                        identifying details at this juncture. Once you connect
                        with a provider, you will have the ability to securely
                        transmit personally identifiable information
                      </p>
                    </div>

                    <div className="row">
                      <div className="col-md-12 text-end">
                        <div className="btn-item">
                          <button
                            type="button"
                            className="btn next-btn"
                            onClick={onSubmit}
                          >
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
  );
};
export default PostProject;
