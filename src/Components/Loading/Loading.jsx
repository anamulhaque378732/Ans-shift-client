const Loading = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <span className="loading loading-spinner loading-lg text-green-600"></span>

      <p className="mt-4 text-gray-600 font-medium">Loading...</p>
    </div>
  );
};

export default Loading;
