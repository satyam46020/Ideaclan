const auth = require("./authMiddleware");

const studentAuth = auth("student");

module.exports = studentAuth;