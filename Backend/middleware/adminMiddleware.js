const auth = require("./authMiddleware");

const adminAuth = auth("admin");

module.exports = adminAuth;