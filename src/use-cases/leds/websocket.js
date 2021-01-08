const webSocket = ({ ledsDb, io }) => {
  return function socket(info) {
    io.on("connection", (socket) => {
      console.log("eut rhea connected");
    });
  };
};

module.exports = webSocket;
