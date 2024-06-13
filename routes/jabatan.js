const express = require('express');
const router = express.Router();
const jabatanController = require('../controllers/jabatanControllers');

router.get('/', jabatanController.getAllJabatan);
router.get('/:id', jabatanController.getJabatanById);
router.get('/department/:departmentId', jabatanController.getJabatanByDepartmentId);
router.post('/', jabatanController.createJabatan);
router.put('/:id', jabatanController.updateJabatan);
router.delete('/:id', jabatanController.deleteJabatan);

module.exports = router;
