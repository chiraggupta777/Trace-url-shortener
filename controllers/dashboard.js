const URL = require("../models/url");

async function renderDashboard(req, res) {
  const urls = await URL.find({ createdBy: req.user._id })
    .sort({ createdAt: -1 })
    .lean();
  const recentSince = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
  const totalClicks = urls.reduce(
    (total, url) => total + (url.visitHistory?.length || 0),
    0,
  );
  const recentLinks = urls.filter(
    (url) => url.createdAt && url.createdAt >= recentSince,
  ).length;
  const origin = `${req.protocol}://${req.get("host")}`;

  res.render("dashboard", {
    user: req.user,
    urls: urls.map((url) => ({
      ...url,
      shortUrl: `${origin}/${url.shortId}`,
      clicks: url.visitHistory?.length || 0,
    })),
    stats: {
      totalLinks: urls.length,
      totalClicks,
      recentLinks,
    },
  });
}

module.exports = { renderDashboard };
