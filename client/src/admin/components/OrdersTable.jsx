const OrdersTable = () => {
  return (
    <div className="bg-[#020617] p-5 rounded-xl text-white mt-6 overflow-x-auto">
      <h3 className="text-lg font-semibold mb-4">Recent Orders</h3>

      <table className="w-full text-sm">
        <thead className="text-gray-400 border-b border-gray-700">
          <tr>
            <th className="text-left py-2">Order ID</th>
            <th>Status</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b border-gray-800">
            <td className="py-2">#ORD1023</td>
            <td className="text-green-400">Delivered</td>
            <td>₹2,499</td>
          </tr>
          <tr>
            <td className="py-2">#ORD1024</td>
            <td className="text-yellow-400">Pending</td>
            <td>₹1,299</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersTable;
