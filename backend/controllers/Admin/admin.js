const Register = require("../../models/Admin/RegisterAdmin");
const bcrypt = require("bcrypt");
const { hashedPassword, authPassword } = require("../../middleware/bcrypt");
const jwt = require("jsonwebtoken");

// Register Admin
exports.registerAdmin = async (req, res) => {
  console.log("trigger admin register");
  try {
    const { adminCode, name, email, password } = req.body;
    console.log(
      "adminCode, name, email, password",
      adminCode,
      name,
      email,
      password,
    );

    const checkAdmins = await Register.find();
    console.log("admin length", checkAdmins.length);

    if (checkAdmins.length >= 3) {
      return res
        .status(400)
        .json({ message: "Register Limit Exceeded", status: false });
    }

    const code = process.env.ADMIN_CODE;
    console.log("adminExist ", code, "gettingCode", adminCode);

    if (adminCode !== process.env.ADMIN_CODE) {
      return res
        .status(400)
        .json({ message: "Admin Code not Found", status: false });
    }

    const findAdmin = await Register.findOne({ email });
    console.log("full data", findAdmin);

    if (findAdmin) {
      return res.status(400).json({
        message: "Admin Already Registered ",
        status: false,
      });
    }

    const resPassword = await hashedPassword(password);
    console.log("sec pass", resPassword);

    const register = await Register.create({
      name,
      email,
      password: resPassword,
    });
    if (!register) {
      return res
        .status(400)
        .json({ message: "Registration  Failed", status: false, register });
    }
    res
      .status(201)
      .json({ message: "Admin Registered", status: true, register });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};

// Login Admin
exports.loginAdmin = async (req, res) => {
  console.log("trigger admin register");
  try {
    const { email, password } = req.body;
    console.log("email, password", email, password);

    const login = await Register.findOne({ email });
    if (!login) {
      return res
        .status(400)
        .json({ message: "Email Not Valid ", status: false });
    }
    console.log("admin", login);

    const authPass = await authPassword(password, login.password);
    if (!authPass) {
      return res
        .status(400)
        .json({ message: "Password Invalid ", status: false });
    }

    const token = jwt.sign(
      {
        id: login._id,
        email: login.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "30m",
      },
    );

    res.status(200).json({
      message: "Admin Logged In Successfully",
      status: true,
      token,
      admin: {
        id: login._id,
        name: login.name,
        email: login.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
      status: false,
    });
  }
};
