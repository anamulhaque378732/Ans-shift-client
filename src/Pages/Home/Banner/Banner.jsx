import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { GoArrowUpRight } from "react-icons/go";
import bannerImg1 from "../../../assets/banner/banner1.png";
import bannerImg2 from "../../../assets/banner/banner2.png";
import bannerImg3 from "../../../assets/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel autoPlay={true} infiniteLoop={true}>
      <div className="relative ">
        <img src={bannerImg1} className="w-full" />
        <div className="rounded-full gap-2  flex absolute sm:bottom-2 sm:left-2 bottom-10 left-10 shadow-lg transition">
          <button className="bg-secondary font-medium  hover:bg-blue-700 text-white p-2 rounded-full">
            Track your parcel
          </button>
          <GoArrowUpRight className="mt-2 bg-secondary text-white p-4 rounded-full mx-1" />
          <button className="text-secondary font-medium   hover:bg-blue-500   p-2 rounded-full">
            Be a Raider
          </button>
        </div>
      </div>

      <div className="relative ">
        <img src={bannerImg3} className="w-full" />
        <div className="rounded-full gap-2  flex absolute bottom-10 left-10 shadow-lg transition">
          <button className="bg-secondary font-medium  hover:bg-blue-700 text-white p-2 rounded-full">
            Track your parcel
          </button>
          <GoArrowUpRight className="mt-2 bg-secondary text-white p-4 rounded-full mx-1" />
          <button className="text-secondary font-medium   hover:bg-blue-500   p-2 rounded-full">
            Be a Raider
          </button>
        </div>
      </div>
      <div className="relative ">
        <img src={bannerImg2} className="w-full" />
        <div className="rounded-full gap-2  flex absolute bottom-10 left-10 shadow-lg transition">
          <button className="bg-secondary font-medium  hover:bg-blue-700 text-white p-2 rounded-full">
            Track your parcel
          </button>
          <GoArrowUpRight className="mt-2 bg-secondary text-white p-4 rounded-full mx-1" />
          <button className="text-secondary font-medium   hover:bg-blue-500   p-2 rounded-full">
            Be a Raider
          </button>
        </div>
      </div>
    </Carousel>
  );
};

export default Banner;
