import { Router } from "express";

const budgetRouter = Router();

/* 
POST /api/v1/budgets
GET  /api/v1/budgets
PUT  /api/v1/budgets/:id
*/

budgetRouter.get("/", (req, res) => {
    res.json({
        "message": "GET /api/v1/budgets"
    });
});

budgetRouter.post("/", (req, res) => {
    res.json({
        "message": "POST /api/v1/budgets"
    });
});

budgetRouter.put("/:id", (req, res) => {
    res.json({
        "message": "PUT /api/v1/budgets/:id"
    });
});


export default budgetRouter;