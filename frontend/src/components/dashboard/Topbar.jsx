import { useAuth } from "../../context/AuthContext";

function Topbar() {
  const { user } = useAuth();

  return (
    <header className="bg-white border-b border-gray-200 p-5">

      <div className="flex justify-between items-center">

        <div>
          <h2 className="text-2xl font-bold">
            Welcome back 👋
          </h2>

          <p className="text-gray-500">
            Build the robots that power Africa's future.
          </p>
        </div>

        <div>
          <span className="font-semibold">
            {user?.name}
          </span>
        </div>

      </div>

    </header>
  );
}

export default Topbar;