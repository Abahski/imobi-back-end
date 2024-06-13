"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    static associate(models) {
      Karyawan.belongsTo(models.Jabatan, {
        foreignKey: "id_jabatan",
        as: "jabatan",
        onDelete: "CASCADE",
        onUpdate: "CASCADE",
      });
    }
  }

  Karyawan.init(
    {
      nama: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      id_jabatan: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
          model: "Jabatans",
          key: "id",
        },
      },
      umur: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      gender: {
        type: DataTypes.ENUM('L', 'P'),
        allowNull: false,
      },
      tanggal_lahir: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      alamat: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: "Karyawan",
    }
  );

  return Karyawan;
};
