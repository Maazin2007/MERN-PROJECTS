import express from "express";
import cookieParser from "cookie-parser";

// importing the routes
import authRouter from "./modules/auth/auth.routes.js";
import budgetRouter from "./modules/budgets/budget.routes.js";
import expenseRouter from "./modules/expenses/expense.routes.js";
import subscriptionRouter from "./modules/subscriptions/subscription.routes.js";
import analyticsRouter from "./modules/analytics/analytics.routes.js";

// creating instace of express
const app = express();

// routes
app.use("/api/v1/auth", authRouter);
app.use("/api/v1/budgets", budgetRouter);
app.use("/api/v1/expenses", expenseRouter);
app.use("/api/v1/subscriptions", subscriptionRouter);
app.use("/api/v1/analytics", analyticsRouter);

// middlewares
app.use(express.json());
app.use(cookieParser());

app.get("/", (req, res) => {
    res.json({
        "message": "Welcome to the Personal Finance Dashboard API"
    });
});

export default app;
