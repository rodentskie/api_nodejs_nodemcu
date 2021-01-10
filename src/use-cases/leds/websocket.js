const webSocket = ({ ledsDb, io }) => {
  return function socket(info) {
    io.on("connection", (socket) => {
      console.log("Someone has connected.");
      // if receive 1; on led
      socket.on("1", async (data) => {
        // insert to db
        const toInsert = {
          triggeredThru: `Turn on using app.`,
        };
        await ledsDb.insertLedLogs({ toInsert });
        // emit to all client that led is on;
        const toEmit = {
          value: 1,
        };
        io.emit("message", toEmit);
      });

      // if receive 0; off led
      socket.on("0", async (data) => {
        // insert to db
        const toInsert = {
          triggeredThru: `Turn off using app.`,
        };
        await ledsDb.insertLedLogs({ toInsert });
        // emit to all client that led is off;
        const toEmit = {
          value: 0,
        };
        io.emit("message", toEmit);
      });

      // manually triggered led
      socket.on("manual", async (data) => {
        if (data == 0) {
          // insert to db
          const toInsert = {
            triggeredThru: `Turn off using manual switch.`,
          };
          await ledsDb.insertLedLogs({ toInsert });
          // turn off all client
          const toEmit = {
            value: 0,
          };
          io.emit("msg", toEmit);
        } else {
          // insert to db
          const toInsert = {
            triggeredThru: `Turn on using manual switch.`,
          };
          await ledsDb.insertLedLogs({ toInsert });
          // turn on all client
          const toEmit = {
            value: 1,
          };
          io.emit("msg", toEmit);
        }
      });

      io.emit("getStatus"); // get current status of LED

      // get all logs; select top 10 only;
      socket.on("logs", async (data) => {
        const items = []; // store logs here
        const res = await ledsDb.selectLogs({});
        for (let i = 0; i < res.length; i++) {
          const e = res[i].dataValues;
          items.push(e);
        }
        io.emit("logs", items);
      });
    });
  };
};

module.exports = webSocket;
