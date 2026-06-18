import Sidebar from "../components/dashboard/Sidebar";
import Topbar from "../components/dashboard/Topbar";

function DashboardLayout({
  children,
  links,
}) {
  return (
    <div className="flex min-h-screen bg-gray-100">

      <Sidebar links={links} />

      <div className="flex-1">

        <Topbar />

        <main className="p-6">
          {children}
        </main>

      </div>

    </div>
  );
}

export default DashboardLayout;