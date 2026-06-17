import "swiper/css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import amazonVector from "../../../assets/brands/amazon_vector.png";
import amazon from "../../../assets/brands/amazon.png";
import casio from "../../../assets/brands/casio.png";
import moonstar from "../../../assets/brands/moonstar.png";
import randstad from "../../../assets/brands/randstad.png";
import star from "../../../assets/brands/star.png";
import startPeople from "../../../assets/brands/start_people.png";
const brandsLogos = [
  amazonVector,
  amazon,
  casio,
  moonstar,
  randstad,
  star,
  startPeople,
  randstad,
  casio,
];

const Brands = () => {
  return (
    <Swiper
      slidesPerView={4}
      centeredSlides={true}
      spaceBetween={30}
      grabCursor={true}
      loop={true}
      autoplay={{
        delay: 1500,
        disableOnInteraction: false,
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {brandsLogos.map((logo, idx) => (
        <SwiperSlide key={idx}>
          <img src={logo} alt="Brands Log" />{" "}
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Brands;
