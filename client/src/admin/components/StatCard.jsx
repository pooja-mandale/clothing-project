const StatCard = ({ title, value }) => {
  return (
    <div className="bg-[#020617] p-5 rounded-xl text-white">
      <p className="text-gray-400 text-sm">{title}</p>
      <h2 className="text-2xl font-bold mt-2">{value}</h2>
    </div>
  );
};

export default StatCard;
