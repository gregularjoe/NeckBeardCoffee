// import Router from "express";
// import { javaMockData } from "../utils/mock-data.mjs";
// import { resolveIndexByCoffeeId } from "../utils/resolveIndexById.mjs";

// const router = Router();


// router.get("/api/java", (req, res) => {
//    return  res.send(javaMockData)
// });

// router.get("/api/java/:id", resolveIndexByCoffeeId, (req, res) => {
//    const { findCoffeeIndex } = req;
//    const findCoffee = coffeeMockData[findCoffeeIndex];
//    if (!findCoffee) {
//      return res.status(400).send({ error: "Bad Request. ID Not Found." });
//    }
//    return res.send(findCoffee);
//  });



// export default router;