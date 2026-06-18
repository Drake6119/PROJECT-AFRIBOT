import StatCard from "../components/dashboard/StatCard";
import DashboardLayout from "../layouts/DashboardLayout";

function AdminDashboard() {

  const links = [
    {
      label: "Dashboard",
      path: "/admin",
    },
    {
      label: "Courses",
      path: "/admin/courses",
    },
    {
      label: "Announcements",
      path: "/admin/announcements",
    },
    {
      label: "Students",
      path: "/admin/students",
    },
  ];

  return (
    <DashboardLayout links={links}>

      <div className="grid md:grid-cols-4 gap-6">

        <StatCard
          title="Students"
          value="45"
        />

        <StatCard
          title="Courses"
          value="6"
        />

        <StatCard
          title="Paid Students"
          value="30"
        />

        <StatCard
          title="Revenue"
          value="KES 350k"
        />

      </div>

    </DashboardLayout>
  );
}

export default AdminDashboard;























// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";

// function AdminDashboard() {
//   return (
//     <div className="min-h-screen flex flex-col bg-black text-white">
     
//         <div className="flex- grow ">
//           <section>   
//             <p className="text-red-600 text-4xl mt-5 font-serif">
//               ADMIN DASHBOARD
//             </p>
//             <p className="text-white mt-2 mb-10">
//               Manage courses, announcements and students.
//             </p>
            
//             <div
//               className="
//               flex flex-row
//               bg-[#221010]
//               rounded-xl
              
//               w-fit
//               mb-10
//               "
//               >

//               <button onClick={() => navigate("/Courses")}
//               className="rounded-lg px-8 py-3 hover:bg-red-900">
//                 Courses
//               </button>

//               <button onClick={() => ("/Announcements")}
//               className="rounded-lg px-8 py-3 hover:bg-red-900">
//                 Announcements
//               </button>

//               <button onClick={() => ("Students")}
//               className="rounded-lg px-8 py-3 hover:bg-red-900 ">
//                 Students
//               </button>
//             </div>  
//           </section>
//         </div>
//     </div>
//   );
// }

// export default AdminDashboard;




//  <div className="max-w-7xl mx-auto px-6 py-16">

//         <p className="text-red-600 text-4xl font-serif">
//           ADMIN DASHBOARD
//         </p>

       
        

//         <p className="text-white mt-2 mb-10">
//           Manage courses, announcements and students.
//         </p>
//         {/* <div
//   className="
//   max-w-7xl
//   mx-auto
//   px-6
//   grid
//   md:grid-cols-3
//   gap-6
//   "
// >

//   <AdminStatCard
//     title="Courses"
//   />

//   <AdminStatCard
//     title="Announcements"
//   />

//   <AdminStatCard
//     title="Students"
//   />

// </div> */}

// <div className="max-w-7xl mx-auto px-6 mt-10">

//   <div
//     className="
//     flex
//     bg-[#221010]
//     rounded-xl
//     w-fit
//     "
//   >

//     <button className="px-8 py-3">
//       Courses
//     </button>

//     <button className="px-8 py-3">
//       Announcements
//     </button>

//     <button className="px-8 py-3">
//       Students
//     </button>
//     <div
//     className="
//     bg-[#120606]
//     border
//     border-red-950
//     rounded-2xl
//     p-6
//     "
//   >
//     <h2 className="text-2xl font-bold mb-6">
//       Add Course
//     </h2>

//     <form className="space-y-4">

//       <input
//         placeholder="Course Title"
//         className="
//         w-full
//         bg-black
//         border
//         border-red-950
//         rounded-lg
//         p-3
//         "
//       />

//       <textarea
//         placeholder="Description"
//         className="
//         w-full
//         bg-black
//         border
//         border-red-950
//         rounded-lg
//         p-3
//         "
//       />

//       <button
//         className="
//         bg-red-700
//         px-6
//         py-3
//         rounded-lg
//         "
//       >
//         Add Course
//       </button>

//     </form>

//   </div>


    
    

//   </div>

// </div>

// <div
//   className="
//   max-w-7xl
//   mx-auto
//   px-6
//   py-8
//   grid
//   lg:grid-cols-3
//   gap-6
//   "
// >


//   <div
//     className="
//     bg-[#120606]
//     border
//     border-red-950
//     rounded-2xl
//     p-6
//     "
//   >
//     <h2 className="text-2xl font-bold mb-6">
//       Add Course
//     </h2>

//     <form className="space-y-4">

//       <input
//         placeholder="Course Title"
//         className="
//         w-full
//         bg-black
//         border
//         border-red-950
//         rounded-lg
//         p-3
//         "
//       />

//       <textarea
//         placeholder="Description"
//         className="
//         w-full
//         bg-black
//         border
//         border-red-950
//         rounded-lg
//         p-3
//         "
//       />

//       <button
//         className="
//         bg-red-700
//         px-6
//         py-3
//         rounded-lg
//         "
//       >
//         Add Course
//       </button>

//     </form>

//   </div>

// </div>

//       </div>