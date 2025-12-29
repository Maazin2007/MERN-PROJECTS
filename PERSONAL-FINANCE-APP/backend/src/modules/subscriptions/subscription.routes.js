import { Router } from "express";

const subscriptionRouter = Router();

/* 
POST   /api/v1/subscriptions
GET    /api/v1/subscriptions
GET    /api/v1/subscriptions/:id
PUT    /api/v1/subscriptions/:id
DELETE /api/v1/subscriptions/:id
*/

subscriptionRouter.get("/", (req, res) => {
    res.json({
        "message": "GET /api/v1/subscriptions"
    });
});

subscriptionRouter.post("/", (req, res) => {
    res.json({
        "message": "POST /api/v1/subscriptions"
    });
});

subscriptionRouter.get("/:id", (req, res) => {
    res.json({
        "message": "GET /api/v1/subscriptions/:id"
    });
});

subscriptionRouter.put("/:id", (req, res) => {
    res.json({
        "message": "PUT /api/v1/subscriptions/:id"
    });
});

subscriptionRouter.delete("/:id", (req, res) => {
    res.json({
        "message": "DELETE /api/v1/subscriptions/:id"
    });
});

export default subscriptionRouter;