const express = require('express')
const router = express.Router();

const studentsController = require('../controllers/StudentsController')

router.get('/', studentsController.index);

// router.post('/add', studentsController.add);

// router.put('/update', studentsController.update);

// router.delete('/delete', studentsController.delete);

module.exports = router;
