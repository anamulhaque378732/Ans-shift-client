import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const AssignedDeliveries = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user.email, "driver_assign"],

    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/raider?raiderEmail=${user.email}&deliveryStatus=driver_assign`,
      );

      return res.data;
    },
  });

  return (
    <div className="md:my-4 py-2 my-2 md:py-4 mx-auto">
      <h1 className="text-center text-4xl font-bold text-primary">
        Parcel Pending pickup : {parcels.length}
      </h1>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Confirm</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td> {parcel.parcelName} </td>
                <td>
                  <button className="btn btn-primary text-black mr-2">
                    Accept
                  </button>
                  <button className=" btn btn-warning text-black">
                    Reject
                  </button>
                </td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AssignedDeliveries;
