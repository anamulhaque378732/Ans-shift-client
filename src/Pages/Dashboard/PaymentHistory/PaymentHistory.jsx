import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../Hooks/UseAuth";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: payments = [] } = useQuery({
    queryKey: ["payments", user.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/payments?email=${user.email}`);

      return res.data;
    },
  });

  return (
    <div>
      <h2 className="text-4xl font-bold my-2 py-2 text-center mx-auto">
        Payment History
      </h2>

      <div className="overflow-x-auto md:my-4 md:py-4 my-2 py-2 items-center mx-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th> Name</th>
              <th>Amount</th>
              <th> Transaction Id </th>

              <th> Paid time </th>

              <th> Action </th>
            </tr>
          </thead>
          <tbody>
            {payments.map((payment, index) => (
              <tr key={payment._id}>
                <th>{index + 1}</th>
                <td> {payment.parcelName}</td>
                <td> ${payment.amount} </td>
                <td> {payment.transactionId} </td>
                <td>{payment.paidAt}</td>
                <td>
                  <button className="btn">View</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
