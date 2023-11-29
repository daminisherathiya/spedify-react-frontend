import React from "react";

export default function Price({
  pricingType = 1,
  onChange = () => {},
  register,
  errors,
}) {
  return (
    <>
      {<label className="h5">{"Price"}</label>}
      {pricingType == 2 ? (
        <div className="row pr-3">
          <div className="input-group col-md-6 ml-0">
            <input
              type="text"
              className="form-control mr-2"
              placeholder={`min-$50`}
              id="hourlyMin"
              onChange={onChange}
              {...register("hourlyMin", {
                min: {
                  value: 50,
                  message: "Both value must be between 50-100",
                },
                max: 100,
                required: { value: true, message: "Minimum price is required" },
              })}
            />
          </div>
          <div className="input-group col-md-6">
            <input
              type="text"
              className="form-control mr-2"
              placeholder={`max-$100`}
              id="hourlyMax"
              onChange={onChange}
              {...register("hourlyMax", {
                max: {
                  value: 100,
                },
                min: 50,
                required: { value: true, message: "Maximum price is required" },
              })}
            />
          </div>
          {(errors.hourlyMax || errors.hourlyMin) && (
            <p className="text-danger">Both value must be between 50-100</p>
          )}
        </div>
      ) : (
        <>
          <div className="input-group col-md-12 p-0">
            <input
              type="text"
              className="form-control mr-2"
              placeholder={`${pricingType == 1 ? "$50" : "$0"}`}
              id="fixedPrice"
              onChange={onChange}
              {...register("fixedPrice", {
                min: { value: 0, message: "price must be in between 0-50" },
                max: { value: 50, message: "price must be in between 0-50" },
                required: { value: true, message: "Price is required" },
              })}
            />
          </div>
          {errors.fixedPrice && (
            <p className="text-danger">{errors?.fixedPrice.message}</p>
          )}
        </>
      )}
    </>
  );
}
