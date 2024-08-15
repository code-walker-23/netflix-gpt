const DetailList = ({ icon, title, items, logoPaths }) => (
  <div>
    <div className="flex items-center space-x-2 mb-2">
      {icon}
      <p className="text-teal-300 font-semibold">{title}:</p>
    </div>
    <div className="space-y-2">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="flex items-center space-x-2">
            {logoPaths && logoPaths[index] && (
              <img
                className="w-12 h-12 object-contain rounded-full border border-gray-700"
                src={
                  logoPaths[index]
                    ? `https://image.tmdb.org/t/p/w500${logoPaths[index]}`
                    : ""
                } // Ensure the URL is valid
                alt={item}
                onError={(e) => (e.target.style.display = "none")} // Hide image if error loading
              />
            )}
            <span className="text-gray-300">{item}</span>
          </div>
        ))
      ) : (
        <p className="text-gray-500">N/A</p>
      )}
    </div>
  </div>
);

export default DetailList;