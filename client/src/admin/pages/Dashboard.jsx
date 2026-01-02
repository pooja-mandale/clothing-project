import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import StatCard from "../components/StatCard";
import OrdersTable from "../components/OrdersTable";

const Dashboard = () => {
  return (
    <div className="flex bg-[#020617] min-h-screen">
      <Sidebar />

      <div className="flex-1 p-5 space-y-6">
        <Navbar />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <StatCard title="Total Products" value="120" />
          <StatCard title="Total Orders" value="540" />
          <StatCard title="Revenue" value="₹3.2L" />
          <StatCard title="Low Stock" value="8" />
        </div>

        <OrdersTable />
      </div>
    </div>
  );
};

export default Dashboard;
