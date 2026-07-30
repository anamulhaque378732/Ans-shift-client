import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/useAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const CompletedDeliveries = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", user.email, "deliver_assigned"],

    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/raider?raiderEmail=${user.email}&deliveryStatus=parcel_delivered`,
      );

      return res.data;
    },
  });

  const calculatePayout = (parcel) => {
    if (parcel.senderDistrict === parcel.receiverDistrict) {
      return parcel.cost * 0.6;
    } else {
      return parcel.cost * 0.8;
    }
  };

  console.log(parcels);

  return (
    <div>
      <h2 className="text-4xl font-bold text-center md:my-6 md:py-4 my-2 py-2 text-primary">
        Completed Deliveries : {parcels.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th> Reciver district</th>
              <th>Cost</th>
              <th>Payout</th>
              <th> Activity</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td> {parcel.parcelName} </td>
                <td> {parcel.receiverDistrict}</td>
                <td> {parcel.cost} </td>
                <td> {calculatePayout(parcel)}</td>
                <td>
                  {" "}
                  <button className="btn btn-primary text-black ">
                    {" "}
                    Cashout{" "}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CompletedDeliveries;
