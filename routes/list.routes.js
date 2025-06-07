import express from 'express';

import { createList, getAllLists} from '../controllers/list.controller.js';

const router = express.Router();

router.post('/', createList);
router.get('/', getAllLists)

export default router;