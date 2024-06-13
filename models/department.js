"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.Jabatan, {
        foreignKey: "id_department",
        as: "jabatans",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Department.init(
    {
      nama_department: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Department",
    }
  );

  return Department;
};
