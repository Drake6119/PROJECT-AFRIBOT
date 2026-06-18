import jwt from "jsonwebtoken";

const generateToken = (id) => {
  return jwt.sign(
    { id },
    process.env.JWT_SECRET,
    {
      expiresIn: "30d",
    }
  );
};

export default generateToken;


// import jwt from "jsonwebtoken";

// const generateToken = (res, userId) => {
//   const token = jwt.sign(
//     { userId },
//     process.env.JWT_SECRET,
//     { expiresIn: "1hr" }
//   );

//   res.cookie("jwt", token, {
//     httpOnly: true,
//     secure: process.env.NODE_ENV !== "development",
//     sameSite: "strict",
//     maxAge: 1 * 60 * 60 * 1000, // 1 hour
//   });
// };

// export default generateToken;
