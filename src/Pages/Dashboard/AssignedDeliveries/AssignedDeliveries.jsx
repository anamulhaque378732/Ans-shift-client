import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import Swal from "sweetalert2";

const AssignedDeliveries = () => {
  const { user } = useAuth();

  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["parcels", user.email, "driver_assign"],

    queryFn: async () => {
      const res = await axiosSecure.get(
        `/parcels/raider?raiderEmail=${user.email}&deliveryStatus=driver_assign`,
      );

      return res.data;
    },
  });

  const handleAcceptDeliveryStatusUpdate = (parcel, status) => {
    const statusInfo = {
      deliveryStatus: status,
    };
    let message = `Parcel status is updated with ${status.split("_").join(" ")} `;
    axiosSecure
      .patch(`/parcels/${parcel._id}/status`, statusInfo)
      .then((res) => {
        if (res.data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
              <th> Others Status</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td> {parcel.parcelName} </td>
                <td>
                  {parcel.deliveryStatus === "driver_assign" ? (
                    <>
                      <button
                        onClick={() =>
                          handleAcceptDeliveryStatusUpdate(
                            parcel,
                            "driver_accept",
                          )
                        }
                        className="btn btn-primary text-black mr-2"
                      >
                        Accept
                      </button>
                      <button className="btn btn-warning text-black">
                        Reject
                      </button>
                    </>
                  ) : (
                    <span> Accepted</span>
                  )}
                </td>
                <td>
                  <button
                    onClick={() =>
                      handleAcceptDeliveryStatusUpdate(
                        parcel,
                        "parcel_picked_up",
                      )
                    }
                    className="btn btn-primary text-black mr-2"
                  >
                    Mark as Picked up
                  </button>

                  <button
                    onClick={() =>
                      handleAcceptDeliveryStatusUpdate(
                        parcel,
                        "parcel_delivered",
                      )
                    }
                    className="btn btn-primary text-black mr-2"
                  >
                    Mark as Delivered
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

export default AssignedDeliveries;
