import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useLoaderData } from "react-router";
import { useRef } from "react";

const Coverage = () => {
  const mapRef = useRef(null);

  const position = [23.685, 90.3563];

  const servicesCenter = useLoaderData();

  const handleSearch = (e) => {
    e.preventDefault();

    const location = e.target.location.value;

    const district = servicesCenter.find((cen) =>
      cen.district.toLowerCase().includes(location.toLowerCase()),
    );
    if (district) {
      const coord = [district.latitude, district.longitude];
      mapRef.current.flyTo(coord, 14);
    }
  };

  return (
    <div className="md:my-10 lg:my-16 my-4">
      <h2 className="text-5xl md:my-10 my-2 font-bold text-center">
        Available in 64 districts
      </h2>
      <div>
        <form
          className="md:my-10 my-4 text-center "
          action=""
          onSubmit={handleSearch}
        >
          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              name="location"
              className="grow"
              placeholder="Search"
            />
          </label>
          <button className="btn ml-2">Search</button>
        </form>
      </div>

      {/* map */}

      <div className=" border  rounded-2xl w-full h-[700px]">
        <MapContainer
          center={position}
          zoom={8}
          scrollWheelZoom={false}
          className="h-[700px]"
          ref={mapRef}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {servicesCenter.map((center, index) => (
            <Marker key={index} position={[center.latitude, center.longitude]}>
              <Popup>
                <strong>{center.district} </strong> <br /> Service Area
                {center.covered_area.join(", ")}
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      </div>
    </div>
  );
};

export default Coverage;
