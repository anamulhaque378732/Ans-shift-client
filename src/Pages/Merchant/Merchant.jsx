import merchant from "../../assets/be-a-merchant-bg.png";
import LocationMerchant from "../../assets/location-merchant.png";
const Merchant = () => {
  return (
    <div
      className="hero w-full bg-secondary md:my-10 my-3 rounded-xl"
      style={{
        backgroundImage: `url(${merchant})`,
      }}
    >
      <div className="hero-content flex-col md:flex-row-reverse md:py-10 ">
        <div className="">
          <img src={LocationMerchant} alt="" />{" "}
        </div>
        <div>
          <h1 className="text-3xl font-bold py-2 text-white">
            Merchant and Customer Satisfaction is Our First Priority
          </h1>
          <p className="py-2 text-white">
            We offer the lowest delivery charge with the highest value along
            with 100% safety of your product. Pathao courier delivers your
            parcels in every corner of Bangladesh right on time.
          </p>
          <button className="btn bg-primary mx-2"> Become Aa merchant</button>
          <button className="btn"> Earn with Ans.Shift </button>
        </div>
      </div>
    </div>
  );
};

export default Merchant;
