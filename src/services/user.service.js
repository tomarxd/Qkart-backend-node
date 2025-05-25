const { User } = require("../models");
const httpStatus = require("http-status");
const ApiError = require("../utils/ApiError");
const bcrypt = require("bcryptjs");

const getUserById = async (id) => {
  const userById = await User.findById(id);

  if (!userById) {
    throw new ApiError(httpStatus.BAD_REQUEST, "User not found");
  }
  return userById;
};

const getUserAddressById = async (id) => {
  const user = await User.findOne({ _id: id }, { email: 1, address: 1 });
  return user;
};

const getUserByEmail = async (email) => {
  try {
    const userByEmail = await User.findOne({ email: email });
    return userByEmail;
  } catch (error) {
    console.log(error);
    throw error;
  }
};

const createUser = async (user) => {
  const emailExist = await User.isEmailTaken(user.email);
  if (emailExist) {
    throw new ApiError(httpStatus.OK, "Email already registered");
  }

  const userData = await User.create(user);
  return userData;
};

const setAddress = async (user, newAddress) => {
  user.address = newAddress;
  await user.save();

  return user.address;
};

module.exports = {
  getUserById,
  getUserByEmail,
  createUser,
  getUserAddressById,
  setAddress,
};