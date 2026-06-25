const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/Client/User");
const OTP = require("../../models/Client/OTP");

const generateOTP = require("../../utils/generateOTP");
const sendEmail = require("../../utils/sendEmail");

// SEND OTP htmlFor REGISTRATION

exports.sendRegisterOTP = async (req, res) => {
  console.log("use reg trigger");

  try {
    const { email } = req.body;
    console.log("back email", email);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    const otp = generateOTP();
    console.log("otp", otp);

    await OTP.deleteMany({ email });

    await OTP.create({
      email,
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmail(email, otp);

    res.status(200).json({
      success: true,
      message: "OTP sent successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// VERIFY OTP & REGISTER

exports.verifyRegisterOTP = async (req, res) => {
  try {
    const { name, email, adress, password, otp } = req.body;
    console.log("body", adress);

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }
    const otpData = await OTP.findOne({
      email,
      otp,
    });

    console.log("otp data", otpData);

    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (otpData.expiresAt < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    console.log("hashpass", hashedPassword);

    await User.create({
      name,
      email,
      adress,
      password: hashedPassword,
    });

    await OTP.deleteMany({ email });

    res.status(201).json({
      success: true,
      message: "Registration successful",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// SEND RESET OTP

exports.sendResetOTP = async (req, res) => {
  try {
    const { email } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    const otp = generateOTP();

    await OTP.deleteMany({ email });

    await OTP.create({
      email,
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    });

    await sendEmail(email, otp);

    res.status(200).json({
      success: true,
      message: "Reset OTP sent",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// VERIFY RESET OTP & CHANGE PASSWORD

exports.verifyResetOTP = async (req, res) => {
  try {
    const { email, otp, newPassword } = req.body;

    const otpData = await OTP.findOne({
      email,
      otp,
    });

    if (!otpData) {
      return res.status(400).json({
        success: false,
        message: "Invalid OTP",
      });
    }

    if (otpData.expiresAt < Date.now()) {
      return res.status(400).json({
        success: false,
        message: "OTP expired",
      });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await User.findOneAndUpdate({ email }, { password: hashedPassword });

    await OTP.deleteMany({ email });

    res.status(200).json({
      success: true,
      message: "Password updated successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Login User

exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    console.log("user", user);

    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const isMatch = await bcrypt.compare(password, user.password);

    if (!isMatch) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password",
      });
    }

    const token = jwt.sign(
      {
        userId: user._id,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      },
    );

    res.cookie("userToken", token, {
      httpOnly: true,
      sameSite: "none",
      secure: true,
      maxAge: 7 * 24 * 60 * 60 * 1000,
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Logout User

exports.logoutUser = (req, res) => {
  res.clearCookie("userToken", {
    httpOnly: true,
    sameSite: "none",
    secure: true,
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};

// verify user

exports.getMe = async (req, res) => {
  try {
    const user = await User.findById(req.user.userId).select("-password");

    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
