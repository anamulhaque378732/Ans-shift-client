import { Link } from "react-router";

const Forbidden = () => {
  return (
    <div className="min-h-screen   from-red-50 to-white flex items-center justify-center px-6">
      <div className="max-w-lg text-center">
        <div className="text-7xl mb-4">🔒</div>

        <h1 className="text-7xl font-extrabold text-red-600">403</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Access Forbidden
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          Sorry! You don't have permission to access this page. Please sign in
          with an authorized account or return to the homepage.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-red-600 text-white font-semibold hover:bg-red-700 transition"
          >
            🏠 Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-lg border border-red-600 text-red-600 font-semibold hover:bg-red-50 transition"
          >
            ← Go Back
          </button>
        </div>

        <div className="mt-10 rounded-lg bg-red-100 p-4 text-red-700">
          <p className="font-semibold">Error Code: 403</p>
          <p className="text-sm mt-1">
            This page is restricted and requires the appropriate permissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Forbidden;
