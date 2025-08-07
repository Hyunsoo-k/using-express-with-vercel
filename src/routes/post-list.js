import express from 'express';
import asyncHandler from 'express-async-handler';

import getPostListMiddleware from '../middleware/post-list/get-post-list.js';
import getPostListController from '../controller/post-list/get-post-list.js'
import errorHandler from '../error-handler/error-handler.js';

const router = express.Router();
router
  .get(
    '/',
    asyncHandler(getPostListMiddleware),
    asyncHandler(getPostListController),
    errorHandler
  );

export default router;