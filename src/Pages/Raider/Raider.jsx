import { useForm, useWatch } from "react-hook-form";
import useAuth from "../../Hooks/UseAuth";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import { useLoaderData } from "react-router";

const Raider = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((center) => center.region);

  const regions = [...new Set(regionsDuplicate)];

  // explore useMemo and useCallback

  const senderRegion = useWatch({ control, name: "senderRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(
      (center) => center.region === region,
    );

    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };
  const handleSendRaiderApplication = (data) => {
    console.log(data);
  };

  return (
    <div className="  mx-auto md:mb-10 mb-2">
      <h2 className="text-4xl font-bold my-2 text-center py-2 text-primary">
        Be a raider
      </h2>
      <form
        className="mt-6 md:mt-12 text-black"
        onSubmit={handleSubmit(handleSendRaiderApplication)}
      >
        {/*   Your details*/}
        <div>
          <fieldset className="fieldset">
            <h4 className="text-2xl mt-2 pt-2 font-medium">
              Tell us About yourself
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-2 md:my-8 my-4 md:gap-12 gap-4">
              <div>
                {/*   Your Name   */}

                <label className="label mt-2 md:mb-2 text-xl font-medium">
                  Your Name
                </label>
                <input
                  type="text"
                  {...register("name")}
                  defaultValue={user?.displayName}
                  className="input w-full font-medium"
                  placeholder="your name"
                />
                {/*  raider email */}
                <label className="label mt-2 text-xl md:mb-2 font-medium">
                  Your Email
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  defaultValue={user?.email}
                  className="input w-full font-medium"
                  placeholder="Email"
                />
                {errors.email?.type === "required" && (
                  <p className="text-red-500"> Email is required</p>
                )}
                {/*  raider region */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend md:mb-3 text-xl">
                    Your Regions
                  </legend>
                  <select
                    {...register("region")}
                    defaultValue="Pick a Region"
                    className="select w-full"
                  >
                    <option disabled={true} className="">
                      Pick a Region
                    </option>
                    {regions.map((reg, idx) => (
                      <option key={idx} value={reg}>
                        {reg}
                      </option>
                    ))}
                  </select>
                </fieldset>
                {/*  raider districts */}
                <fieldset className="fieldset">
                  <legend className="fieldset-legend md:mb-3 text-xl">
                    Your Districts
                  </legend>
                  <select
                    {...register("district")}
                    defaultValue="Pick a districts"
                    className="select w-full"
                  >
                    <option disabled={true} className="">
                      Pick a District
                    </option>
                    {districtsByRegion(senderRegion).map((reg, idx) => (
                      <option key={idx} value={reg}>
                        {reg}
                      </option>
                    ))}
                  </select>
                </fieldset>
                {/*  Raider address */}
                <label className="label mt-4 md:mb-3  text-xl font-medium">
                  Your Address
                </label>
                <input
                  type="text"
                  {...register("raiderAddress")}
                  className="input w-full"
                  placeholder=" Raider address"
                />
              </div>
              <div>
                {/*  Raider phone number */}

                <label className="label mt-4  text-xl font-medium">
                  Your phone number
                </label>
                <input
                  type="number"
                  {...register("raiderPhoneNumber")}
                  className="input w-full"
                  placeholder=" raider phone number"
                />
                {/* bike license number */}

                <label className="label mt-4  text-xl font-medium">
                  Bike license number
                </label>
                <input
                  type="number"
                  {...register("bikeLicenseNumber")}
                  className="input w-full"
                  placeholder="bike license number"
                />
                {/*  Bike Brand model */}

                <label className="label mt-4  text-xl font-medium">
                  Bike Brand model
                </label>
                <input
                  type="text"
                  {...register("bikeBrandModel")}
                  className="input w-full"
                  placeholder=" Bike Brand model"
                />
                {/* Bike Registration Number */}
                <label className="label mt-4  text-xl font-medium">
                  Bike Registration Number
                </label>
                <input
                  type="text"
                  {...register("BikeRegistrationNumber")}
                  className="input w-full"
                  placeholder=" Bike Registration Number"
                />

                {/*  Tell about your self */}

                <label className=" label text-xl mt-4">
                  {" "}
                  Tell About yourself
                </label>
                <textarea
                  {...register("pickupInstruction")}
                  className="textarea h-24 w-full"
                  placeholder="Pickup instruction (Optional)"
                ></textarea>
              </div>
            </div>
          </fieldset>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value="Be  Raider"
            className="btn btn-primary hover:bg-secondary w-full hover:text-white text-xl  md:w-1/2 mx-auto text-black"
          />
        </div>
      </form>
    </div>
  );
};

export default Raider;
