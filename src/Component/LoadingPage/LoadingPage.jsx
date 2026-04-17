const LoadingPage = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
      <p className="mt-3 text-4xl text-gray-600"><span className="loading loading-dots loading-xl"></span></p>
    </div>
  );
};

export default LoadingPage;