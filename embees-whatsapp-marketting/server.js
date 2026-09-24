import express from "express";
import cors from "cors";
import contactsRouter from "./routes/contacts.js";

const app= express();

app.use(cors());
app.use(express.json());

app.use("/api/contacts",contactsRouter);

const PORT = 5500;
// app.get("/",(req,res) =>{
//     res.send("Backend is working");
// });
app.listen(PORT ,()=>{
    console.log(`Server running on port ${PORT}`);
});