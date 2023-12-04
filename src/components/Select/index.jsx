import React from "react";

export default ({
  label = "",
  id = "",
  onChange = () => {},
  options = [],
  defaultValue = "",
  register,
  errors,
  message = "This field is required",
}) => {
  return (
    <div className="form-group">
      {label && <label className="h5">{label}</label>}
      {id === "experience" ? (
        <select
          id={id}
          className="form-select"
          defaultValue={defaultValue}
          {...register(id, { required: message, onChange: onChange })}
        >
          <option value="">Select</option>
          {options.map((option) => (
            <option
              className={option?.selected ? "text-white bg-success " : ""}
              key={`option-key-${option._id}}`}
              value={option._id}
            >
              {option.name}
            </option>
          ))}
        </select>
      ) : (
        <select
          id={id}
          onChange={onChange}
          className="form-select"
          defaultValue={defaultValue}
          {...register(id, { required: message })}
        >
          <option value="">Select</option>
          {options.map((option, i) => (
            <option key={`option-key-${i}}`} value={option.value}>
              {option.text}
            </option>
          ))}
        </select>
      )}

      {errors?.[id] && <p className="text-danger">{errors?.[id].message}</p>}
    </div>
  );
};
