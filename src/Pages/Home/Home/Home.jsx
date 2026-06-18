import Banner from "../Banner/Banner";
import Brands from "../Brands/Brands";
import Reviews from "../Reviews/Reviews";
import Services from "../Services/Services";
import Works from "../Work/Works";

const reviewsPromise = fetch("/reviews.json").then((res) => res.json());

const Home = () => {
  return (
    <>
      <Banner></Banner>
      <Works></Works>
      <Services></Services>
      <Brands></Brands>
      <Reviews reviewsPromise={reviewsPromise}></Reviews>
    </>
  );
};

export default Home;
