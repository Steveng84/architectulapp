import axios from "axios";

const getUser = async (userData) => {
  try {
    await axios.get(URL, userData);
    console.log("succes");
  } catch (err) {
    console.error(err);
  }
};

const createUser = async (userData) => {
  try {
    await axios.post(URL, userData);
    console.log("succes");
  } catch (err) {
    console.error(err);
  }
};

const updateUser = async (userData) => {
  try {
    await axios.put(URL, userData);
    console.log("succes");
  } catch (err) {
    console.error(err);
  }
};

const deleteUser = async (userData) => {
  try {
    await axios.delete(URL, userData);
    console.log("succes");
  } catch (err) {
    console.error(err);
  }
};
