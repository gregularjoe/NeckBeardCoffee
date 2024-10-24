import { coffeeMockData } from "./mock-data.mjs";


export const resolveIndexByCoffeeId = (req, res, next) => {
  const { params: { id }, } = req;
  const parsedId = parseInt(id);

  if (isNaN(parsedId)) {
    return res.sendStatus(400);
  }
  const findCoffeeIndex = coffeeMockData.findIndex((coffee) => coffee.id === parsedId);
  if (findCoffeeIndex === -1) {
    return res.sendStatus(404);
  }
  req.findCoffeeIndex = findCoffeeIndex;
  next();
};