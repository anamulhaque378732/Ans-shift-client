import { useEffect, useState } from "react";
import Service from "./Service";

const Services = () => {
  const [services, setServices] = useState([]);
  useEffect(() => {
    const loadServices = async () => {
      try {
        const res = await fetch("services.json");
        const data = await res.json();
        setServices(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadServices();
  }, []);

  return (
    <section className="md:p-10 bg-secondary rounded-xl my-5 md:my-10  mx-auto">
      <h1 className="text-center py-2 my-2 text-white text-4xl font-bold">
        Our Services
      </h1>
      <p className="text-center text-white font-medium md:mb-6">
        Enjoy fast, reliable parcel delivery with real-time tracking and zero
        hassle. From personal packages to business shipments — we deliver on
        time, every time.
      </p>
      <div className="grid md:grid-cols-3 md:gap-6 grid-cols-1 gap-2 ">
        {services.map((service) => (
          <Service key={service.id} service={service}></Service>
        ))}
      </div>
    </section>
  );
};

export default Services;
