import { Router } from "express";

const authRouter = Router();

/* 
POST /api/v1/auth/register
POST /api/v1/auth/login
POST /api/v1/auth/logout        (optional)
GET  /api/v1/auth/me
*/

authRouter.get("/me", (req, res) => {
    res.json({
        "message": "GET /api/v1/auth/me"
    });
});

authRouter.post("/register", (req, res) => {
    res.json({
        "message": "POST /api/v1/auth/register"
    });
});

authRouter.post("/login", (req, res) => {
    res.json({
        "message": "POST /api/v1/auth/login"
    });
});

authRouter.post("/logout", (req, res) => {
    res.json({
        "message": "POST /api/v1/auth/logout"
    });
});


export default authRouter;