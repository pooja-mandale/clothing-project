const Admin = require("../model/Admin");
const asyncHandler = require("express-async-handler");
const validator = require("validator");
const { checkEmpty } = require("../utils/checkEmpty");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

/* ================= REGISTER ADMIN ================= */
exports.registerAdmin = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  const { isError } = checkEmpty({ name, email, password });
  if (isError) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const adminExists = await Admin.findOne({ email });
  if (adminExists) {
    return res.status(409).json({ message: "Admin already registered" });
  }

  const hash = await bcrypt.hash(password, 10);

  await Admin.create({
    name,
    email,
    password: hash,
  });

  res.status(201).json({ message: "Admin registered successfully" });
});

/* ================= LOGIN ADMIN ================= */
exports.loginAdmin = asyncHandler(async (req, res) => {
  const { email, password } = req.body;

  const { isError } = checkEmpty({ email, password });
  if (isError) {
    return res.status(400).json({ message: "All fields are required" });
  }

  if (!validator.isEmail(email)) {
    return res.status(400).json({ message: "Invalid email" });
  }

  const admin = await Admin.findOne({ email });
  if (!admin) {
    return res.status(401).json({ message: "Admin not found" });
  }

  const isMatch = await bcrypt.compare(password, admin.password);
  if (!isMatch) {
    return res.status(401).json({ message: "Incorrect password" });
  }

  const token = jwt.sign(
    { _id: admin._id, role: "admin" },
    process.env.JWT_KEY,
    { expiresIn: "6d" }
  );

  res.cookie("adminToken", token, {
    httpOnly: true,
    sameSite: "strict",
  });

  res.json({
    message: "Admin login successful",
    admin: {
      _id: admin._id,
      name: admin.name,
      email: admin.email,
    },
  });
});

/* --================= LOGOUT ADMIN =================-- */
exports.logoutAdmin = asyncHandler(async (req, res) => {
  res.clearCookie("adminToken");
  res.json({ message: "Admin logout successful" });
});
