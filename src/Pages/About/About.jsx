import { Link } from "react-router";

const About = () => {
  const services = [
    {
      title: "Parcel Pickup",
      description:
        "Schedule a pickup from your home or office at your preferred time.",
      icon: "📦",
    },
    {
      title: "Door-to-Door Delivery",
      description:
        "We deliver parcels safely from the sender's doorstep to the receiver's doorstep.",
      icon: "🚚",
    },
    {
      title: "Express Delivery",
      description:
        "Get your urgent parcels delivered quickly with our express delivery service.",
      icon: "⚡",
    },
    {
      title: "Live Parcel Tracking",
      description:
        "Track your parcel in real time from pickup to final delivery.",
      icon: "📍",
    },
    {
      title: "Cash on Delivery (COD)",
      description:
        "Collect payments securely from customers upon successful delivery.",
      icon: "💵",
    },
    {
      title: "Business Delivery",
      description:
        "Reliable logistics solutions for e-commerce stores and business owners.",
      icon: "🏢",
    },
    {
      title: "Secure Packaging",
      description:
        "We ensure every parcel is handled with care and delivered safely.",
      icon: "🛡️",
    },
    {
      title: "Nationwide Delivery",
      description:
        "Deliver your parcels to cities, towns, and villages across the country.",
      icon: "🌍",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="">
        <div className="max-w-7xl mx-auto px-5 py-24 text-center">
          <h1 className="text-5xl font-bold">
            Delivering Trust, One Parcel at a Time
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-lg  ">
            We make parcel delivery simple, fast, and secure. Whether you're
            sending documents, gifts, or business products, our platform helps
            you deliver with confidence.
          </p>
          <h2 className="text-5xl font-bold  md:my-6 my-2 md:py-4 py-2">
            {" "}
            Our services
          </h2>
          <div className="grid md:grid-cols-2 my-4  lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-white border rounded-xl p-6 text-center hover:shadow-lg transition"
              >
                <div className="text-5xl mb-4">{service.icon}</div>

                <h3 className="text-xl font-bold mb-2">{service.title}</h3>

                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>

          <Link
            to="/sendParcel"
            className="mt-8 bg-white   px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition"
          >
            <button className="btn btn-primary text-black"> Send Parcel</button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default About;
