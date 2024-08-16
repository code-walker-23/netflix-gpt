import React from "react";

const ProductionDetail = ({
  productionRef,
  production_companies,
  production_countries,
  spoken_languages,
}) => {
  return (
    <div ref={productionRef} className="py-12 px-5 lg:px-20 bg-gray-900">
      <div className="max-w-8xl mx-auto">
       
        <div className="bg-gray-800 p-6 rounded-lg shadow-lg border border-gray-700">
          <h2 className="text-3xl font-bold text-white mb-6">Production Details</h2>

          {/* Production Companies */}
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Production Companies</h3>
            {production_companies.length > 0 ? (
              <div className="flex flex-wrap gap-4">
                {production_companies.map((company) => (
                  <div key={company.id} className="flex items-center space-x-2">
                    <img
                      src={`https://image.tmdb.org/t/p/w500${company.logo_path}`}
                      alt={company.name}
                      className="w-24 h-10 object-contain"
                    />
                    <p className="text-gray-300">{company.name}</p>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-gray-300">No production companies available.</p>
            )}
          </div>

         
          <div className="mb-6">
            <h3 className="text-xl font-semibold text-white mb-4">Production Countries</h3>
            <p className="text-gray-300">
              {production_countries.length > 0
                ? production_countries.map((country) => country.name).join(", ")
                : "N/A"}
            </p>
          </div>

         
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Languages</h3>
            <p className="text-gray-300">
              {spoken_languages.length > 0
                ? spoken_languages.map((lang) => lang.english_name).join(", ")
                : "N/A"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductionDetail;
