const rp = require("request-promise");

const uri = "http://localhost:3000";
const spamServer = async (uri, times = 1) => {
  for (let x = 0; x <= times; ++x) {
    const response = await rp.get(uri);
    console.log(response);
  }
};

spamServer(uri, 100);
