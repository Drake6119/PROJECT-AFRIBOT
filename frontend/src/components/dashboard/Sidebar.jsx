import { Link } from "react-router-dom";

function Sidebar({ links }) {
  return (
    <aside className="w-64 min-h-screen bg-white border-r border-gray-200">

      <div className="p-6">
        <h1 className="text-3xl font-bold text-orange-600">
          AFRIBOT
        </h1>
      </div>

      <nav className="px-4">
        {links.map((link) => (
          <Link
            key={link.path}
            to={link.path}
            className="block px-4 py-3 rounded-lg hover:bg-orange-50 mb-2"
          >
            {link.label}
          </Link>
        ))}
      </nav>

    </aside>
  );
}

export default Sidebar;