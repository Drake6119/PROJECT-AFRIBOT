function AdminStatCard({ title, value }) {
  return (
    <div
      className="
      bg-[#120606]
      border
      border-red-950
      rounded-2xl
      p-6
      "
    >
      <p className="text-gray-400 uppercase">
        {title}
      </p>

      <h2 className="text-5xl font-bold mt-3">
        {value}
      </h2>
    </div>
  );
}

export default AdminStatCard;