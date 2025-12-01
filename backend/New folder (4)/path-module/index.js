const path=require('path');
console.log(path.basename(__filename));
console.log(path.dirname(__dirname));
console.log(path.extname(__filename));

const joipath=path.join('/user','document','node','project');
console.log(joipath);

const resolvepath=path.resolve('/user','document','node','project');
console.log(resolvepath);

const normalizePath=path.normalize("/user/.document/../index.js");
console.log(normalizePath);