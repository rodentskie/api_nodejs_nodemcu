const query = ({ models }) => {
  return Object.freeze({
    insertLedLogs,
    selectLogs,
  });

  async function insertLedLogs({ toInsert }) {
    try {
      // use sequelize on inserting
      const LedLogs = models.LedLogs;
      const res = await LedLogs.create(toInsert);
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }

  async function selectLogs({}) {
    try {
      // use sequelize on inserting
      const LedLogs = models.LedLogs;
      const res = await LedLogs.findAll({
        limit: 10,
        order: [["id", "DESC"]],
      });
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
};

module.exports = query;
