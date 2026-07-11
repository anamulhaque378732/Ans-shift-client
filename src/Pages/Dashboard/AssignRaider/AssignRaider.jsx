import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

import { useRef, useState } from "react";
import Swal from "sweetalert2";

const AssignRaider = () => {
  const [selectedParcel, setSelectedParcel] = useState(null);

  const axiosSecure = useAxiosSecure();
  const raiderModalRef = useRef();

  const { data: parcels = [], refetch: parcelsRefetch } = useQuery({
    queryKey: ["parcels", "pending-pickup"],
    queryFn: async () => {
      const res = await axiosSecure.get(
        "/parcels?deliveryStatus=pending-pickup",
      );

      return res.data;
    },
  });

  // TODO: invalidate query after assign a raider

  const { data: raiders = [] } = useQuery({
    queryKey: ["raiders", selectedParcel?.senderDistrict, "available"],
    enabled: !!selectedParcel,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/raiders?status=approved&district=${selectedParcel?.senderDistrict}&workStatus=available`,
      );

      return res.data;
    },
  });

  const openAssignRaiderModal = (parcel) => {
    setSelectedParcel(parcel);

    raiderModalRef.current.showModal();
  };

  const handleAssignRaider = (raider) => {
    const raiderAssignInfo = {
      raiderId: raider._id,
      raiderEmail: raider.email,
      raiderName: raider.name,
      parcelId: selectedParcel._id,
    };

    axiosSecure
      .patch(`/parcels/${selectedParcel._id}`, raiderAssignInfo)
      .then((res) => {
        raiderModalRef.current.close();

        parcelsRefetch();

        if (res.data.modifiedCount) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `Raider has been assign`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <h2 className="text-5xl font-bold text-center my-5 py-2">
        Assign Raider : {parcels.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th> Created at </th>
              <th> Cost </th>
              <th> Pickup district </th>
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
                <td> {parcel.createdAt} </td>
                <td> {parcel.cost} </td>
                <td> {parcel.senderDistrict} </td>
                <td> {parcel.receiverName} </td>
                <td>
                  <button
                    onClick={() => openAssignRaiderModal(parcel)}
                    title="Assign Raider"
                    className="btn btn-primary text-black"
                  >
                    Find Raider
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <dialog
        ref={raiderModalRef}
        className="modal modal-bottom sm:modal-middle"
      >
        <div className="modal-box">
          <h3 className="font-bold text-lg"> Raiders: {raiders.length} </h3>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th></th>
                  <th>Name</th>
                  <th>Email</th>
                  <th> Action</th>
                </tr>
              </thead>
              <tbody>
                {/* Raider */}
                {raiders.map((raider, index) => (
                  <tr key={raider._id}>
                    <th> {index + 1}</th>
                    <td> {raider.name} </td>
                    <td> {raider.email} </td>
                    <td>
                      <button
                        onClick={() => handleAssignRaider(raider)}
                        className="btn text-black btn-primary"
                      >
                        Assign
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AssignRaider;
