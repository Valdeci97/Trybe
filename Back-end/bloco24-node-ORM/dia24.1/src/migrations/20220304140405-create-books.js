'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    const booksTable = queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        type: Sequelize.INTEGER,
      },
      title: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      author: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      }
    });

    return booksTable;
  },

  async down (queryInterface, Sequelize) {
    queryInterface.dropTable('Books');
  }
};
