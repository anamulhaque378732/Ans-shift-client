import { useEffect, useState } from "react";
import Work from "./Work";

const Works = () => {
  const [works, setWorks] = useState([]);
  useEffect(() => {
    const loadWorks = async () => {
      try {
        const res = await fetch("work.json");
        const data = await res.json();
        setWorks(data);
      } catch (error) {
        console.log(error);
      }
    };
    loadWorks();
  }, []);

  return (
    <section className="bg-base-300 md:py-10 py-2 md:px-8 px-2  rounded-xl">
      <h1 className="text-4xl md:my-5 md:px-4 font-bold">How it works</h1>
      <div className="grid md:grid-cols-2 grid-cols-1 lg:grid-cols-4 gap-2 md:gap-8">
        {works.map((work) => (
          <Work key={work.id} work={work}></Work>
        ))}
      </div>
    </section>
  );
};

export default Works;
