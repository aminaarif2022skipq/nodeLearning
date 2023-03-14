const {format} = require('date-fns');
const { v4 : uuid } = require('uuid');

console.log(format(new Date(),'yyyyMMdd\tHH:mm:ss'));

console.log(uuid());

//install a package globally
//npm i nodemon -g

//npm istall
//install all packages defined inside package.json

//to add a dependency as a dev dependency
//npm i nodemon --save-dev
//npm i nodemon --D

//added start script and dev script
//for scripts other than start use run
//e.g  npm run dev

//version ^2.4.5
//here 2 means major version
//4 means minor version
//5 means patch
//^ means go ahead and apply update to min and patch version
//but don't do anything to major
//major verison might cause breaking changes

//version ~2.4.5
// change patch but don't change minor

//packagename : "*"
//go ahead and change every thing

//install a specific version
//npm i uuid@5.6.6

//npm update
//to update minor and patch version

//remove package
//npm rm nodemon -D




