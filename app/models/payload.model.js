module.exports = (sequelize, Sequelize) => {
    const Payload = sequelize.define("payload", {
      Header: {
        type: Sequelize.STRING
      },
      HL7_Raw: {
        type: Sequelize.STRING
      },
      published: {
        type: Sequelize.BOOLEAN
      }
    });
    return Payload;
  };