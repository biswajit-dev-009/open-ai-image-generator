const { Router } = require('express');
const router = Router();
const { generateImage } = require('../controllers/openaiController');

router.post('/generate-image', generateImage);

module.exports = router;