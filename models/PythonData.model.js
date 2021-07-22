module.exports = (sequelize, Sequelize) => {
    const PythonData = sequelize.define('pythondata', {
        id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
        data: { type: Sequelize.STRING, allowNull: false },

        createdAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
        updatedAt: { type: Sequelize.DATE, allowNull: false, defaultValue: Sequelize.NOW },
    });

   
    return PythonData;
}