import parcelTracking from "../../../assets/live-tracking.png";

import safeDelivery from "../../../assets/safe-delivery.png";

const SafeDelivery = () => {
  return (
    <div className="md:my-10 lg:my-16  my-4">
      <div className="flex bg-base-200 md:py-10 lg:py-16 py-4 rounded-2xl my-10 mx-auto text-center">
        <div className="w-1/3 mx-4  border-gray-500 ">
          <img className="mx-auto" src={parcelTracking} alt="" />
        </div>
        <div className="h-52 border-l-2 border-dashed border-gray-400"></div>
        <div className="w-2/3 md:mx-10 px-2">
          <h1 className="text-3xl my-2 font-bold text-primary">
            Live Parcel Tracking
          </h1>
          <p className="font-medium  text-center">
            Stay updated in real-time with our live parcel tracking feature.
            From pick-up to delivery, monitor your shipment's journey and get
            instant status updates for complete peace of mind.
          </p>
        </div>
      </div>
      <div className="flex bg-base-200 md:py-10 lg:py-16 py-4 rounded-2xl my-10 mx-auto text-center">
        <div className="w-1/3 mx-4  border-gray-500 ">
          <img className="mx-auto" src={safeDelivery} alt="" />
        </div>
        <div className="h-52 border-l-2 border-dashed border-gray-400"></div>
        <div className="w-2/3 md:mx-10 px-2">
          <h1 className="text-3xl my-2 font-bold">100% Safe Delivery</h1>
          <p className="font-medium  text-center">
            We ensure your parcels are handled with the utmost care and
            delivered securely to their destination. Our reliable process
            guarantees safe and damage-free delivery every time.
          </p>
        </div>
      </div>
      <div className="flex bg-base-200 md:py-10 lg:py-16 py-4 rounded-2xl my-10 mx-auto text-center">
        <div className="w-1/3 mx-4  border-gray-500 ">
          <img className="mx-auto" src={safeDelivery} alt="" />
        </div>
        <div className="h-52 border-l-2 border-dashed border-gray-400"></div>
        <div className="w-2/3 md:mx-10 px-2">
          <h1 className="text-3xl my-2 font-bold">24/7 Call Center Support</h1>
          <p className="font-medium  text-center">
            Our dedicated support team is available around the clock to assist
            you with any questions, updates, or delivery concerns—anytime you
            need us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SafeDelivery;
