const fs = require("fs");

global.creator = "ohmyriiss28";
global.apikey = ["omr28", "free", "ohmyriiss28"];

let file = require.resolve(__filename);
fs.watchFile(file, () => {
	fs.unwatchFile(file);
	console.log(`Update'${__filename}'`);
	delete require.cache[file];
	require(file);
});
