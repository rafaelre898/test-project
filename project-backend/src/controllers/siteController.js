const fs = require("fs");
const path = require("path");

const sitesFilePath = path.join(__dirname, "sites.json");

function readSites() {
  const sitesData = fs.readFileSync(sitesFilePath, "utf8");
  return JSON.parse(sitesData);
}

function getSiteConfiguration(req, res) {
  const siteId = req.params.siteId;
  const sites = readSites();
  const siteConfig = sites[siteId];
  if (!siteConfig) {
    res.status(404).json({ error: "Site configuration not found" });
  } else {
    res.json(siteConfig);
  }
}

module.exports = {
  getSiteConfiguration,
};
