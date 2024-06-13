const { Karyawan } = require('../models');

exports.getAllKaryawan = async (req, res) => {
  try {
    const karyawan = await Karyawan.findAll();
    res.json(karyawan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.getKaryawanById = async (req, res) => {
  try {
    const { id } = req.params;
    const karyawan = await Karyawan.findByPk(id);
    if (karyawan) {
      res.json(karyawan);
    } else {
      res.status(404).json({ message: 'Karyawan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createKaryawan = async (req, res) => {
  try {
    const newKaryawan = await Karyawan.create(req.body);
    res.status(201).json(newKaryawan);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateKaryawan = async (req, res) => {
  try {
    const { id } = req.params;
    const [updated] = await Karyawan.update(req.body, {
      where: { id: id }
    });
    if (updated) {
      const updatedKaryawan = await Karyawan.findByPk(id);
      res.status(200).json(updatedKaryawan);
    } else {
      res.status(404).json({ message: 'Karyawan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.deleteKaryawan = async (req, res) => {
  try {
    const { id } = req.params;
    const deleted = await Karyawan.destroy({
      where: { id: id }
    });
    if (deleted) {
      res.status(204).json();
    } else {
      res.status(404).json({ message: 'Karyawan not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
