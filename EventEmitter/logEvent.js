const path = require("path");
const fsPromises = require("fs").promises;
const fs = require("fs");

const { v4: uuid } = require("uuid");
const { format } = require("date-fns");

const logEvent = async (message) => {
  const dateLog = `${format(new Date(), "yyyymmdd\tHH:mm:")}`;
  const eventLog = `${dateLog}\t${uuid()}\t${message}\n`;

  if (!fs.existsSync(path.join(__dirname, "logs")))
    fsPromises.mkdir(path.join(__dirname, "logs"));
  await fsPromises.appendFile(path.join(__dirname, "logs", "log.txt"), eventLog);
};

module.exports = logEvent;
