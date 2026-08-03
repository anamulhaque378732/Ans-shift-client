import { Link } from "react-router";

const ErrorElement = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-green-50 to-white px-6">
      <div className="max-w-lg text-center">
        <h1 className="text-8xl font-extrabold text-green-600">404</h1>

        <h2 className="mt-4 text-3xl font-bold text-gray-800">
          Oops! Page Not Found
        </h2>

        <p className="mt-4 text-gray-600 leading-7">
          The page you are looking for might have been removed, renamed, or is
          temporarily unavailable.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/"
            className="px-6 py-3 rounded-lg bg-green-600 text-white font-semibold hover:bg-green-700 transition"
          >
            🏠 Back to Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="px-6 py-3 rounded-lg border border-green-600 text-green-600 font-semibold hover:bg-green-50 transition"
          >
            ← Go Back
          </button>
        </div>

        <p className="mt-10 text-sm text-gray-400">
          Error Code: 404 | Parcel Delivery System
        </p>
      </div>
    </div>
  );
};

export default ErrorElement;
