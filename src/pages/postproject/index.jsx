import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useEnumsContext } from "../../context/EnumsContext";
import { Post } from "../../services/Api";
import { useUserContext } from "../../context/UserContext";
import Price from "./components/Price";
import { IoCloseSharp } from "react-icons/io5";
import { TextField } from "@material-ui/core";
import Select from "../../components/Select";
import { Controller, useForm } from "react-hook-form";
const SelectedSkills = ({ selectedSkills = [], onSkillSelect = () => {} }) => {
  if (!selectedSkills.length) return null;
  return (
    <div style={{ margin: 10, display: "flex", flexWrap: "no-wrap" }}>
      {selectedSkills.map((s, i) => (
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
  const [payload, setPayload] = React.useState(initState);
  const { state } = useUserContext();
  const navigate = useNavigate();
  const currentUser = state.user;
  const {
    control,
    handleSubmit,
    watch,
    setValue,
    reset,
    register,
    formState: { errors },
  } = useForm();
  const deliveryType = watch("deliveryType");
  const pricingType = watch("pricingType");
  const handleDateChange = (date) => {
    setPayload((pre) => ({
      ...pre,
      deliveryStamp: new Date(date.target.value).getTime(),
    }));
  };
  const [skills, setSkills] = React.useState([]);
  const onSkillSelect = (skill) => {
    setSkills(
      [...skills].map((sk) => {
        if (sk._id === skill._id) return { ...sk, selected: !sk.selected };
        else return sk;
      })
    );
  };
  const onChange = (e) => {
    const id = e.target.id;
    const value = e.target.value;
    setPayload((pre) => ({
      ...pre,
      [id]: value,
    }));
  };
  if (deliveryType === "2") payload.deliveryStamp = new Date().getTime();

  const onSubmit = async (e) => {
    Object.keys(e).forEach((key) => (payload[key] = e[key]));
    try {
      const data = await Post("api/v1/project/createUpdate", {
        ...payload,
        skills: skills.filter((s) => s.selected),
        location: `${currentUser.addressLine}, ${currentUser.state}`,
      });
      alert(data.doc.message);

      setPayload((pre) => {
        Object.keys(pre).forEach((k) => {
          k === "skills" ? (pre[k] = []) : (pre[k] = "");
        });
        return pre;
      });
      setSkills(
        [...skills].map((sk) => {
          if (sk.selected) sk.selected = false;
          return sk;
        })
      );
      reset();
    } catch (error) {}
  };
  const getSkills = async () => {
    const data = await Post("api/v1/skill/search", { searchQuery: `` });
    if (data.statusCode === 200) {
      enumsState.Skills = data.doc.skills;
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
                <form onSubmit={handleSubmit(onSubmit)}>
                  <div className="title-box widget-box">
                    <div className="container">
                      <div className="row g-5">
                        <div className="col-md-4">
                          <label className="h5">Title of Support Request</label>
                          <input
                            type="text"
                            className="form-control"
                            placeholder="Enter Support title"
                            id="title"
                            onChange={onChange}
                            {...register("title", {
                              required: "Title of Support Request is required",
                            })}
                          />
                          {errors?.title && (
                            <p className="text-danger">
                              {errors?.title.message}
                            </p>
                          )}
                        </div>
                        <div className="col-md-4">
                          <Select
                            label="Support Type"
                            id="supportType"
                            onChange={onChange}
                            options={enumsState.SupportTypes}
                            defaultValue={""}
                            register={register}
                            errors={errors}
                            message="Support type is required"
                          />
                        </div>
                        <div className="col-md-4">
                          <div className="form-group">
                            <>
                              <label className="h5">Support Needed By</label>
                              <div className="container">
                                <div className="row justify-content-between align-items-center">
                                  <select
                                    className={`form-select ${
                                      deliveryType === "2" ? "col-5" : "col"
                                    }`}
                                    id="deliveryType"
                                    defaultValue={""}
                                    {...register("deliveryType", {
                                      required: "Support needed by is required",
                                    })}
                                  >
                                    <option value={""}>Select</option>
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
                                  {deliveryType === "2" ? (
                                    <TextField
                                      id="date"
                                      type="date"
                                      onChange={handleDateChange}
                                      value={new Date(payload.deliveryStamp)
                                        .toISOString()
                                        .slice(0, 10)}
                                      InputProps={{
                                        inputProps: {
                                          min: new Date().toJSON().slice(0, 10),
                                        },
                                      }}
                                      className="form-control col-6 pl-3"
                                      InputLabelProps={{
                                        shrink: true,
                                      }}
                                    />
                                  ) : (
                                    ""
                                  )}
                                  {errors?.deliveryType && (
                                    <p className="text-danger">
                                      Support needed by is required
                                    </p>
                                  )}
                                </div>
                              </div>
                            </>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <Select
                            label="Pricing Type"
                            id="pricingType"
                            onChange={onChange}
                            options={enumsState.PricingTypes}
                            register={register}
                            errors={errors}
                            message="Pricing Type is required"
                          />
                        </div>
                        <div className="col-md-4">
                          <Price
                            onChange={onChange}
                            pricingType={pricingType}
                            errors={errors}
                            register={register}
                          />
                        </div>
                        <div className="col-md-4">
                          <Select
                            label="Desired areas of expertise"
                            id="experience"
                            onChange={(e) => {
                              onSkillSelect(
                                skills.find((s) => s._id === e.target.value)
                              );
                            }}
                            options={skills}
                            defaultValue={""}
                            register={register}
                            errors={errors}
                            message="Desired areas of expertise is required"
                          />
                          <SelectedSkills
                            selectedSkills={skills.filter((s) => s.selected)}
                            onSkillSelect={onSkillSelect}
                          />
                        </div>
                        <div className="col-md-4">
                          <Select
                            label="Project Duration"
                            id="projectDuration"
                            onChange={onChange}
                            options={enumsState.ProjectDurations}
                            defaultValue={""}
                            register={register}
                            errors={errors}
                            message="Project duration is required"
                          />
                        </div>
                        <div className="col-md-4">
                          <Select
                            label="Level"
                            id="supportLevel"
                            onChange={onChange}
                            options={enumsState.SupportLevels}
                            defaultValue={""}
                            register={register}
                            errors={errors}
                            message="Level is required"
                          />
                        </div>
                        <div className="col-md-4">
                          <Select
                            label="Job type"
                            id="providerType"
                            onChange={onChange}
                            options={enumsState.ProviderTypes}
                            defaultValue={""}
                            register={register}
                            errors={errors}
                            message="Job type is required"
                          />
                        </div>
                        <div className="col-md-4">
                          <Select
                            label="Experience"
                            id="experienceLevel"
                            onChange={onChange}
                            options={enumsState.ExperienceLevels}
                            defaultValue={""}
                            register={register}
                            errors={errors}
                            message="Experience is required"
                          />
                        </div>
                        <div className="col-md-4">
                          <Select
                            label="Qualification"
                            id="qualificationType"
                            onChange={onChange}
                            options={enumsState.QualificationTypes}
                            defaultValue={""}
                            register={register}
                            errors={errors}
                            message="Qualification is required"
                          />
                        </div>
                        <br />
                        <div className="col-md-12">
                          <h5>
                            Describe the concern(s) for which you are seeking
                            support{" "}
                          </h5>
                          <textarea
                            onChange={onChange}
                            id="description"
                            className="form-control summernote"
                            rows={5}
                            defaultValue={""}
                            {...register("description", {
                              required: {
                                value: true,
                                message: "Description is required",
                              },
                            })}
                          />
                          {errors.description && (
                            <p className="text-danger">
                              {errors?.description.message}
                            </p>
                          )}
                          <p>
                            <p>Disclaimer:</p>
                            Your support request will be posted and accessible
                            by eligible provoiders on our site. While the
                            providers are verified, it is best to avoid sharing
                            any personally identifying details at this juncture.
                            Once you connect with a provider, you will have the
                            ability to securely transmit personally identifiable
                            information
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="row">
                      <div className="col-md-12 text-end">
                        <div className="btn-item">
                          <button type="submit" className="btn next-btn">
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
