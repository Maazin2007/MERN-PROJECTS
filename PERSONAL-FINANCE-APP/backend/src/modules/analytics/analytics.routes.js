import { Router } from "express";

const analyticsRouter = Router();

/* 
GET /api/v1/analytics/monthly
GET /api/v1/analytics/categories
GET /api/v1/analytics/subscriptions
*/

analyticsRouter.get("/monthly", (req, res) => {
    res.json({
        "message": "GET /api/v1/analytics/monthly"
    });
});

analyticsRouter.get("/categories", (req, res) => {
    res.json({
        "message": "GET /api/v1/analytics/categories"
    });
});

analyticsRouter.get("/subscriptions", (req, res) => {
    res.json({
        "message": "GET /api/v1/analytics/subscriptions"
    });
});

export default analyticsRouter;