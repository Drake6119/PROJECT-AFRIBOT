function OfferCard({ icon, title, description }) {
  return (
    <div
      className="
      bg-[#120606]
      border
      border-red-950
      rounded-2xl
      p-8
      hover:border-red-600
      transition
      "
    >
      <div className="text-4xl mb-4">
        {icon}
      </div>

      <h3 className="text-2xl font-bold mb-3">
        {title}
      </h3>

      <p className="text-gray-400">
        {description}
      </p>
    </div>
  );
}

export default OfferCard;