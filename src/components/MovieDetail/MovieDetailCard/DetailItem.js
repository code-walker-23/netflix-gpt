const DetailItem = ({ icon, label, value }) => (
  <div className="flex items-start space-x-4">
    <div className="text-2xl flex-shrink-0">{icon}</div>
    <div className="flex-1">
      <p className="text-teal-300 font-semibold">{label}:</p>
      <p className="text-gray-400">{value}</p>
    </div>
  </div>
);

export default DetailItem;
