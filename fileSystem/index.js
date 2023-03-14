const fsPromise = require('fs').promises;
const path = require('path');

const fileOps = async () => {
   //read file
   const data = await fsPromise.readFile(path.join(__dirname,'files','lorem.txt'),'utf8');
   await fsPromise.writeFile(path.join(__dirname,'files','new-lorem.txt'),'love my life');
   //update file
   await fsPromise.appendFile(path.join(__dirname,'files','new-lorem.txt'),'\n\nfreaking love it more');
   //delete a file
   await  fsPromise.unlink(path.join(__dirname,'files','lorem.txt'));
}

fileOps();