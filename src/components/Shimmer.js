const Shimmer = () => {
  return (
    <>
      {Array(10)
        .fill("")
        .map((e, i) => (
          <div className="shimmer-card" key={i}></div>
        ))}
    </>
  );
};
export default Shimmer;
