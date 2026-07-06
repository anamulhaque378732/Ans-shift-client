import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { FaUserShield } from "react-icons/fa";
import { FiShieldOff } from "react-icons/fi";
import Swal from "sweetalert2";

const UserManagement = () => {
  const axiosSecure = useAxiosSecure();

  const { refetch, data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users`);
      return res.data;
    },
  });

  const handleMakeUser = (user) => {
    const roleInfo = { role: "admin" };

    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: ` ${user.displayName}   marked as an Admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };
  const handleRemoveAdmin = (user) => {
    const roleInfo = { role: "user" };

    axiosSecure.patch(`/users/${user._id}`, roleInfo).then((res) => {
      if (res.data.modifiedCount) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: ` ${user.displayName}   marked as an Admin`,
          showConfirmButton: false,
          timer: 2000,
        });
      }
    });
  };

  return (
    <div>
      <h2 className="text-4xl font-bold my-4 py-2 text-center">
        Manage Users : {users.length}{" "}
      </h2>
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
                <th> Role</th>
                <th>Admin Action</th>
                <th> Others Action</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th> {index + 1} </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img src={user.photoURL} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{user.displayName}</div>
                      </div>
                    </div>
                  </td>
                  <td> {user.email} </td>
                  <td>{user.role}</td>

                  <td>
                    {user.role === "admin" ? (
                      <button
                        className="btn bg-red-400"
                        onClick={() => handleRemoveAdmin(user)}
                      >
                        <FiShieldOff></FiShieldOff>
                      </button>
                    ) : (
                      <button
                        className="btn bg-green-400"
                        onClick={() => handleMakeUser(user)}
                      >
                        <FaUserShield></FaUserShield>
                      </button>
                    )}
                  </td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
