import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import { Legend, Pie, PieChart, Tooltip } from "recharts";

const AdminDashboard = () => {
  const axiosSecure = useAxiosSecure();

  const { data: deliveryStars = [] } = useQuery({
    queryKey: ["delivery-status-stars"],
    queryFn: async () => {
      const res = await axiosSecure.get("/parcels/delivery-status/stars");
      return res.data;
    },
  });

  const getPieChartData = (data) => {
    return data.map((item) => {
      return { name: item.status, value: item.count };
    });
  };

  return (
    <div>
      <h1 className="text-4xl font-bold  md:mx-4 m-2   md:py-4">
        Admin Dashboard
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {deliveryStars.map((stat) => (
          <div
            key={stat._id}
            className="bg-base-100 rounded-xl shadow-md p-6 text-center border"
          >
            <div className="flex justify-center mb-3 text-secondary">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="h-8 w-8 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>

            <h3 className="text-xl font-semibold text-secondary">{stat._id}</h3>

            <p className="text-4xl font-bold mt-2"> Total: {stat.count}</p>
          </div>
        ))}
      </div>
      <div className="w-full h-[400px]">
        <PieChart
          style={{
            width: "100%",
            maxWidth: "500px",
            maxHeight: "80vh",
            aspectRatio: 2,
          }}
          responsive
        >
          <Pie
            dataKey="value"
            startAngle={180}
            endAngle={0}
            data={getPieChartData(deliveryStars)}
            cx="50%"
            cy="100%"
            outerRadius="120%"
            fill="#8884d8"
            label
            isAnimationActive={true}
          />
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default AdminDashboard;
