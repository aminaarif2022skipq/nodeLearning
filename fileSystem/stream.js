//better way to handle write file

const fs = require("fs");

const rs = fs.createReadStream("./files/new-lorem.txt", { encoding: "utf-8" });
const ws = fs.createWriteStream("./files/pretty-lorem");
// rs.on("data", (dataChuck) => {
//   ws.write(dataChuck);
// });

rs.pipe(ws);