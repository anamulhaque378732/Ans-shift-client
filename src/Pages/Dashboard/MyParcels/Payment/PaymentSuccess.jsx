import { useEffect, useState } from "react";
import { useSearchParams } from "react-router";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentSuccess = () => {
  const [searchParams] = useSearchParams();
  const [paymentInfo, setPaymentInfo] = useState({});
  const axiosSecure = useAxiosSecure();
  const sessionId = searchParams.get("session_id");

  useEffect(() => {
    if (sessionId) {
      axiosSecure
        .patch(`payment-success?session_id=${sessionId}`)
        .then((res) => {
          setPaymentInfo({
            transactionId: res.data.transactionId,
            trackingId: res.data.trackingId,
          });
        });
    }
  }, [sessionId, axiosSecure]);

  return (
    <div>
      <h2 className="text-4xl font-bold my-4 py-4">Payment successful :</h2>
      <p className="text-xl my-2 py-2 font-medium">
        Your transactionId: {paymentInfo.transactionId}
      </p>
      <p className="text-xl my-2 py-2 font-medium">
        Your trackingId : {paymentInfo.trackingId}
      </p>
    </div>
  );
};

export default PaymentSuccess;
