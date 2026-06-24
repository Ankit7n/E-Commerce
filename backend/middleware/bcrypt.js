const bcrypt = require("bcrypt");

exports.hashedPassword = async (password) => {
  console.log("hashPass trigger");

  const hashPassword = await bcrypt.hash(password, 10);
  return hashPassword;
};

exports.authPassword = async (getPassword, dataPassword) => {
  return await bcrypt.compare(getPassword, dataPassword);
};
