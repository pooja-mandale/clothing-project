const validator = require("validator");
const { checkEmpty } = require("../utils/checkEmpty");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../model/User");
const sendEmail = require("../utils/email");
const { generateOtp } = require("../utils/otp.config");

exports.registerUser = asyncHandler(async (req, res) => {
    try {
        const { name, email, password } = req.body;

        const { isError, error } = checkEmpty({ name, email, password });
        if (isError) {
            return res.status(401).json({ message: "All Fields Required", error });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid Email" });
        }

        const result = await User.findOne({ email });
        if (result) {
            return res.status(409).json({ message: "Email already registered" });
        }

        const hash = await bcrypt.hash(password, 10);
        await User.create({ ...req.body, password: hash });

        res.json({ message: "User register success" });

    } catch (error) {
        console.error("Error register user:", error);
        res.status(500).json({
            message: "Internal Server Error",
            error: error.message
        });
    }
});

exports.loginUser = asyncHandler(async (req, res) => {
    try {
        const { email, password } = req.body;

        const { isError, error } = checkEmpty({ email, password });
        if (isError) {
            return res.status(401).json({ message: "All Fields Required", error });
        }

        if (!validator.isEmail(email)) {
            return res.status(400).json({ message: "Invalid Email" });
        }

        const result = await User.findOne({ email });
        if (!result) {
            return res.status(401).json({ message: "Email not found" });
        }

        const isVerify = await bcrypt.compare(password, result.password);
        if (!isVerify) {
            return res.status(401).json({ message: "Password does not match" });
        }

        const token = jwt.sign(
            { name: result.name, _id: result._id },
            process.env.JWT_KEY,
            { expiresIn: "6d" }
        );

        res.cookie("user", token, { httpOnly: true });

        res.json({
            message: "Login success",
            result: {
                _id: result._id,
                name: result.name,
                email: result.email
            }
        });

    } catch (error) {
        console.error("Error login user:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

exports.logOutUser = asyncHandler(async (req, res) => {
    try {
        res.clearCookie("user");
        res.json({ message: "User LogOut Success" });
    } catch (error) {
        console.error("Error logOut user:", error);
        res.status(500).json({ message: "Internal Server Error", error: error.message });
    }
});

exports.forgotPassword = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const otp = generateOtp();

    // 🔥 OTP console मध्ये दाखव
    console.log("🔐 Forgot Password OTP:", otp);

    // (optional) DB मध्ये save करायचा असेल तर
    user.resetOtp = otp;
    user.resetOtpExpire = Date.now() + 5 * 60 * 1000; // 5 min
    await user.save();

    res.status(200).json({
      success: true,
      message: "OTP generated (check console)",
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
      message: "Server error",
    });
  }
};


exports.verifyOtp = asyncHandler(async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ email });

  if (!user || user.resetOtp !== otp) {
    return res.status(400).json({ message: "Invalid OTP" });
  }

  if (user.resetOtpExpire < Date.now()) {
    return res.status(400).json({ message: "OTP expired" });
  }

  // ✅ THIS IS THE FIX
  user.isOtpVerified = true;

  await user.save();

  res.json({ message: "OTP verified successfully" });
});





exports.resetPassword = asyncHandler(async (req, res) => {
  const { email, newPassword } = req.body;

  if (!email || !newPassword) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const user = await User.findOne({ email });

  // if (!user || !user.isOtpVerified) {
  //   return res.status(400).json({ message: "OTP not verified" });
  // }

  const hash = await bcrypt.hash(newPassword, 10);

  user.password = hash;
  user.resetOtp = undefined;
  user.resetOtpExpire = undefined;
  user.isOtpVerified = false; // reset flag

  await user.save();

  res.json({ message: "Password reset successfully" });
});


