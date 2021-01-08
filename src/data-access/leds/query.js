const query = ({ connects, models }) => {
  return Object.freeze({
    insertLedLogs,
  });

  async function insertLedLogs({ data }) {
    try {
      // use sequelize on inserting
      const LedLogs = models.LedLogs;
      const res = await LedLogs.create(data);
      return res;
    } catch (e) {
      console.log("Error: ", e);
    }
  }
};

module.exports = query;
