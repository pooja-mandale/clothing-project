const Sidebar = () => {
  return (
    <div className="bg-[#0f172a] text-white w-64 min-h-screen p-5 hidden md:block">
      <h1 className="text-2xl font-bold mb-8 text-purple-500">
        Cloth<span className="text-white">Admin</span>
      </h1>

      <ul className="space-y-4 text-gray-300">
        <li className="hover:text-purple-400 cursor-pointer">Dashboard</li>
        <li className="hover:text-purple-400 cursor-pointer">Products</li>
        <li className="hover:text-purple-400 cursor-pointer">Orders</li>
        <li className="hover:text-purple-400 cursor-pointer">Customers</li>
        <li className="hover:text-purple-400 cursor-pointer">Categories</li>
        <li className="hover:text-purple-400 cursor-pointer">Reports</li>
        <li className="hover:text-red-400 cursor-pointer mt-10">Logout</li>
      </ul>
    </div>
  );
};

export default Sidebar;
