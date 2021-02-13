import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@e-com.com",
    password: bcrypt.hashSync("1234", 10),
    isAdmin: true,
  },
  {
    name: "John Doe",
    email: "john@e-com.com",
    password: bcrypt.hashSync("1234", 10),
  },
  {
    name: "Jane Doe",
    email: "jane@e-com.com",
    password: bcrypt.hashSync("1234", 10),
  },
];

export default users;
