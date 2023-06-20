const TriangleLoader = () => {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="flex space-x-2">
          <div className="w-4 h-4 bg-gray-900 rounded-full animate-bounce animation-delay-1"></div>
          <div className="w-4 h-4 bg-gray-900 rounded-full animate-bounce animation-delay-2"></div>
          <div className="w-4 h-4 bg-gray-900 rounded-full animate-bounce animation-delay-3"></div>
        </div>
      </div>
    );
  };
  
  export default TriangleLoader;