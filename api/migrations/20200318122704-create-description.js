'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('descriptions', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      field_1: {
        type: Sequelize.STRING
      },
      field_2: {
        type: Sequelize.STRING
      },
      field_3: {
        type: Sequelize.STRING
      },
      field_4: {
        type: Sequelize.STRING
      },
      field_5: {
        type: Sequelize.STRING
      },
      field_6: {
        type: Sequelize.STRING
      },
      field_7: {
        type: Sequelize.STRING
      },
      field_8: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('descriptions');
  }
};