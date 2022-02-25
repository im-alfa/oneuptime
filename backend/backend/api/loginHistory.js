import express from 'express'
import loginHistoryService from '../services/loginHistoryService'

const router = express.Router();
import { isAuthorized } from '../middlewares/authorization'
const getUser = require('../middlewares/user').getUser;
const sendErrorResponse = require('../middlewares/response').sendErrorResponse;
const sendItemResponse = require('../middlewares/response').sendItemResponse;

router.get('/:userId', getUser, isAuthorized, async function(req, res) {
    try {
        const userId = req.params.userId;
        let { skip, limit } = req.query;
        if (!skip) {
            skip = 0;
        }
        if (!limit) {
            limit = 10;
        }
        const select = 'userId createdAt ipLocation device status';
        const historyLogs = await loginHistoryService.findBy({
            query: { userId },
            skip,
            limit,
            select,
        });

        return sendItemResponse(req, res, historyLogs);
    } catch (error) {
        return sendErrorResponse(req, res, error);
    }
});

export default router;
