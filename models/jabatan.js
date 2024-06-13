"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Jabatan extends Model {
    static associate(models) {
      Jabatan.belongsTo(models.Department, {
        foreignKey: "id_department",
        as: "department",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
      Jabatan.hasMany(models.Karyawan, {
        foreignKey: "id_jabatan",
        as: "karyawans",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Jabatan.init(
    {
      id_department: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Departments",
          key: "id",
        },
      },
      nama_jabatan: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Jabatan",
    }
  );

  return Jabatan;
};
