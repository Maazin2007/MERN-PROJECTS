import { Router } from "express";

const expenseRouter = Router();

/* 
POST   /api/v1/expenses
GET    /api/v1/expenses
GET    /api/v1/expenses/:id
PUT    /api/v1/expenses/:id
DELETE /api/v1/expenses/:id
*/

expenseRouter.get("/", (req, res) => {
    res.json({
        "message": "GET /api/v1/expenses"
    });
});

expenseRouter.post("/", (req, res) => {
    res.json({
        "message": "POST /api/v1/expenses"
    });
});

expenseRouter.get("/:id", (req, res) => {
    res.json({
        "message": "GET /api/v1/expenses/:id"
    });
});

expenseRouter.put("/:id", (req, res) => {
    res.json({
        "message": "PUT /api/v1/expenses/:id"
    });
});

expenseRouter.delete("/:id", (req, res) => {
    res.json({
        "message": "DELETE /api/v1/expenses/:id"
    });
});


export default expenseRouter;