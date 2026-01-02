const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-[#020617] p-4 rounded-xl">
      <h2 className="text-white text-xl font-semibold">
        Welcome, Admin 👋
      </h2>

      <input
        type="text"
        placeholder="Search..."
        className="bg-[#0f172a] text-white px-4 py-2 rounded-lg outline-none"
      />
    </div>
  );
};

export default Navbar;
