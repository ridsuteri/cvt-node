const client = require("../config/redis");
module.exports = async (req, res, next) => {
  try {
    const key = req.params.id;
    const cache = await client.get(key);
    if (cache) {
      console.log("sending from cache");
      res.status(200).send(JSON.parse(cache));
    } else {
      console.log("cahe miss, making a db call");
      next();
    }
  } catch (err) {
    res.status(500).send(`Internal server error : ${err}`);
  }
};
