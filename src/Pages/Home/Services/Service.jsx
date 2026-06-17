import serviceIcon from "../../../assets/service.png";

const Service = ({ service }) => {
  const { title, details } = service;
  return (
    <div className="border bg-white hover:bg-primary  md:p-4 p-2 rounded-3xl ">
      <img className="mx-auto" src={serviceIcon} alt="Booking Icon" />
      <h1 className="text-3xl font-bold p-1 m-1">{title}</h1>
      <p className="font-medium">{details}</p>
    </div>
  );
};

export default Service;
