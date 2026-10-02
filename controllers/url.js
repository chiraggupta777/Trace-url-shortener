const { nanoid } = require("nanoid");
const URL = require("../models/url");

async function generateNewShortUrl(req, res) {
  const { url } = req.body;

  if (!url) { 
    return res.status(400).json({ error: "url is required" });
  }

  const shortId = nanoid(8);

  await URL.create({
    shortId,
    redirectUrl: url,
    visitHistory: [],
    createdBy: req.user._id,
  });
  return res.render('home', { shortId: shortId });

}

module.exports = {
  generateNewShortUrl,
};
