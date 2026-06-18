import { Navigate } from "react-router-dom";
import { useAuth } from "../../context/authContext";

function ProtectedRoute({
  children,
  allowedRole,
}) {

  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" />;
  }

  if (
    allowedRole &&
    user.role !== allowedRole
  ) {
    return <Navigate to="/" />;
  }

  return children;
}

export default ProtectedRoute;




// import { Navigate } from "react-router-dom";

// import { useAuth } from "../../context/authContext";

// function ProtectedRoute({
//   children,
//   allowedRole,
// }) {
//   const { user } = useAuth();

//   if (!user) {
//     return (
//       <Navigate
//         to="/login"
//         replace
//       />
//     );
//   }

//   if (
//     allowedRole &&
//     user.role !== allowedRole
//   ) {
//     return (
//       <Navigate
//         to="/"
//         replace
//       />
//     );
//   }

//   return children;
// }

// export default ProtectedRoute;