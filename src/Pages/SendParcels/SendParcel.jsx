import { useForm, useWatch } from "react-hook-form";
import { useLoaderData, useNavigate } from "react-router";
import Swal from "sweetalert2";
import useAxiosSecure from "../../Hooks/useAxiosSecure";
import useAuth from "../../Hooks/UseAuth";

const SendParcel = () => {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const serviceCenters = useLoaderData();
  const regionsDuplicate = serviceCenters.map((center) => center.region);

  const regions = [...new Set(regionsDuplicate)];

  // explore useMemo and useCallback

  const senderRegion = useWatch({ control, name: "senderRegion" });

  const receiverRegion = useWatch({ control, name: "receiverRegion" });

  const districtsByRegion = (region) => {
    const regionDistricts = serviceCenters.filter(
      (center) => center.region === region,
    );

    const districts = regionDistricts.map((d) => d.district);
    return districts;
  };

  const handleSendParcel = (data) => {
    const isDocument = data.parcelType === "document";

    const isSameDistrict = data.senderDistrict === data.receiverDistrict;

    const parcelWeight = parseFloat(data.parcelWeight);

    let cost = 0;
    console.log(cost);

    if (isDocument) {
      cost = isSameDistrict ? 60 : 80;
    } else {
      if (parcelWeight < 3) {
        cost = isSameDistrict ? 110 : 150;
      } else {
        const minCharge = isSameDistrict ? 110 : 150;

        const extraWeight = parcelWeight - 3;

        const extraCharge = isSameDistrict
          ? extraWeight * 40
          : extraWeight * 40 + 40;
        cost = minCharge + extraCharge;
      }
    }
    data.cost = cost;

    Swal.fire({
      title: "Agree with the cost?",
      text: `You  will be charged  ${cost} TK`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "  Confirm and continue!",
    }).then((result) => {
      if (result.isConfirmed) {
        // save the parcel info to the data base

        axiosSecure.post("/parcels", data).then((res) => {
          if (res.data.insertedId) {
            navigate("/dashboard/myParcels");
            Swal.fire({
              position: "top-end",
              icon: "success",
              title: "Parcel ha created Please pay",
              showConfirmButton: false,
              timer: 2500,
            });
          }
        });
      }
    });
  };

  return (
    <div className="my-4 md:my-12   lg:my-16 px-4 md:px-10">
      <h2 className="text-4xl font-bold my-2 md:my-6 py-2 md:py-6">
        Send a Parcel
      </h2>
      <hr className="text-black" />
      <form
        className="mt-6 md:mt-12 text-black"
        onSubmit={handleSubmit(handleSendParcel)}
      >
        {/* parcel type */}
        <div className="  ">
          <label className="label mr-4">
            <input
              value="document"
              type="radio"
              {...register("parcelType")}
              className="radio"
              defaultChecked
            />
            Document
          </label>
          <label className="label">
            <input
              value="non-document"
              type="radio"
              {...register("parcelType")}
              className="radio"
              defaultChecked
            />
            Non-Document
          </label>
        </div>
        {/*Parcel info: name weight  */}
        <div className="grid grid-cols-1 md:my-8 my-4 md:grid-cols-2 md:gap-12 gap-4">
          <fieldset className="fieldset">
            <label className="label text-xl font-medium">Parcel Name</label>
            <input
              type="text"
              {...register("parcelName")}
              className="input w-full"
              placeholder="Parcel name"
            />
          </fieldset>
          <fieldset className="fieldset">
            <label className="label font-medium text-xl">
              Parcel weight (kg)
            </label>
            <input
              type="number"
              {...register("parcelWeight")}
              className="input w-full"
              placeholder="Parcel weight"
            />
          </fieldset>
        </div>

        {/*  two column  */}

        <div className="grid grid-cols-1 md:grid-cols-2 md:my-8 my-4 md:gap-12 gap-4">
          {/* sender details */}
          <div>
            <fieldset className="fieldset">
              <h4 className="text-2xl mt-2 pt-2 font-medium">Sender details</h4>

              {/* Sender name */}
              <label className="label mt-2 text-xl font-medium">
                Sender Name
              </label>
              <input
                type="text"
                {...register("senderName")}
                defaultValue={user?.displayName}
                className="input w-full font-medium"
                placeholder="Sender name"
              />

              {/* Sender email */}
              <label className="label mt-2 text-xl font-medium">
                Sender Email
              </label>
              <input
                type="email"
                {...register("senderEmail", { required: true })}
                defaultValue={user?.email}
                className="input w-full font-medium"
                placeholder="Sender Email"
              />

              {errors.email?.type === "required" && (
                <p className="text-red-500"> Email is required</p>
              )}
              {/* sender region */}

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">
                  Sender Regions
                </legend>
                <select
                  {...register("senderRegion")}
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

              {/* sender districts */}

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">
                  Sender districts
                </legend>
                <select
                  {...register("senderDistrict")}
                  defaultValue="Pick a districts"
                  className="select w-full"
                >
                  <option disabled={true} className="">
                    Pick a Region
                  </option>
                  {districtsByRegion(senderRegion).map((reg, idx) => (
                    <option key={idx} value={reg}>
                      {reg}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Sender address */}

              <label className="label mt-4  text-xl font-medium">
                Sender Address
              </label>
              <input
                type="text"
                {...register("senderAddress")}
                className="input w-full"
                placeholder="Sender address"
              />

              {/* sender phone number */}

              <label className="label mt-4  text-xl font-medium">
                Sender phone number
              </label>
              <input
                type="number"
                {...register("senderPhoneNumber")}
                className="input w-full"
                placeholder="Sender phone number"
              />

              {/* Pickup instruction */}

              <label className=" label text-xl mt-4">Pickup instruction</label>
              <textarea
                {...register("pickupInstruction")}
                className="textarea h-24 w-full"
                placeholder="Pickup instruction (Optional)"
              ></textarea>
            </fieldset>
          </div>

          {/* receiver info */}

          <div>
            <fieldset className="fieldset">
              <h4 className="text-2xl mt-2 pt-2 font-medium">
                Receiver details
              </h4>

              {/* Receiver name */}

              <label className="label mt-2 text-xl font-medium">
                Receiver Name
              </label>
              <input
                type="text"
                {...register("receiverName")}
                className="input w-full font-medium"
                placeholder="Receiver name"
              />

              {/* Receiver email */}

              <label className="label mt-2 text-xl font-medium">
                Receiver Email
              </label>
              <input
                type="email"
                {...register("ReceiverEmail", { required: true })}
                className="input w-full font-medium"
                placeholder="Receiver Email"
              />
              {errors.email?.type === "required" && (
                <p className="text-red-500"> Email is required</p>
              )}

              {/* receiver Region */}

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">
                  Receiver Regions
                </legend>
                <select
                  {...register("receiverRegion")}
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

              {/* receiver district */}

              <fieldset className="fieldset">
                <legend className="fieldset-legend text-xl">
                  Receiver district
                </legend>
                <select
                  {...register("receiverDistrict")}
                  defaultValue="Pick a district"
                  className="select w-full"
                >
                  <option disabled={true} className="">
                    Pick a District
                  </option>
                  {districtsByRegion(receiverRegion).map((dis, idx) => (
                    <option value={dis} key={idx}>
                      {" "}
                      {dis}
                    </option>
                  ))}
                </select>
              </fieldset>

              {/* Receiver  address */}

              <label className="label mt-4  text-xl font-medium">
                Receiver Address
              </label>
              <input
                type="text"
                {...register("receiverAddress")}
                className="input w-full"
                placeholder="Receiver address"
              />

              {/*Receiver  phone number */}

              <label className="label mt-4  text-xl font-medium">
                Receiver phone number
              </label>
              <input
                type="number"
                {...register("receiverPhoneNumber")}
                className="input w-full"
                placeholder="Receiver phone number"
              />
              {/* Pickup instruction */}

              <label className=" label text-xl mt-4">
                Delivery instruction
              </label>
              <textarea
                {...register("deliveryInstruction")}
                className="textarea h-24 w-full"
                placeholder="Delivery instruction (Optional)"
              ></textarea>
            </fieldset>
          </div>
        </div>
        <div className="text-center">
          <input
            type="submit"
            value=" Send Parcel"
            className="btn btn-primary hover:bg-secondary w-full hover:text-white text-xl  md:w-1/2 mx-auto text-black"
          />
        </div>
      </form>
    </div>
  );
};

export default SendParcel;
