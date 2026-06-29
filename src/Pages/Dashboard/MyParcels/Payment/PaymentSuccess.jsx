import { useEffect } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`payment-success?session_id=${sessionId}`)
        .then((res) => console.log(res.data));
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h2 className="text-4xl font-bold my-4 py-4">Payment successful</h2>
    </div>
  );
};

export default PaymentSuccess;
