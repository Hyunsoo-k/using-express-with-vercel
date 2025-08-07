import express from 'express';
import asyncHandler from 'express-async-handler';

import getRootMiddleware from '../middleware/root/get-root.js';
import getRootController from '../controller/root/get-root.js';
import errorHandler from '../error-handler/error-handler.js';

const router = express.Router();
router
  .get(
    '/',
    asyncHandler(getRootMiddleware),
    asyncHandler(getRootController),
    errorHandler
  );

export default router;