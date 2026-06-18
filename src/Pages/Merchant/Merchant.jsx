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
      <div className="grid grid-cols-1 text-center md:gap8 gap-2 mx-auto md:grid-cols-2 md:py-10 my-3">
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

        <div>
          {" "}
          <img src={LocationMerchant} alt="" />{" "}
        </div>
      </div>
    </div>
  );
};

export default Merchant;
