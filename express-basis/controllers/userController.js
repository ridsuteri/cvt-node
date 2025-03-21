const UserDetails = require("../models/UserDetails");

const addUserDetails = (req, res) => {
  try {
    const { userId, profileImg, savedAddress, isPrime } = req.body;
    const userDetails = new UserDetails({
      userId,
      profileImg,
      savedAddress,
      isPrime,
    });
    userDetails.save();
    res.status(201).send("details saved successfully");
  } catch (err) {
    res.status(500).send("error adding details");
  }
};

const showUserDetails = async (req, res) => {
  try {
    const { id } = req.params;
    const details = await UserDetails.find({_id: id}).populate("userId", "name, email");
    res.status(200).send(details);
  } catch (err) {
    res.status(500).send(`error fetching user details ${err}`,);
  }
};

module.exports = { addUserDetails, showUserDetails };
