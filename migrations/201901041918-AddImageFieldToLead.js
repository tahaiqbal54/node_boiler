'use strict';


const columnAndTypes = [{
  name: 'image',
  type: (Sequelize) => {
    return {
      type: Sequelize.STRING,
      allowNull: true,
      defaultValue: false
    }
  }
}];

// Don't change it
module.exports = {
  up: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map(c => {
        return queryInterface.addColumn(
          'Leads',
          c.name,
          c.type(Sequelize)
        )
      })
    );
  },

  down: (queryInterface, Sequelize) => {
    return Promise.all(
      columnAndTypes.map(c => {
        return queryInterface.removeColumn(
          'Leads',
          c.name,
        )
      })
    )
  }
};