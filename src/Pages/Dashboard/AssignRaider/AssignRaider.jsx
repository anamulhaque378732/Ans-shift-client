import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { IoEyeSharp } from "react-icons/io5";
import { RiEBike2Fill } from "react-icons/ri";

const AssignRaider = () => {
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [] } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup",
      );
      console.log(res.data);

      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-5 py-2">
        Assign Raider : {parcels.length}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th> Type </th>
                <th> Cost </th>
                <th> Parcel Weight </th>
                <th>Receiver Name </th>
                <th> Action </th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}

              {parcels.map((parcel, index) => (
                <tr key={parcel._id}>
                  <th> {index + 1} </th>
                  <td> {parcel.parcelName} </td>
                  <td> {parcel.parcelType} </td>
                  <td> {parcel.cost} </td>
                  <td> {parcel.parcelWeight} </td>
                  <td> {parcel.receiverName} </td>
                  <td>
                    <button
                      title="Assign Raider"
                      className="btn btn-primary text-black"
                    >
                      <RiEBike2Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AssignRaider;
