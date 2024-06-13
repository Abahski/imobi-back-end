const { Jabatan } = require("../models");
const { Department } = require("../models");

exports.getAllJabatan = async (req, res) => {
  try {
    const jabatan = await Jabatan.findAll();
    res.json(jabatan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJabatanById = async (req, res) => {
  try {
    const { id } = req.params;
    const jabatan = await Jabatan.findByPk(id);
    if (jabatan) {
      res.json(jabatan);
    } else {
      res.status(404).json({ message: "Jabatan not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getJabatanByDepartmentId = async (req, res) => {
  try {
    const { departmentId } = req.params;
    const jabatan = await Jabatan.findAll({
      where: { id_department: departmentId },
    });
    res.json(jabatan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createJabatan = async (req, res) => {
  try {
    const newJabatan = await Jabatan.create(req.body);
    res.status(201).json(newJabatan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateJabatan = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Jabatan.update(req.body, {
      where: { id: id },
    });
    if (updated) {
      const updatedJabatan = await Jabatan.findByPk(id);
      res.status(200).json(updatedJabatan);
    } else {
      res.status(404).json({ message: "Jabatan not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteJabatan = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Jabatan.destroy({
      where: { id: id },
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: "Jabatan not found" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
