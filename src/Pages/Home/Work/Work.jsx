import bookingIcon from "../../../assets/bookingIcon.png";

const Work = ({ work }) => {
  const { title, details } = work;
  return (
    <div className="border   md:p-4 p-2 rounded-3xl ">
      <img
        className="mx-auto text-primary"
        src={bookingIcon}
        alt="Booking Icon"
      />
      <h1 className="text-3xl text-primary font-bold p-1 m-1">{title}</h1>
      <p className="font-medium">{details}</p>
    </div>
  );
};

export default Work;
