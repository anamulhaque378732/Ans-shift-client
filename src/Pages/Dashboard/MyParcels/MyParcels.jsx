import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { CiEdit } from "react-icons/ci";
import { MdDeleteForever, MdOutlineSecurityUpdate } from "react-icons/md";
import { FaMagnifyingGlass } from "react-icons/fa6";
import Swal from "sweetalert2";

const MyParcels = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: parcels = [], refetch } = useQuery({
    queryKey: ["myParcels", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/parcels?email=${user.email}`);

      return res.data;
    },
  });
  const handleParcelDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true,
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/parcels/${id}`).then((res) => {
          if (res.data.deletedCount) {
            // refresh the data in the ui

            refetch();

            Swal.fire({
              title: "Deleted!",
              text: "Your parcel request has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-3xl md:my-12 py-2 font">
        All of my parcel : {parcels.length}
      </h2>
      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Cost</th>
              <th> Payment status</th>
              <th> Action</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel, index) => (
              <tr key={parcel._id}>
                <th>{index + 1}</th>
                <td> {parcel.parcelName}</td>
                <td> {parcel.parcelWeight}</td>
                <td>true</td>
                <td className="">
                  <button
                    title="Edit"
                    className="btn btn-square mr-1 hover:bg-secondary hover:text-white"
                  >
                    <CiEdit />
                  </button>
                  <button
                    title="Update"
                    className="btn   btn-square mr-1 hover:bg-secondary hover:text-white"
                  >
                    <MdOutlineSecurityUpdate />
                  </button>

                  <button
                    title="View details"
                    className="btn btn-square hover:bg-secondary mr-1 hover:text-white"
                  >
                    <FaMagnifyingGlass />
                  </button>
                  <button
                    onClick={() => handleParcelDelete(parcel._id)}
                    title="Delete"
                    className="btn btn-square hover:bg-secondary hover:text-white"
                  >
                    <MdDeleteForever />
                  </button>
                </td>
              </tr>
            ))}
            {/* row 1 */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcels;
