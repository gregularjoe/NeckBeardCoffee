import Router from "express";
import { coffeeMockData } from "../utils/mock-data.mjs";

const router = Router();

router.get("/api/coffee", (req, res) => {
    res.send(coffeeMockData);
});




export default router;