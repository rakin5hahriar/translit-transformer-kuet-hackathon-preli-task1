const LoadingDots = () => {
  return (
    <div className="flex space-x-1 items-center">
      <span className="sr-only">Loading...</span>
      {[...Array(3)].map((_, i) => (
        <div
          key={i}
          className="h-1.5 w-1.5 bg-white rounded-full animate-[bounce_1s_ease-in-out_infinite]"
          style={{ animationDelay: `${i * 0.2}s` }}
        />
      ))}
    </div>
  );
};

export default LoadingDots;