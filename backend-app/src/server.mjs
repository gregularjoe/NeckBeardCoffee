import  express  from "express";
import cors from "cors";
import router from "./routes/coffee.router.mjs";

const app = express();

app.use(express.json());
app.use(cors({origin: [
    "http://localhost:4200"
], credentials: true}));

app.use(router);

app.get("/", (req, res) => {
    res.send("HEY its neckbeard");
});

app.listen(3000)