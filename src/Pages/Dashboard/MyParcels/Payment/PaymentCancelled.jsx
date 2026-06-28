import { Link } from "react-router";

const PaymentCancelled = () => {
  return (
    <div>
      <h2 className="text-4xl my-4 py-5 font-bold">
        Payment is Cancelled. Please try again
      </h2>
      <Link to="/dashboard/myParcels">
        <button className="btn btn-secondary text-white"> Try Again</button>
      </Link>
    </div>
  );
};

export default PaymentCancelled;
