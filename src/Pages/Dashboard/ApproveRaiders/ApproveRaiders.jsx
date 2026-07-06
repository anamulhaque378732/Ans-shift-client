import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaTrashAlt, FaUserCheck } from "react-icons/fa";
import { IoPersonRemoveSharp } from "react-icons/io5";
import Swal from "sweetalert2";
import { FcViewDetails } from "react-icons/fc";

const ApproveRaiders = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: raiders = [] } = useQuery({
    queryKey: ["raiders", "pending"],
    queryFn: async () => {
      const res = await axiosSecure.get("/raiders");
      return res.data;
    },
  });

  const updateRaiderStatus = (raider, status) => {
    const updateInfo = { status: status, email: raider.email };

    axiosSecure.patch(`/raiders/${raider._id}`, updateInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `Rider is set to approve ${status}`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  const handleApproval = (raider) => {
    updateRaiderStatus(raider, "approved");
  };
  const handleRejection = (raider) => {
    updateRaiderStatus(raider, "rejected");
  };

  // delete a raider

  const handleRaiderDelete = (id) => {
    console.log(id);

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
        axiosSecure.delete(`/raiders/${id}`).then((res) => {
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
      <h2 className="text-5xl font-bold text-center text-secondary md:my-10 my-2 md:py-4 py-2">
        Raiders pending approval {raiders.length}
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Status</th>
              <th>District</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {raiders.map((raider, index) => (
              <tr key={raider._id}>
                <th> {index + 1}</th>
                <td> {raider.name} </td>
                <td> {raider.email}</td>
                <td>
                  <p
                    className={` ${raider.status === "approved" ? "text-green-600" : "text-red-600"}`}
                  >
                    {raider.status}
                  </p>
                </td>
                <td> {raider.district}</td>
                <td>
                  <button
                    title="View"
                    // onClick={() => handleRaiderDelete(raider._id)}
                    className="btn ml-2"
                  >
                    <FcViewDetails></FcViewDetails>
                  </button>
                  <button
                    onClick={() => handleApproval(raider)}
                    title="Accept"
                    className="btn"
                  >
                    <FaUserCheck />
                  </button>
                  <button
                    title="Reject"
                    onClick={() => handleRejection(raider)}
                    className="btn ml-2"
                  >
                    <IoPersonRemoveSharp />
                  </button>

                  <button
                    title="Trash"
                    onClick={() => handleRaiderDelete(raider._id)}
                    className="btn ml-2"
                  >
                    <FaTrashAlt />
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

export default ApproveRaiders;
